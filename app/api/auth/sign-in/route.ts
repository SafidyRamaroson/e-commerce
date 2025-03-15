import { SignInSchema, SignInSchemaType } from "@/schemas/auth/SignInSchema";
import { handleError } from "@/utils/errors/handler";
import { validateData } from "@/utils/validationUtils";
import { NextRequest, NextResponse } from "next/server";
import { signInUser } from "@/services/authService";


/**
 * Handles user sign-in requests
 * @param req NextRequest containing email and password
 * @returns NextResponse with JWT token or error response
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
    try {
        // Parse and validate request body
        const data = await req.json();
        const validatedBody: SignInSchemaType = validateData(data, SignInSchema);

        const response = await signInUser(validatedBody);
        return NextResponse.json(response);
    } catch (error) {
        return handleError(error);
    }
};