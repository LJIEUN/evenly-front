import PasswordInput from "@/components/common/Input/PasswordInput";
import TextInput from "@/components/common/Input/TextInput";
import React from "react";

const LoginForm = () => {
	return (
		<form className="flex flex-col gap-4 w-full max-w-[40rem]" noValidate>
			<TextInput placeholder="account ID" required />
			<PasswordInput placeholder="password" required />
			<button type="submit" className="btn-primary">
				로그인
			</button>
		</form>
	);
};

export default LoginForm;
