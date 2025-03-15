"use client"

import { OptionSelectType } from "@/components/molecules/shared/Select";
import { ProductListTemplate } from "@/components/templates/ProductListTemplate";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";
import { useGet } from "@/hooks/useGet";
import { ProductsResponse } from "@/types/ProductsResponse";
import { useState } from "react";

export default function OurProductsPage() {
    const { isPending, isError, data: response, error } = useGet<ProductsResponse>({
      endpoint: "/api/products",
      queryKey: "products",
    });
  
    const [sortBy, setSortBy] = useState<OptionSelectType | null>(null);
    const [showFilters, setShowFilters] = useState<boolean>(true);
  
    if (isError) return <span>{error.message}</span>;
    if (isPending) return <LoadingAnimation />;
  
    const products = response?.data?.products || [];
  
    return (
      <ProductListTemplate
        products={products}
        showFilters={showFilters}
        sortBy={sortBy}
        onToggleFilters={() => setShowFilters((prev) => !prev)}
        onSortChange={setSortBy}
      />
    );
  }