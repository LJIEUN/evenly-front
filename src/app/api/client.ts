const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface ApiError extends Error {
	statusCode: number;
	code?: string;
}

interface RequestConfig extends RequestInit {
	params?: Record<string, string>;
	requireAuth?: boolean; // 인증이 필요한 요청인지 여부
}

/**
 * API 요청을 위한 기본 클라이언트
 *
 * @throws {ApiError} API 요청 실패시 에러
 */
async function client<T>(
	endpoint: string,
	{ params, requireAuth = true, ...customConfig }: RequestConfig = {}
): Promise<T> {
	// TODO: 로컬스토리지 -> 쿠키로 변경하기?
	const accessToken = localStorage.getItem("access_token");

	const headers = {
		"Content-Type": "application/json",
		...(requireAuth && accessToken
			? { Authorization: `Bearer ${accessToken}` }
			: {}),
		...customConfig.headers,
	};

	const config: RequestInit = {
		...customConfig,
		headers,
	};

	// URL 파라미터 추가
	const queryString = params ? `?${new URLSearchParams(params)}` : "";
	const url = `${API_BASE_URL}${endpoint}${queryString}`;

	try {
		const response = await fetch(url, config);
		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.message || "Fail to request") as ApiError;
			error.statusCode = response.status;
			error.code = data.code;
			throw error;
		}

		return data;
	} catch (error) {
		if (error instanceof Error) {
			throw error;
		}
		throw new Error("Unknown Error");
	}
}

export { client };
