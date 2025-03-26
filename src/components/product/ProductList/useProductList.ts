import { getProducts } from "@/app/api/product/route";
import { Product } from "@/types/product";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface ProductListProps {
	products: Product[];
	isLoading: boolean;
	error: Error | null;
	refetch: () => void;
}

const useProductList = (): ProductListProps => {
	const searchParams = useSearchParams();
	const categoryParam = searchParams.get("category");
	const pageParam = searchParams.get("page");

	const category = categoryParam ? parseInt(categoryParam, 10) : null;
	const page = pageParam ? parseInt(pageParam, 10) : 1;

	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getProducts({ category, page });
			setProducts(data.content);
			setError(null);
		} catch (error) {
			setError(error as Error);
		} finally {
			setIsLoading(false);
		}
	}, [category, page]);

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
