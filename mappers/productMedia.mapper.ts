import { ProductMediaDTO } from "@/types/productTypes";
import { ProductMedia } from "@prisma/client";

export abstract class ProductMediaDTOMapper {

    public static fromProductMedia(media: ProductMedia): ProductMediaDTO{
        return {
            id: media.id,
            public_id: media.public_id,
            format: media.format,
            resource_type: media.resource_type,
            original_filename: media.original_filename,
            type: media.type
        }
    }


    public static fromProductsMedia(medias: ProductMedia[]): ProductMediaDTO[] {
        return medias.map(this.fromProductMedia)
    }
}