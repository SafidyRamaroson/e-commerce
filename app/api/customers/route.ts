import { RepositoryProvider } from "@/providers";
import { createResponse } from "@/utils/responseUtils";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest) => {
    const allCustomers = await RepositoryProvider.userRepository.findMany({});
    return NextResponse.json(createResponse(allCustomers, "Liste des utilisateurs"));
}