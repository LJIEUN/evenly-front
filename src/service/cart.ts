import { CartResponse } from "@/types/cart";

export const getCartItems = async (): Promise<CartResponse> => {
	const res = await fetch(`/api/cart`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("상품 정보를 불러오지 못했습니다.");
	}

	return res.json();
};
