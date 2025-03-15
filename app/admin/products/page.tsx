"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { columns } from "@/components/organisms/admin/products/productsTable/columns";
import { StatsOverviewProducts } from "@/components/organisms/admin/products/StatsOverview/StatsOverviewProducts";
import ProductsDataTable from "@/components/organisms/shared/Data-table";
import { Button } from "@/components/ui/button";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";
import { useGet } from "@/hooks/useGet";
import { ProductDTO } from "@/utils/DTOMapper";
import { StatsProducts } from "@/utils/helphers";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  
  const { isPending, isError, data: response , error } = useGet<{ products: ProductDTO[] , statsProducts: StatsProducts}>({
    endpoint: "/api/products",
    queryKey: "products",
  });

  const statsProducts = response?.data?.statsProducts || { insufficientStock: 0, sufficientStock: 0 };
  const products = response?.data?.products || [];
  const { insufficientStock, sufficientStock } = statsProducts;

  if (isError) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div>
      <div className="flex flex-row items-end w-full justify-between">
        <LayoutSectionHeader title="Gestion des Produits" subtitle="Liste des Produits en stock" />
        <Link href="/admin/products/new">
          <Button label="Ajouter" icon={<Plus />} iconPosition="left" />
        </Link>
      </div>
      <StatsOverviewProducts nbrInsufficientStock={sufficientStock} nbrSufficientStock={insufficientStock} />
      <div>
        {isPending ? (
          <LoadingAnimation />
        ) : (
          <ProductsDataTable columns={columns} data={products} emptyTableMessage="Aucun produit trouvé" />
        )}
      </div>
    </div>
  );
}
