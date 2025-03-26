export interface AuthCredentials {
	userId: string;
	password: string;
}

export interface AuthResponse {
	accessToken: string;
	refreshToken: string;
}

export interface AuthError extends Error {
	statusCode?: number;
	code?: string;
}

export interface DecodedToken {
	sub: string; // 유저 ID
	role: string;
	iat: number; // 생성 시간
	exp: number; // 만료 시간
}
