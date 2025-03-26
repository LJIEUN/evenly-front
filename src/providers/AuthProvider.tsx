"use client";
import { userLogin } from "@/app/api/auth/login/route";
import { AuthCredentials, AuthResponse, DecodedToken } from "@/types/auth";
import { decodeJwt } from "@/utils/decodeJwt";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
	user: DecodedToken | null;
	isLoggedIn: boolean;
	login: (credentials: AuthCredentials) => Promise<AuthResponse>;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<DecodedToken | null>(null);

	// 초기 로딩 시 토큰이 localStorage에 있으면 복원
	useEffect(() => {
		const token = localStorage.getItem("access_token");
		if (token) {
			const decoded = decodeJwt<DecodedToken>(token);
			if (decoded) {
				setUser(decoded);
			} else {
				localStorage.removeItem("access_token");
			}
		}
	}, []);

	const login = async (credentials: AuthCredentials) => {
		const response = await userLogin(credentials);
		const decoded = decodeJwt<DecodedToken>(response.accessToken);
		if (decoded) setUser(decoded);
		localStorage.setItem("access_token", response.accessToken);
		return response;
	};

	const logout = () => {
		localStorage.removeItem("access_token");
		setUser(null);
	};

	const isLoggedIn = !!user?.sub;

	return (
		<AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
