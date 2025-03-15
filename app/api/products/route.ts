import { NextRequest, NextResponse } from "next/server";
import { RepositoryProvider } from "@/providers/repositoryProviders";
import { createResponse } from "@/utils/responseUtils";
import { ConflictError, NotFoundError, ValidationError } from "@/utils/errors";
import { handleError } from "@/utils/errors/handler";
import { CreateProductSchema, CreateProductSchemaType } from "@/schemas/products/CreateProductSchema";
import { ProductDTOMapper } from "@/mappers";
import { getProductsMediaWithProductId, getStatsProducts } from "@/services/productService";
import { validateData } from "@/utils/validationUtils";


// Get all products 
export const GET = async (req: NextRequest) => {
    // Get all products with no filter
    const products = await RepositoryProvider.productRepository.findMany({});

    // Format products
    const productsWithMedia = ProductDTOMapper.fromProducts(products);

    // Get stats of products
    const statsProducts = getStatsProducts(productsWithMedia);

    // Return products with media and stats
    const responseData = {
        products: productsWithMedia,
        statsProducts: statsProducts
    }

    return NextResponse.json(createResponse(responseData, "Liste de toutes les produits en stock"), { status: 200 });
}

// Delete a product
export const DELETE = async (req: NextRequest) => {
    const id = req.nextUrl.searchParams.get("id");
    if (!id || isNaN(Number(id))) {
        throw new ValidationError({ message: "L'ID doit être un nombre valide." });
    }

    try {
        // Find existing product
        const foundProduct = await RepositoryProvider.productRepository.isExist({
            where: {
                id: Number(id)
            }
        });

        // Thro new error if product not found
        if (!foundProduct) {
            throw new NotFoundError({
                message: "La produit n'existe pas dans la base de données"
            });
        }

        // Delete product after checking if it exists
        const deletedProduct = await RepositoryProvider.productRepository.deleteOne({
            where: {
                id: Number(id)
            }
        });

        return NextResponse.json(createResponse(deletedProduct, "Produit supprimé avec succès"), { status: 200 });
    } catch (error) {
        return handleError(error);
    }
}


export const POST = async (req: NextRequest) => {
    const data = await req.json();

    try {
        // Validate body request with our zod schema and throw validation error if not valid
        validateData<CreateProductSchemaType>(data, CreateProductSchema);

        // Verify if product name already exists
        const foundProduct = await RepositoryProvider.productRepository.isExist({
            where: {
                name: data.name
            }
        });

        if (foundProduct) {
            throw new ConflictError({ message: "Le nom du produit existe déjà dans la base de données." });
        }

        //Verify if category exists
        const foundCategory = await RepositoryProvider.categoryRepository.isExist({
            where: {
                id: data.categoryId
            }
        });
        
        if (!foundCategory) {
            throw new NotFoundError({ message: "La catégorie n'existe pas dans la base de données." });
        }
        
        // Create product and their media products
        // First,create product after use idProduct to create media product

        const createdProduct = await RepositoryProvider
            .productRepository
            .createOne({
                data: {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    stock: data.stock,
                    minimumThreshold: data.minimumThreshold,
                    category: {
                        connect: { id: data.categoryId },
                    },
                }
            });
        
        const productId = createdProduct.id;

        // Create many media products
        const productsMediaData = getProductsMediaWithProductId(productId, data.medias);

        const createdProductsMedia = await RepositoryProvider
            .productMediaRepository
            .createMany({ data: productsMediaData });
        return NextResponse.json(createResponse({...createdProduct, medias: createdProductsMedia}, "Produit créé avec succès"), { status: 201 });
    } catch (error) {
        return handleError(error);
    }
}



































































































































































































































































































































































































































































































































































































