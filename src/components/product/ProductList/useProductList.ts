import { getProducts } from "@/service/product";
import { Product } from "@/types/product";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

interface ProductListState {
	products: Product[];
	totalPages: number;
}
interface ProductListProps {
	data: ProductListState;
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

	const [productState, setProductState] = useState<{
		products: Product[];
		totalPages: number;
	}>({ products: [], totalPages: 1 });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchProducts = useCallback(async () => {
		setIsLoading(true);
		try {
			const data = await getProducts({ category, page });
			setProductState({
				products: data.content,
				totalPages: data.totalPages,
			});
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
		data: {
			products: productState.products,
			totalPages: productState.totalPages,
		},
		isLoading,
		error,
		refetch: fetchProducts,
	};
};

export default useProductList;
