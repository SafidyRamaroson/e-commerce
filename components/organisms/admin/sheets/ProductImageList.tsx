"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useUploadImage } from "@/hooks/use-upload-image";
import { Delete, Images, Package, Trash2 } from "lucide-react";
import { CldImage } from "next-cloudinary";

const EmptyState = () => (
  <div className="border flex flex-col justify-center items-center p-4 rounded-md mt-4">
    <Images size="40" className="text-gray-200" />
    <span className="ml-2 text-base text-gray-600">Aucune image importée</span>
  </div>
);

const ImageItem = ({ image, remove }: { image: any; remove: (id: string) => void }) => (
  <div key={image.public_id} className="relative shadow-sm p-1">
    <CldImage
      src={image.public_id}
      alt={image.original_filename}
      width={400}
      height={200}
      className="w-full h-40 object-cover rounded-md"
    />
    <SheetDescription>
      <p className="text-sm font-semibold mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {image.original_filename}
      </p>
    </SheetDescription>
    <SheetFooter>
      <div onClick={() => remove(image.public_id)} className="cursor-pointer">
        <Delete className="text-red-500" />
      </div>
    </SheetFooter>
  </div>
);

export function ProductImageList() {
  const { resources, remove } = useUploadImage();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex flex-row relative cursor-pointer">
          <Package className="text-primary rounded-sm shadow-sm" />
          <p className="absolute -top-2 -right-1 rounded-full font-semibold text-secondary">{resources?.length}</p>
        </div>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <LayoutSectionHeader
          title="Gestion des images"
          subtitle="Liste des images importée pour le produit"
        />
        {resources?.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {resources.map((resource) => (
              <ImageItem key={resource.public_id} image={resource} remove={remove} />
            ))}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
