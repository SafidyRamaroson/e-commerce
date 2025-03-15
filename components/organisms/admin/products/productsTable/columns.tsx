"use client";

import { ColumnDef } from "@tanstack/react-table";
import { AlertTriangle } from "lucide-react";
import { ProductActionsMenu } from "@/components/molecules/products/productsDataTable/ProductActionsMenu";
import { ConfirmDeleteProduct } from "../../dialogs/ConfirmDeleteProducts";
import { ProductDTO } from "@/utils/DTOMapper";
import { CldImage } from "next-cloudinary";

export const columns: ColumnDef<ProductDTO>[] = [
  {
    accessorKey: "id",
    header: "#ID",
    cell: ({ row }) => (
      <span className="font-medium text-base">{row.original.id}</span>
    ),
  },
  {
    accessorKey: "name",
    header: "Désignation",
    cell: ({ row }) => {
      const { name, medias, category } = row.original;
      return (
        <div className="flex flex-row gap-2 items-center">
          <CldImage
            src={medias?.[0]?.public_id || ""}
            alt={medias?.[0]?.original_filename || name}
            width={40} 
            height={20}
            className="w-10 h-5 sm:w-12 sm:h-6 object-cover rounded-md" 
          />
          <div className="flex flex-col min-w-0"> 
            <span className="font-medium text-sm sm:text-base truncate">{name}</span>
            <span className="font-medium text-xs sm:text-sm opacity-60 truncate">
              {category?.name || "Sans catégorie"}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <p className="font-normal text-sm sm:text-base max-w-xs line-clamp-2">
        {row.original.description}
      </p>
    ),
  },
  {
    accessorKey: "price",
    header: "Prix",
    cell: ({ row }) => (
      <span className="font-medium text-sm sm:text-base text-nowrap">
        {row.original.price.toString()}
      </span>
    ),
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <span className="font-medium text-sm sm:text-base">{row.original.stock}</span>
    ),
  },
  {
    accessorKey: "minimumThreshold",
    header: "Seuil Minimum",
    cell: ({ row }) => (
      <span className="font-medium text-sm sm:text-base">
        {row.original.minimumThreshold}
      </span>
    ),
  },
  {
    accessorKey: "stockStatus",
    header: "État du Stock",
    cell: ({ row }) => {
      const isInsufficientStock =
        row.original.stock < row.original.minimumThreshold;
      return (
        <div className="flex items-center gap-1">
          {isInsufficientStock ? (
            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs sm:text-sm bg-red-200 text-red-800">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
              Insuffisant
            </span>
          ) : (
            <span className="flex items-center gap-1 px-2 py-1 rounded-full text-xs sm:text-sm bg-green-200 text-green-800">
              Stock OK
            </span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="flex gap-2">
          <ProductActionsMenu key={id} productId={id} />
          <ConfirmDeleteProduct />
        </div>
      );
    },
  },
];