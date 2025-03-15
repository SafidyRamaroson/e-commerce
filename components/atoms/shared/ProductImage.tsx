import { CldImage } from "next-cloudinary";

type ProductImageProps = {
    src: string;
    alt: string;
    width?: number;
    height?: number
    className?: string;
}

function ProductImage({ src, alt, width = 500, height = 300, className = "border object-cover rounded-lg"}: ProductImageProps){
    return (
        <CldImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            removeBackground
        />
    );
} 

export { ProductImage }