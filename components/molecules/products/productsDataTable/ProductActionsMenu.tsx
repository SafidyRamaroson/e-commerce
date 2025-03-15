"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ellipsis, Edit3, Trash2, View } from "lucide-react";
import { useDialogs } from "@/store/zustand/useDialogs";
import { useRouter } from "next/navigation";

type Props = {
  productId: number
}

export function ProductActionsMenu({ productId }: Props) {

  const { openDialog } = useDialogs();
  const router = useRouter();

  const handleDeleteProduct = () => {
    openDialog("confirmDeleteProduct", { id: productId });
  }

  const handleViewProduct = () => {
    router.push(`/admin/products/${productId}`);
  }
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Ellipsis className="h-5 w-5" />
        </PopoverTrigger>
        <PopoverContent className="w-48 p-0">
          <ul className="py-1">
            <li
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleViewProduct()}
            >
              <View className="mr-2 h-4 w-4" />
              Voir  détails
            </li>
            <li
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => openDialog("confirmEditProduct", { id: productId })}
            >
              <Edit3 className="mr-2 h-4 w-4" />
              Éditer
            </li>
            <li
              className="flex items-center px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => handleDeleteProduct()}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Supprimer
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </>
  );
}
