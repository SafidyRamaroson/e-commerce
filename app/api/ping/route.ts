import { CreateCollectionSchema } from "@/schemas/collections/CreateCollection"
import { NextRequest, NextResponse } from "next/server"
import { generateMock } from '@anatine/zod-mock';
import { CreateProductSchema } from "@/schemas/products/CreateProductSchema";

export async function GET(req: NextRequest) {
    const collectionMockData = generateMock(CreateCollectionSchema)
    const productMockData = generateMock(CreateProductSchema)
    return NextResponse.json({
        data: {collectionMockData, productMockData}
    }, { status: 200 })
    
}