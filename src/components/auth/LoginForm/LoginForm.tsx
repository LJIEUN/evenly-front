"use client";
import BaseButton from "@/components/common/Button/BaseButton";
import PasswordInput from "@/components/common/Input/PasswordInput";
import TextInput from "@/components/common/Input/TextInput";
import React from "react";
import useLoginForm from "./useLoginForm";

export interface LoginFromProps {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

const LoginForm = ({ onSuccess, onError }: LoginFromProps) => {
	const { formState, errors, handleFormChange, handleSubmit } = useLoginForm({
		onSuccess,
		onError,
	});

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col gap-4 w-full max-w-[40rem]"
			noValidate
		>
			<TextInput
				placeholder="account ID"
				value={formState.id}
				required
				size="xl"
				onChange={handleFormChange("id")}
				styleState={errors.id ? "invalid" : "default"}
				error={errors.id}
			/>
			<PasswordInput
				placeholder="password"
				value={formState.password}
				required
				size="xl"
				onChange={handleFormChange("password")}
				styleState={errors.password ? "invalid" : "default"}
				error={errors.password}
			/>
			<BaseButton type="submit" size="xl">
				로그인
			</BaseButton>
		</form>
	);
};

export default LoginForm;
