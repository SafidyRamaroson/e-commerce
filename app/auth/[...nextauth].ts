import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/configs/prisma.config";
import { comparePassword } from "@/utils/bcryptUtils";
import { RepositoryProvider } from "@/providers";
import { validateData } from "@/utils/validationUtils";
import { SignInSchema } from "@/schemas/auth/SignInSchema";


export const authOptions = {
    providers: [
        Credentials({
            name: "Credentiels",
            credentials: {
                email: { label: "email", type: "email"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credentials, req) {
              const result =  SignInSchema.safeParse(credentials);
              if(!result.success){
                return null
              }

              const foundUser = RepositoryProvider.userRepository.findOne({
                where: {
                  email: credentials?.email
                }
              })

              if(!foundUser){
                return null
              }

              return { ...foundUser }
            },
        }),
    ],
    session: { strategy: "jwt"},
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
        }
        return token;
      },
      async session({ session, token }) {
        session.user.id = token.id;
        return session;
      },
    },
    secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);