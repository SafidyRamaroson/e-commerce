import StatCard from "@/components/molecules/shared/StatCard";
import { CheckCircle } from "lucide-react";

type StatsOverviewProductsProps = {
    nbrSufficientStock: number;
    nbrInsufficientStock: number;
}

function StatsOverviewProducts({
    nbrSufficientStock,
    nbrInsufficientStock
}: StatsOverviewProductsProps ) {
    return (
        <div className="flex max-sm:flex-col mb-6 gap-4 mt-6">
            <StatCard
                quantity={nbrSufficientStock}
                title="Stock suffisant"
                icon={<CheckCircle className="size-10" />}
            />
            <StatCard
                quantity={nbrInsufficientStock}
                title=" Réapprovisionnement requis"
                icon={<CheckCircle className="size-10" />}
            />
        </div>
    )
}

export { StatsOverviewProducts }