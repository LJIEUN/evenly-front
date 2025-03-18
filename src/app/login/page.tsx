import LoginForm from "@/components/auth/LoginForm/LoginForm";
import React from "react";

const LoginPage = () => {
	return (
		<div className="flex flex-col flex-1 h-full w-full max-w-md">
			<h1 className="text-xl mb-20">Login</h1>
			<div className="flex-1">
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
