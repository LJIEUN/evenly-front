"use client";
import LoginForm from "@/components/auth/LoginForm/LoginForm";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
	const router = useRouter();

	const handleLoginSuccess = () => {
		router.push("/");
	};

	return (
		<div className="flex flex-col flex-1 h-full w-full max-w-md">
			<h1 className="text-xl mb-20">Login</h1>
			<div className="flex-1">
				<LoginForm onSuccess={handleLoginSuccess} />
			</div>
		</div>
	);
};

export default LoginPage;
