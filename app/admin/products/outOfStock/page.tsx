"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";
import ProductsDataTable from "@/components/organisms/shared/Data-table";
import { columns } from "@/components/organisms/admin/products/productsTable/columns";
import { useGet } from "@/hooks/useGet";
import { ProductDTO } from "@/utils/DTOMapper";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";


function OutOfStock() {
    const { isPending, isError, data: response, error } = useGet<ProductDTO[]>({
        endpoint: "/api/products/outOfStock",
        queryKey: "outOfStockProducts",
    });

    const outOfStockProducts = response?.data || [];

    if (isError) {
        return <div>Erreur: {error.message}</div>;
    }

    if (isPending) {
        return <LoadingAnimation />
    }

    return (
        <div>
            <LayoutSectionHeader
                title="Gestion des Produits"
                subtitle="Liste des produits en rupture de stock"
            />
            <div className="mt-6">
                <Suspense fallback={<LoadingAnimation />}>
                    <ProductsDataTable columns={columns} data={outOfStockProducts} emptyTableMessage="Aucun produit trouvé" />
                </Suspense>
            </div>
        </div>
    )
}

export default OutOfStock;