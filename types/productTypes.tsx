import { Product, Category, ProductMedia } from "@prisma/client";

export type ProductMediaDTO = Omit<ProductMedia, "productId" | "createdAt" | "updatedAt">;

export type ProductDTO = Omit<Product, "categoryId"> & {
    category: Pick<Category, "id" | "name"> | null;
    medias: ProductMediaDTO[] | null;
};

export type StatsProducts = {
    insufficientStock: number;
    sufficientStock: number;
}

export type ProductsResponse = {
    products: ProductDTO[];
    statsProducts: StatsProducts;
}
