import { Dispatch, SetStateAction } from "react";
import { FilterToggleButton } from "../molecules/shared/FilterToggleButton";
import { ProductDTO } from "@/utils/DTOMapper";
import { OptionSelectType } from "@/components/molecules/shared/Select";
import { SortSelector } from "@/components/molecules/shared/SortSelector";
import { ProductList } from "@/components/organisms/ProductList";

function ProductListTemplate({
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

        <div className="w-11/12 mx-auto">
            <div className="flex items-center justify-end gap-4 mb-4">
                <FilterToggleButton showFilters={showFilters} onToggle={onToggleFilters} />
                <SortSelector value={sortBy} onChange={onSortChange} />
            </div>
            <ProductList products={products} showFilters={showFilters} />
        </div>
    );
}

export { ProductListTemplate }