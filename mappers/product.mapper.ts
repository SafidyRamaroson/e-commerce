import { ProductDTO } from "@/types/productTypes";
import { Product, Category, ProductMedia } from "@prisma/client";
import { ProductMediaDTOMapper } from "./productMedia.mapper";

export abstract class ProductDTOMapper {

  public static fromProduct(
    product: Product & { category: Category | null; media: ProductMedia[] }
  ): ProductDTO {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      minimumThreshold: product.minimumThreshold,
      category: product.category
        ? { id: product.category.id, name: product.category.name }
        : null, // Retourner null au lieu d'une catégorie par défaut
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
      medias: ProductMediaDTOMapper.fromProductsMedia(product.media || []),
    };
  }

  public static fromProducts(
    products: (Product & { category: Category | null; media: ProductMedia[] })[]
  ): ProductDTO[] {
    return products.map(ProductDTOMapper.fromProduct);
  }
}