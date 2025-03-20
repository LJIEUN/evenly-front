import { ChangeEvent, FormEvent, useCallback, useState } from "react";

type LoginFormType = "id" | "password";

interface UseLoginFormProps {
	onSuccess?: () => void;
	onError?: (error: Error) => void;
}

interface LoginFormState {
	id: string;
	password: string;
}

interface FormErrors {
	id?: string;
	password?: string;
}

const useLoginForm = ({ onSuccess, onError }: UseLoginFormProps) => {
	const [formState, setFormState] = useState<LoginFormState>({
		id: "",
		password: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});

	const validateForm = useCallback(() => {
	}, [formState.id, formState.password]);

	const handleFormChange = useCallback(
		(key: LoginFormType) => (e: ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setFormState((prev) => ({ ...prev, [key]: value }));
			setErrors((prev) => ({ ...prev, [key]: "" }));
		},
		[]
	);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
	};

	return {
		formState,
		errors,
		handleFormChange,
		handleSubmit,
	};
};

export default useLoginForm;
