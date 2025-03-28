// ✅ src/app/api/product/cart/route.ts

import { NextRequest } from "next/server";
import { createErrorResponse, createJsonResponse } from "@/service/response";
import { OrderProduct } from "@/types/product";

export async function POST(req: NextRequest) {
	try {
		const item: OrderProduct = await req.json();

		const token = req.headers.get("authorization");

		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_BASE_URL}/cart`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: token || "",
				},
				body: JSON.stringify(item),
			}
		);

		if (!response.ok) {
			return createErrorResponse("장바구니 추가 실패", response.status);
		}

		return createJsonResponse({ message: "장바구니 추가 완료" }, 200);
	} catch (error) {
		console.error("[POST /product/cart]", error);
		return createErrorResponse("Internal Server Error", 500);
	}
}
