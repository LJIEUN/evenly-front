import { AuthCredentials, AuthResponse } from "@/types/auth";
import { client } from "../../client";

export const userLogin = async (
	credentials: AuthCredentials
): Promise<AuthResponse> => {
	const response = await client<AuthResponse>("/auth/login", {
		method: "POST",
		body: JSON.stringify(credentials),
	});
	return response;
};
