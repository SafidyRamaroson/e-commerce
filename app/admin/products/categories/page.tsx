'use client';

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { AddNewColectionDialog } from "@/components/organisms/admin/dialogs/AddNewCollection";
import { CollectionsList } from "@/components/organisms/admin/products/collections/CollectionList";
import { Button } from "@/components/ui/button";
import { LoadingAnimation } from "@/components/ui/LoadingAnimation";
import { useGet } from "@/hooks/useGet";
import { useDialogs } from "@/store/zustand/useDialogs";
import { Plus } from "lucide-react";


export default function CategoriesPage() {
    const { openDialog } = useDialogs();

    return (
        <div>
            <div className="flex flex-row items-end w-full justify-between">
                <LayoutSectionHeader
                    title="Gestion des collections"
                    subtitle="Liste des collections de produits"
                />
                <Button label="Ajouter" icon={<Plus />} iconPosition="left" onClick={() => openDialog("addNewCollection", {})} />
            </div>
            <AddNewColectionDialog />
        </div>
    )
}