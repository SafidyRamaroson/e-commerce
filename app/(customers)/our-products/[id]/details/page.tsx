"use client"

import { ProductInfo } from "@/components/molecules/products/product/ProductInfo";
import { StarRating } from "@/components/molecules/shared/StarRating";
import { ProductImageGallery } from "@/components/organisms/admin/products/details/ProductImageGallery";
import { RelatedProducts } from "@/components/organisms/RelatedProducts";
import { Button } from "@/components/ui/button";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";
import { useGet } from "@/hooks/useGet";
import { ProductDTO, StatsProducts } from "@/types/productTypes";
import { Prisma } from "@prisma/client";
import { ShoppingCart } from "lucide-react";
import { useParams } from "next/navigation";


export default function ProductDetailsPage() {
    const { id: productId } = useParams<{ id: string }>();
    const { data: responseGet } = useGet<{ products: ProductDTO[], statsProducts: StatsProducts }>({
        endpoint: "/api/products",
        queryKey: "products",
    });

    const products = responseGet?.data?.products || [];

    const {
        isPending,
        isError,
        data: response,
        error,
    } = useGet<ProductDTO>({
        endpoint: `/api/products/${productId}`,
        queryKey: `product/${productId}`,
    });

    const product: ProductDTO = response?.data || {
        id: Number(productId) || 0,
        name: "",
        description: "",
        price: new Prisma.Decimal(0.0),
        stock: 0,
        minimumThreshold: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        category: { name: "", id: 0 },
        medias: [],
    };

    if (isPending) {
        return <LoadingAnimation />
    }

    if (isError) {
        return <div>Erreur: {error?.message}</div>;
    }

    return (
        <div className="w-4/5 mx-auto">
            {/**
             * Product details of the clicked product 
             */}
            <div className="grid grid-cols-12 gap-8">
                <ProductImageGallery medias={product.medias} />
                <div className="w-full mt-4 md:col-span-4 sm:col-span-4">
                    <ProductInfo
                        name={product.name}
                        categoryName={product?.category?.name ?? ""}
                        description={product.description}
                        price={product.price}
                        sizes={["S", "M", "L", "XL"]}
                    />
                    <StarRating
                        rating={3.5}
                    />
                    <Button
                        label="Connecte-toi  pour acheter"
                        icon={<ShoppingCart />}
                        iconPosition="left"
                        className="w-full mt-2"
                    />
                </div>
            </div>
            {/**
             * Related product list of the clicked product 
             */}
             <h2 className="text-3xl font-bold ml-2 mt-6">Ces articles devraient te plaire</h2>
            <RelatedProducts
                products={products}
            />
        </div>
    )
}