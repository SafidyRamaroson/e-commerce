import { ProductDTOMapper } from "@/mappers";
import { RepositoryProvider } from "@/providers";
import { handleError } from "@/utils/errors/handler";
import { createResponse } from "@/utils/responseUtils";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, { params }: { params:Promise<{ id: string }> }) => {
    try {
        // user id param
        const productId = (await params)?.id;
        
        // Check if the product id is valid
        if (!productId || isNaN(Number(productId))) {
            return NextResponse.json(
              createResponse({}, "ID de produit invalide"),
              { status: 400 }
            );
        }

        // Get product details with media
        const productWithMedia = await RepositoryProvider.productRepository.findOne({
            where: { id: Number(productId) }
        })
        
        if(!productWithMedia) {
            return NextResponse.json(createResponse({}, `Le produit ${productId} n'existe pas`), { 
                status: 404
            });
        }

        // Get formatted product details
        const formattedProductWithMedia = ProductDTOMapper.fromProduct(productWithMedia);
        return NextResponse.json(createResponse(formattedProductWithMedia, `Details du produit ${productId}`), { 
            status: 200
        });
    } catch (error) {
        return handleError(error)
    }
}