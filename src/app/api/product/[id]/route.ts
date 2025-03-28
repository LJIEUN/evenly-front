import { NextRequest } from "next/server";
import { createErrorResponse, createJsonResponse } from "@/service/response";
import { Product } from "@/types/product";

export async function GET(
	req: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		const { id } = await params;

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
		);

		if (!response.ok) {
			return createErrorResponse("상품 상세 조회 실패", response.status);
		}

		const data: Product = await response.json();
		return createJsonResponse(data, 200);
	} catch (error) {
		console.error("[GET /product/:id]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
