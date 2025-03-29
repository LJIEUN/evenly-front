import { createErrorResponse, createJsonResponse } from "@/service/response";
import { CartResponse } from "@/types/cart";

export async function GET(req: Request) {
	try {
		const token = req.headers.get("authorization");

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: token || "",
				},
			}
		);

		if (!response.ok) {
			return createErrorResponse("장바구니 조회 실패", response.status);
		}
		const data: CartResponse = await response.json();
		return createJsonResponse(data, 200);
	} catch (error) {
		console.error("[GET /cart]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
