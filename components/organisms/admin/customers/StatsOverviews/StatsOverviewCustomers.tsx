import StatCard from "@/components/molecules/shared/StatCard";
import { CheckCircle } from "lucide-react";

type StatsOverviewProductsProps = {
    activeCustomersNumbers: number;
    notConnectedCustomersNumbers: number;
}

function StatsOverviewCustomers({
    activeCustomersNumbers,
    notConnectedCustomersNumbers
}: StatsOverviewProductsProps ) {
    return (
        <div className="flex max-sm:flex-col mb-6 gap-4 mt-6">
            <StatCard
                quantity={activeCustomersNumbers}
                title="En ligne"
                icon={<CheckCircle className="size-10" />}
            />
            <StatCard
                quantity={notConnectedCustomersNumbers}
                title="Non connectées"
                icon={<CheckCircle className="size-10" />}
            />
        </div>
    )
}

export { StatsOverviewCustomers }