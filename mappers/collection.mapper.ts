import { Category } from "@prisma/client";


export type CollectionDTO = Omit<Category, "createdAt" | "updatedAt"> ;


export abstract class CollectionDTOMapper {
    public static fromCollection(collection: Category): CollectionDTO {
        return {
            id: collection.id,
            name: collection.name,
            description: collection.description,
        };
    }

    public static fromCollections(collections: Category[]): CollectionDTO[] {
        return collections.map(this.fromCollection);
    }
}