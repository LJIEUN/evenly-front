import { Product, ProductResponse } from "@/types/product";
import { client } from "../client";

/**
 * 상품 리스트를 가져오는 API
 */
export const getProducts = async ({
	category,
	page = 1,
}: {
	category: number | null;
	page: number;
}): Promise<ProductResponse> => {
	return client<ProductResponse>("/products", {
		params: {
			page: page.toString(),
			category: category ? category.toString() : "",
		},
	});
};

/**
 * 상품 상세정보를 가져오는 API
 */
export const getProductById = async (id: number): Promise<Product> => {
	return client<Product>(`/products/${id}`, {
		params: {},
	});
};
