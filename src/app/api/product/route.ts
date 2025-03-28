import { OrderProduct, Product, ProductResponse } from "@/types/product";
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

/**
 * 상품을 장바구니에 추가하는 API
 */
export const addProductToCart = async (item: OrderProduct): Promise<void> => {
	return client<void>(`/cart`, {
		method: "POST",
		body: JSON.stringify(item),
	});
};

/**
 * 상품을 결제로 이동하는 API
 */
export const orderProduct = async (item: OrderProduct): Promise<void> => {
	return client<void>(`/orders/create`, {
		method: "POST",
		body: JSON.stringify(item),
	});
};
