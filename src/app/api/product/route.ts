import { Product, ProductResponse } from "@/types/product";
import { client } from "../client";

// const ITEM_COUNT = 12;
/**
 * 상품 리스트를 가져오는 API
 */
export const getProducts = async (): // page: number = 1,
// itemCount: number = ITEM_COUNT,
// category: string = "all"
Promise<ProductResponse> => {
	return client<ProductResponse>("products", {
		params: {},
	});
};
