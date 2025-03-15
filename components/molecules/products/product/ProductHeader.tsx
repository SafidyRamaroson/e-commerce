import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";

interface ProductHeaderProps {
  productName: string;
  productId: number;
}

export const ProductHeader = ({ productName, productId }: ProductHeaderProps) => {
  return (
    <LayoutSectionHeader
      title="Gestion des produits"
      subtitle={`Détails de : ${productName} # ${productId}`}
    />
  );
};