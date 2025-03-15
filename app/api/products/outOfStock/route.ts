import { NextRequest, NextResponse } from "next/server";
import { RepositoryProvider } from "@/providers";
import { createResponse } from "@/utils/responseUtils";
import { handleError } from "@/utils/errors/handler";
import { ProductDTOMapper } from "@/mappers";
import { prisma } from "@/configs/prisma.config";
import { ProductDTO } from "@/types/productTypes";

export const GET = async (req: NextRequest) => {
    try {
        // Get only products having stock < minimumThreshold
        const lowStockProducts = await RepositoryProvider.productRepository.findMany({
            where: {
                stock: {
                    lt: prisma.product.fields.minimumThreshold
                }
            }
        })

        // Format low stock products to ProductDTO
        const lowStockProductsDTO: ProductDTO[] = ProductDTOMapper.fromProducts(lowStockProducts);

        return NextResponse.json(createResponse(lowStockProductsDTO, "Produits en faible stock récupérés avec succès"), {
            status: 200,
        });
    } catch (error) {
        return handleError(error);
    }
}