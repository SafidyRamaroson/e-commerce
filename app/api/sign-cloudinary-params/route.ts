import { cloudinary } from "@/configs/cloudinary.config";
import { NextRequest } from "next/server";

export const POST = async(req: NextRequest) => {
  const body = await req.json();
  
  const { paramsToSign } = body;

  const signature = cloudinary.utils.api_sign_request(paramsToSign, process.env.CLOUDINARY_API_SECRET!);

  return Response.json({ signature });
}