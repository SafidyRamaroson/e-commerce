import { CreateProductMediaType } from "@/schemas/products/productMedia/CreateProductMedia";
import { ProductDTO, StatsProducts } from "@/types/productTypes";



export const getStatsProducts = (products: ProductDTO[]): StatsProducts =>{

    const insufficientStock = products?.filter((product) => product.minimumThreshold > product.stock).length;
    const sufficientStock = products?.length - insufficientStock;

    return {
        insufficientStock,
        sufficientStock
    }
}

export const getProductsMediaWithProductId = (productId: number, medias: CreateProductMediaType[]) => {
    return medias?.map((media) => ({
        ...media,
        productId
    }))
}