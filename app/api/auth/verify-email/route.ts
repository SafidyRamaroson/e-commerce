import { handleError } from "@/utils/errors/handler";
import { NextRequest, NextResponse } from "next/server";
import { processEmailVerification } from "@/services/authService";

const APP_NAME = "VestiGo"

{/** Lookup user by mail, 
    it is used to redirect user to login page 
    if user exist ,
    else to register page, 
    after check user existence , 
    we 're sending mail to the email  */}
export const POST = async (req: NextRequest) => {
    try {
        const { email } = await req.json();
        const response = await processEmailVerification(email);
        console.log(response)
        return NextResponse.json(response);
    } catch (error) {
        console.log(error);
        return handleError(error)
    }
}