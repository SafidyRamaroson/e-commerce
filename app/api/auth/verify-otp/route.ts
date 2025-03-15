import { registerUser } from "@/services/authService";
import { handleError } from "@/utils/errors/handler";
import { NextRequest, NextResponse } from "next/server";

/**
 * Handles user registration with OTP verification
 * @param req NextRequest containing registration data
 * @returns NextResponse with updated user or error response
 */
export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const data = await req.json();
    const response = await registerUser(data);
    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
};