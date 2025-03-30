import { ErrorResponse } from "@/types/error";
import { OrderItemRequest, OrderResponse } from "@/types/order";

export const createOrder = async (
	items: OrderItemRequest[]
): Promise<OrderResponse> => {
	const res = await fetch("/api/orders/create", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("access_token")}`,
		},
		body: JSON.stringify(items),
	});

	const responseData = (await res.json()) as OrderResponse | ErrorResponse;

	if (!res.ok) {
		const errorMessage =
			(responseData as ErrorResponse)?.message ?? "주문 생성 실패";
		throw new Error(errorMessage);
	}
	return responseData as OrderResponse;
};
