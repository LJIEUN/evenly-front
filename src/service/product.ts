import { OrderProduct, Product, ProductResponse } from "@/types/product";

export const getProductById = async (id: number): Promise<Product> => {
	const res = await fetch(`/api/product/${id}`, {
		method: "GET",
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("상품 정보를 불러오지 못했습니다.");
	}

	return res.json();
};

export const getProducts = async ({
	category,
	page = 1,
}: {
	category: number | null;
	page: number;
}): Promise<ProductResponse> => {
	const query = new URLSearchParams({
		page: page.toString(),
		category: category ? category.toString() : "",
	});

	const res = await fetch(`/api/product?${query}`, {
		method: "GET",
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("상품 리스트를 불러오지 못했습니다.");
	}

	return res.json();
};

export const addProductToCart = async (item: OrderProduct): Promise<void> => {
	const res = await fetch(`/api/product/cart`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		body: JSON.stringify(item),
	});

	if (!res.ok) {
		throw new Error("장바구니 추가 실패");
	}
};

export const orderProduct = async (item: OrderProduct): Promise<void> => {
	const res = await fetch(`/api/product/order`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		body: JSON.stringify(item),
	});

	if (!res.ok) {
		throw new Error("주문 요청 실패");
	}
};
