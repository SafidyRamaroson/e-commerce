"use client";

import { useState } from "react";
import { Hash } from "lucide-react";


export type CategoryCardProps = {
  name: string;
  description?: string;
  onEdit: () => void;
  onDelete: () => void;
  onViewProducts: () => void;
};

export function CategoryCard({
  name,
  description,
  onEdit,
  onDelete,
  onViewProducts,
}: CategoryCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  return (
    <>
        <div className="flex flex-row items-start w-full hover:bg-indigo-100 border-[.5px] border-muted/50 p-4 rounded-md cursor-pointer gap-2 bg-indigo-50">
          {/* Contenu principal */}
          <div className="space-y-1 flex-1">
            <h4 className="text-sm font-semibold text-secondary">{name}</h4>
            { description &&  <p className="text-base break-all whitespace-normal line-clamp-3">{description}</p> }
            <div className="flex items-center pt-2">
              <Hash className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
               12 produits
              </span>
            </div>
          </div>

          {/* Actions */}
          {/* <ActionsMenu
            onEdit={onEdit}
            onDelete={() => setIsDialogOpen(true)}
            onViewProducts={onViewProducts}
          />*/}
        </div>
       

    </>

  );
}
