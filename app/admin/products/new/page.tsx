"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { AddNewProductForm } from "@/components/organisms/admin/forms/AddNewProductForm";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { DraftingCompass, Save } from "lucide-react";


export default function NewProductPage() {
    return (
        <>
            <Breadcrumb className="ml-2 text-base">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/admin/products">Produits</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Ajouter un nouveau produit </BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-row items-end justify-between">
                <LayoutSectionHeader
                    title="Gestion des produits"
                    subtitle="Création de nouvelle produit"
                />
                {/* Create action molecule */}
                <div className="flex flex-row gap-4">
                    <Button
                        label="Enregistrer le brouillon"
                        variant="outline"
                        icon={<DraftingCompass />}
                        iconPosition="left"
                    />
                    <Button
                        label="Ajouter le produit"
                        icon={<Save />}
                        iconPosition="left"
                    />
                </div>
            </div>
            <div className="mx-2 mt-6 rounded-md">
                <AddNewProductForm />
            </div>
        </>
    )
}
