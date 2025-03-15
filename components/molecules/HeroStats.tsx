import { Separator } from "@/components/ui/separator";

type StatItemProps = {
    value: string;
    label: string;
}

function StatItem({ value, label }: StatItemProps) {
    return (
        <p className="text-wrap text-center px-2 py-4  border-slate-400 last:border-b-0">
            <span className="md:text-xl lg:text-3xl font-bold flex items-center justify-center">{value}</span>
            <span className="md:text-base lg:text-lg font-medium mt-1">{label}</span>
        </p>
    )
}

function HeroStats() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4">
                <StatItem value="+ 1K" label="Articles" />
                <StatItem value="+ 500" label="Ventes" />
                <div className="col-span-2">
                    <StatItem value="- 10 %" label="Remise jusqu’au 5 Mars" />
                </div>
            </div>
        </div>
    )
}

export { StatItem, HeroStats }