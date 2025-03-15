import { useEffect, useState } from "react";
import type { ProductOutput } from "@/utils/DTOMapper/product.mapper";

export const useProducts = () => {
    const [allProducts, setAllProducts] = useState<ProductOutput[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchAllProducts() {
            try {
                const response = await fetch("/api/products");

                if (!response.ok) {
                    throw new Error("Echec lors de la récupération des produits");
                }

                const products = await response.json();
                setAllProducts(products.data);
            } catch (error: any) {
                console.error("Error: ", error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchAllProducts();
    }, []);

    return {
        allProducts,
        isLoading,
        error,
    };
};