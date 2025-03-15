import { Prisma } from "@prisma/client";
import { ProductSizes } from "./ProductSizes";
import { cn } from "@/utils/tailwind";

type ProductInfoProps = {
  name: string;
  categoryName?: string;
  description: string;
  price?: Prisma.Decimal;
  sizes?: string[];
  className?: string;
}

function ProductInfo({ name, categoryName, description, price, sizes, className }: ProductInfoProps) {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="font-bold sm:text-2xl text-lg mb-3 text-slate-200">{name}</h2>
      <h5 className="sm:text-base text-slate-200 mb-2">{categoryName}</h5>
      <p className="sm:font-semibold font-medium text-base mb-3 text-slate-200">{description}</p>
      {price && (
        <p className="font-bold text-base mb-3 text-slate-800">
          Prix: Ar {price?.toString()}
        </p>
      )
      }
      {
        sizes && (
          <ProductSizes sizes={sizes || []} />
        )
      }
    </div>
  );
};

export { ProductInfo };