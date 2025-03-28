import { NextRequest } from "next/server";
import { AuthCredentials, AuthResponse } from "@/types/auth";
import { createErrorResponse, createJsonResponse } from "@/service/response";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(req: NextRequest) {
	try {
		const body: AuthCredentials = await req.json();

		console.log(req);
		const response = await fetch(`${API_BASE_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(errorText || "Auth server error");
		}

		const data: AuthResponse = await response.json();
		return createJsonResponse(data, 200);
	} catch (error) {
		console.error("[POST /auth/login]", error);
		return createErrorResponse("Login failed", 401);
	}
}
