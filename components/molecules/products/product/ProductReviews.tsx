import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/molecules/shared/StarRating";
import { MessageSquare } from "lucide-react";
import Link from "next/link";


interface ProductReviewsProps {
    rating?: number;
    productId: number;
}

export const ProductReviews = ({ rating = 3.5, productId }: ProductReviewsProps) => {
    return (
        <>
            <StarRating rating={rating} />
            <div className="mt-6">
                <Link href={`/products/${productId}/reviews`}>
                    <Button
                        label="Voir les avis"
                        icon={<MessageSquare />}
                        iconPosition="left"
                        size="lg"
                        className="w-full"
                    />
                </Link>
            </div>
        </>
    );
};