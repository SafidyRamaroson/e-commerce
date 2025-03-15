"use client";

import LayoutSectionHeader from "@/components/molecules/shared/LayoutSectionHeader";
import { useParams } from "next/navigation";

export const ReviewsPage = () => {
    const { id: productId } = useParams<{ id: string }>();

    return (
        <div>
            <LayoutSectionHeader
                title="Avis"
                subtitle="Découvrez les avis de nos clients sur ce produit"
            />
            <div>
                {/* Reviews list */}
                
            </div>
        </div>
    )
}