import { cloudinary } from "@/configs/cloudinary.config";



export const GET = async() => {
    const ressources = await cloudinary.api.resources();
    console.log("ressources", ressources);

    return Response.json(ressources);
}