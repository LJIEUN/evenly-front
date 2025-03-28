// ✅ src/app/api/products/route.ts - GET 상품 리스트
import { createErrorResponse, createJsonResponse } from "@/service/response";
import { ProductResponse } from "@/types/product";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const page = searchParams.get("page") || "1";
		const category = searchParams.get("category") || "";

		const query = new URLSearchParams({ page, category });
		const response = await fetch(`${API_BASE_URL}/products?${query}`);

		if (!response.ok) {
			return createErrorResponse("상품 목록 조회 실패", response.status);
		}

		const data: ProductResponse = await response.json();
		return createJsonResponse(data, 200);
	} catch (error) {
		console.error("[GET /products]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
