import { Dispatch, SetStateAction } from "react";
import { FilterToggleButton } from "../molecules/shared/FilterToggleButton";
import { ProductDTO } from "@/utils/DTOMapper";
import { OptionSelectType } from "@/components/molecules/shared/Select";
import { SortSelector } from "@/components/molecules/shared/SortSelector";
import { ProductList } from "@/components/organisms/ProductList";

function NewProductListTemplate({
  products,
  showFilters,
  sortBy,
  onToggleFilters,
  onSortChange,
}: {
  products: ProductDTO[];
  showFilters: boolean;
  sortBy: OptionSelectType | null;
  onToggleFilters: () => void;
  onSortChange: Dispatch<SetStateAction<OptionSelectType | null>>;
}) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 py-6">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Nouveautés VestiGo ({products.length})
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-2 sm:gap-4 w-full sm:w-auto">
          <FilterToggleButton showFilters={showFilters} onToggle={onToggleFilters} />
          <SortSelector value={sortBy} onChange={onSortChange} />
        </div>
      </div>
      <ProductList products={products} showFilters={showFilters} />
    </div>
  );
}

export { NewProductListTemplate };