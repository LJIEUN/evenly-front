export interface AuthCredentials {
	id: string;
	password: string;
}

export interface AuthResponse {
	access_token: string;
	refresh_token: string;
}

export interface AuthError extends Error {
	statusCode?: number;
	code?: string;
}
