import { Badge } from "@/components/ui/badge"

type ProductSizesProps = {
    sizes: string[];
  }
  
function ProductSizes ({ sizes }: ProductSizesProps){
    return (
      <div className="mt-4">
        <h6 className="font-semibold text-base text-slate-800 mb-2">Tailles :</h6>
        <div className="flex gap-2">
          {sizes.length > 0 ? (
            sizes.map((size) => (
                <Badge key={size} variant="outline" className="hover:bg-slate-100">
                    { size }
                </Badge>
            ))
          ) : (
            <p className="text-sm text-slate-600">Aucune taille disponible</p>
          )}
        </div>
      </div>
    );
  };

  export {  ProductSizes}