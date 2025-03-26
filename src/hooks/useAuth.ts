import { AuthContext } from "@/providers/AuthProvider";
import React, { useContext } from "react";

const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth는 AuthProvider의 안에서만 사용해야 합니다.");
	}
	return context;
};

export default useAuth;
