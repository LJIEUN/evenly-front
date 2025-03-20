import BaseButton from "@/components/common/Button/BaseButton";
import PasswordInput from "@/components/common/Input/PasswordInput";
import TextInput from "@/components/common/Input/TextInput";
import React from "react";

const LoginForm = () => {
	return (
		<form className="flex flex-col gap-4 w-full max-w-[40rem]" noValidate>
			<TextInput placeholder="account ID" required size="xl" />
			<PasswordInput placeholder="password" required size="xl" />
			<BaseButton type="submit" size="xl">
				로그인
			</BaseButton>
		</form>
	);
};

export default LoginForm;
