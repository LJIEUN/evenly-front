import { getProducts } from "@/app/api/product/route";
import { Product } from "@/types/product";
import { useCallback, useEffect, useState } from "react";

interface ProductListProps {
	products: Product[];
	isLoading: boolean;
	error: Error | null;
	refetch: () => void;
}

const useProductList = (): ProductListProps => {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getProducts();
			setProducts(data.content);
			setError(null);
		} catch (error) {
			setError(error as Error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchProducts();
	}, [fetchProducts]);

	return {
		products,
		isLoading,
		error,
		refetch: fetchProducts,
	};
};

export default useProductList;
