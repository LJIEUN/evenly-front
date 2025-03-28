import { createErrorResponse, createJsonResponse } from "@/service/response";
import { OrderProduct } from "@/types/product";

export async function POST(req: Request) {
	try {
		const item: OrderProduct = await req.json();

		const token = req.headers.get("authorization");

		console.log(item);
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/create`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token || "",
				},
				body: JSON.stringify([item]),
			}
		);
		console.log(response);
		if (!response.ok) {
			return createErrorResponse("주문 요청 실패", response.status);
		}

		return createJsonResponse({ message: "주문 완료" }, 200);
	} catch (error) {
		console.error("[POST /orders/create]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
