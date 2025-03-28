import { NextResponse } from "next/server";

export function createJsonResponse(data: unknown, status = 200): NextResponse {
	return new NextResponse(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

export function createErrorResponse(
	message: string,
	status = 500
): NextResponse {
	return createJsonResponse({ message }, status);
}
