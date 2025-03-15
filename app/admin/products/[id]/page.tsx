'use client';

import { useGet } from "@/hooks/useGet";
import { ProductDTO } from "@/utils/DTOMapper";
import { useParams } from "next/navigation";
import { Prisma } from "@prisma/client";
import { ProductBreadcrumb } from "@/components/organisms/admin/products/details/ProductBreadcrumb";
import { ProductImageGallery } from "@/components/organisms/admin/products/details/ProductImageGallery";
import { ProductInfo } from "@/components/molecules/products/product/ProductInfo";
import { ProductReviews } from "@/components/molecules/products/product/ProductReviews";
import { ProductHeader } from "@/components/molecules/products/product/ProductHeader";


export default function ProductDetailPage() {
    const { id: productId } = useParams<{ id: string }>();

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
        return <div>Chargement...</div>;
    }

    if (isError) {
        return <div>Erreur: {error?.message}</div>;
    }

    return (
        <div>
            <ProductBreadcrumb productName={product.name} />
            <ProductHeader productName={product.name}  productId={product.id}/>
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
                    <ProductReviews
                        productId={product.id}
                        rating={4.5}
                    />
                </div>
            </div>
        </div>
    );
}