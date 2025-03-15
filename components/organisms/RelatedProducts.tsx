import { ProductDTO } from "@/types/productTypes";
import { ProductCard } from "../molecules/shared/ProductCard"

type RelatedProductsProps = {
    products: ProductDTO[];
}

function RelatedProducts({ products }: RelatedProductsProps) {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    )
}

export { RelatedProducts }