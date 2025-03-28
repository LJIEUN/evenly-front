import { AuthCredentials, AuthResponse } from "@/types/auth";

export const userLogin = async (
	credentials: AuthCredentials
): Promise<AuthResponse> => {
	console.log(credentials);
	const res = await fetch(`/api/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	});

	if (!res.ok) {
		throw new Error("로그인 실패");
	}

	return res.json();
};
