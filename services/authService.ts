import { RepositoryProvider } from "@/providers/repositoryProviders";
import { RegisterSchema, RegisterSchemaType } from "@/schemas/auth/RegisterForm";
import { comparePassword, getHashPassword } from "@/utils/bcryptUtils";
import { AuthenticationError, NotFoundError } from "@/utils/errors";
import { generateSimpleOTP } from "@/utils/otpUtils";
import { createResponse } from "@/utils/responseUtils";
import { validateData } from "@/utils/validationUtils";
import { sendVerificationEmail } from "./emailService";
import { EmailSchema } from "@/schemas/auth/EmailSchema";
import { SignInSchemaType } from "@/schemas/auth/SignInSchema";
import { JwtPayload , sign } from "jsonwebtoken";



const JWT_SECRET = process.env.JWT_SECRET ?? "jwtsecretVestiGo";
const JWT_EXPIRATION = "7d";


export const registerUser = async (data: RegisterSchemaType) => {
    try {
        // Parse and validate request body
        const validatedBody: RegisterSchemaType = validateData(data, RegisterSchema);

        // Find user by email
        const user = await RepositoryProvider.userRepository.findOne({
            where: {
                email: validatedBody.email,
            },
        });

        if (!user) {
            throw new NotFoundError({
                message: "L'utilisateur n'existe pas dans la base de données",
            });
        }

        // Validate OTP code and expiration
        const isCodeValid = user.otpCode && user.expiredCodeAt &&
            user.otpCode.toString() === validatedBody.code &&
            new Date() < user.expiredCodeAt;

        if (!isCodeValid) {
            throw new AuthenticationError({
                message: "Code incorrect ou expiré",
            });
        }

        // Hash password and update user
        const hashedPassword = await getHashPassword(validatedBody.password);
        const updatedUser = await RepositoryProvider.userRepository.updateOne({
            where: {
                email: validatedBody.email,
            },
            data: {
                firstName: validatedBody.firstName,
                lastName: validatedBody.lastName,
                password: hashedPassword,
                otpCode: null,
                expiredCodeAt: null,
            },
        });

        // Return success response
        return createResponse({ user: updatedUser }, "Utilisateur mis à jour avec succès")
    } catch (error) {
        throw error
    }
}


export const processEmailVerification = async (userEmail: string) => {
    // validate email params
    const { email: emailValidated } = validateData({ email: userEmail }, EmailSchema);

    //search user in database
    const foundUser = await RepositoryProvider.userRepository.findOne({
        where: {
            email: emailValidated
        }
    });

    // if user exist,and isEmailVerified is true , redirect user to login page
    if (foundUser && foundUser.isEmailVerified) {
        // redirect user to sign in page
        return createResponse({ redirect: "/auth/sign-in" }, "Email déja vérifié");
    }

    ///generate code
    const code = generateSimpleOTP();

    //await  send verification email process
    await sendVerificationEmail({
        sendTo: emailValidated,
        verificationCode: code
    });

    // if user exist and foundUser.isEmailVerified is false , generate another code
    if (foundUser && !foundUser.isEmailVerified) {
        await RepositoryProvider.userRepository.updateOne({
            where: { email: emailValidated },
            data: {
                otpCode: code,
                expiredCodeAt: new Date(Date.now() + 15 * 60 * 1000),
            },
        });
    } else {
        await RepositoryProvider.userRepository.createOne({
            data: {
                email: emailValidated,
                otpCode: code,
                expiredCodeAt: new Date(Date.now() + 15 * 60 * 1000),
            },
        });
    }

    //Redirect new user to register page 
    return createResponse({ redirect: "/auth/sign-up" }, "Email non vérifié");
}


export const signInUser = async (validatedBody: SignInSchemaType) => {
    const userRepository = RepositoryProvider.userRepository;

    // Rechercher l'utilisateur en base
    const user = await userRepository.findOne({
        where: { email: validatedBody.email },
    });

    if (!user) {
        throw new NotFoundError({ message: "L'utilisateur n'existe pas dans la base de données" });
    }

    // Vérifier le mot de passe
    const isPasswordValid = await comparePassword(validatedBody.password, user.password as string);
    if (!isPasswordValid) {
        throw new AuthenticationError({ message: "Email ou mot de passe incorrect" });
    }

    // Générer un JWT
    const tokenPayload: JwtPayload = {
        sub: user.id.toString(),
        email: user.email,
    };

    const token = sign(tokenPayload, JWT_SECRET, { expiresIn: JWT_EXPIRATION });

    // Retourner la réponse formatée
    return createResponse({ token }, "Utilisateur authentifié avec succès");
};