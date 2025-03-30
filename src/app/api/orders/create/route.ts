import { createErrorResponse, createJsonResponse } from "@/service/response";
import { OrderItemRequest } from "@/types/order";

export async function POST(req: Request) {
	try {
		console.log("🔥 POST /api/orders/create 도착함!");
		const token = req.headers.get("authorization");
		const items: OrderItemRequest[] = await req.json();

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders/create`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token || "",
				},
				body: JSON.stringify(items),
			}
		);

		if (!response.ok) {
			const contentType = response.headers.get("content-type");
			if (contentType?.includes("application/json")) {
				const errorJson = await response.json();
				return createJsonResponse(errorJson, response.status); // JSON 그대로 전달
			} else {
				const errorText = await response.text();
				return createJsonResponse({ message: errorText }, response.status); // text → JSON 감싸기
			}
		}

		const data = await response.json();
		return createJsonResponse(data, 200);
	} catch (error) {
		console.error("[POST /orders/create]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
