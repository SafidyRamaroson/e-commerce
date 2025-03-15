import { CldImage } from "next-cloudinary";
import { ProductDTO } from "@/utils/DTOMapper";
import { useState } from "react";

interface ProductImageGalleryProps {
  medias: ProductDTO["medias"];
}

export const ProductImageGallery = ({ medias }: ProductImageGalleryProps) => {

  const [mainPublicId, setMainPublicId] = useState<string | null>(null);

  // For the first time, set the main image to the first image
  // If the user clicks on another image, set the main image to the clicked image
  const handleOnImageClick = (publicId: string) => {
    setMainPublicId(publicId);
  }


  return (
    <div className="w-full mt-4 md:col-span-6 sm:col-span-8">
      {medias?.[0] && (
        <CldImage
          src={mainPublicId ?? medias[0].public_id}
          alt={medias[0].original_filename}
          width={400}
          height={400}
          className="w-full bg-violet-50 rounded-md h-[500px] object-fill"
          removeBackground
        />
      )}
      <div className="grid grid-cols-6 my-6 gap-1">
        {medias?.slice(0,6).map((media, index) => (
          <CldImage
            key={index}
            src={media.public_id}
            alt={media.original_filename}
            width={80}
            height={80}
            className={`w-full bg-gray-50 rounded-md h-[80px] object-fill hover:cursor-pointer  hover:border-gray-500 ${mainPublicId === media.public_id ? 'border-slate-500 border-2' : ''}`}
            onClick={() => handleOnImageClick(media.public_id)}
            removeBackground
          />
        ))}
      </div>
    </div>
  );
};