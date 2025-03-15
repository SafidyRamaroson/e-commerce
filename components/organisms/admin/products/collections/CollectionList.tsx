import { CategoryCard, CategoryCardProps } from "@/components/molecules/products/collections/collectionCard"
import type { CollectionOutput } from "@/utils/DTOMapper/collection.mapper"

type CollectionListProps = {
    collections: CollectionOutput[]
}
function CollectionsList({ collections }: CollectionListProps){
    return(
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {collections?.map((collection) => (
          <CategoryCard
            key={collection.id}
            name={collection.name}
            description={collection?.description ?? ""}
            onEdit={() => console.log(`Editing ${collection.id}`)}
            onDelete={() => console.log("Deleting")}
            onViewProducts={() => console.log("Views products")}
          />
        ))}
      </div>
    )
}

export { CollectionsList }