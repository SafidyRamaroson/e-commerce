import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

function FilterToggleButton({ showFilters, onToggle }: {
    showFilters: boolean
    onToggle: () => void
}) {
    return (
        <Button
            label={showFilters ? "Masquer les filtres" : "Afficher les filtres"}
            icon={<Filter />}
            iconPosition="right"
            onClick={onToggle}
            variant="ghost"
            className="text-lg"
        />
    )
}


export { FilterToggleButton }

