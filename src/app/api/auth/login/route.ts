import { AuthCredentials } from "@/types/auth";
import { client } from "../../client";

export const login = async (credentials: AuthCredentials): Promise<string> => {
	const response = await client<string>("auth/login", {
		method: "POST",
		body: JSON.stringify(credentials),
	});
	return response;
};
