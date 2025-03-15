import { Prisma } from "@prisma/client";

type ProductPriceProps = {
    price: Prisma.Decimal;
    className?: string;
}

function ProductPrice({ price, className = "font-semibold my-3" }: ProductPriceProps){
    return (
        <span className={className}>Ar {price.toString()}</span>
      );
}


  export { ProductPrice}