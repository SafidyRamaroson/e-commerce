import { ProductDescription } from "@/components/atoms/shared/ProductDescription";
import { ProductImage } from "@/components/atoms/shared/ProductImage";
import { ProductPrice } from "@/components/atoms/shared/ProductPrice";
import { ProductThumbnailList } from "@/components/molecules/shared/ProductThumbnailList";
import { useRouter } from "next/navigation";
import { cn } from "@/utils/tailwind";
import { ProductTitle } from "@/components/atoms/shared/ProductTitle";
import { ProductColorNumbers } from "@/components/atoms/shared/productColorNumbers";
import { ProductDTO } from "@/types/productTypes";

type ProductCardProps = {
    product: ProductDTO;
    className?: string
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
    const router = useRouter();

    const handleDetailsProductView = () => {
        router.push(`/our-products/${product.id}/details`)
    }

    return (
        <div 
            className={cn("col-span-1 sm:px-2 pt-2 rounded-lg my-5 cursor-pointer py-2", className)}
            onClick={() => handleDetailsProductView()}
        >
            <ProductImage
                src={product?.medias?.[0]?.public_id || ""}
                alt={product?.name}
                className="rounded-lg w-full bg-gray-50"
            />
            <ProductThumbnailList medias={product?.medias || []} productName={product?.name} />
            <ProductTitle className="text-yellow-500">{product.name}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductColorNumbers>{product.medias?.length} couleurs</ProductColorNumbers>
            <ProductPrice price={product.price} />
            {/**
             *
            <Button
                label="Ajouter au panier"
                icon={<ShoppingCart />}
                iconPosition="left"
                className="w-full mt-2"
            />
             */}
        </div>
    )
}