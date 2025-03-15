import { ProductDTO } from "@/types/productTypes";
import { ProductCard } from "../molecules/shared/ProductCard";

type ProductListProps = {
  products: ProductDTO[];
  showFilters?: boolean;
};

function ProductList({ products, showFilters }: ProductListProps) {
  return (
    <div className="grid grid-cols-12">
      {/* Panneau de filtres */}
      {showFilters && (
        <div className="col-span-2 row-span-full bg-gray-100 p-4">Filtre</div>
      )}

      {/* Liste des produits avec transition */}
      <div
        className={`${
          showFilters ? "col-span-10" : "col-span-12"
        } transition-all duration-600 ease-in-out`}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-0">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProductList };