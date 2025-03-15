import { ProductImage } from "@/components/atoms/shared/ProductImage";
import { ProductMediaDTO } from "@/utils/DTOMapper/productMedia.mapper";

type ProductThumbnailListProps = {
    medias: ProductMediaDTO[];
    productName: string;
};

function ProductThumbnailList({ medias, productName }: ProductThumbnailListProps){
    const visibleThumbnails = medias?.slice(0, 4) || [];
    const remainingCount = medias?.length > 4 ? medias.length - 4 : 0;
  
    return (
      <div className="grid grid-cols-5 my-6 gap-1">
        {visibleThumbnails.map((media, index) => (
          <ProductImage
            key={index}
            src={media?.public_id}
            alt={productName}
            className="rounded-md w-full border bg-violet-50"
          />
        ))}
        {remainingCount > 0 && (
          <div className="text-center flex items-center justify-center rounded-md w-full">
            <span>+{remainingCount}</span>
          </div>
        )}
      </div>
    );
  };

  export { ProductThumbnailList }
  