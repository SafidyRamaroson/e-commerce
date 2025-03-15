import { ProductImage } from "@/components/atoms/shared/ProductImage";
import { ProductInfo } from "@/components/molecules/products/product/ProductInfo";

function ProductCard() {
    return (
        <div className="relative bg-transparent group bg-red-50">
            <ProductImage
                alt="Trend 1"
                src="a06kyuoj7iiltqsmdpl1"
                className="bg-violet-50 h-64 rounded-md object-cover"
                height={600}
            />
            {/**Overlay */}
            <div
                className="absolute inset-0 bg-black/40 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
            />

            <ProductInfo
                name="Chaussures de course Nike Air Zoom"
                description="Chaussures légères et confortables conçues pour la course à pied, avec un amorti en mousse et une semelle respirante."
                categoryName="Homme"
                className="absolute bottom-0 mx-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10"
            />
        </div>
    );
}

export { ProductCard };