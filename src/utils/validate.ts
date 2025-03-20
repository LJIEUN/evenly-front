const PASSWORD_MIN_LENGTH = 8;

export const validateId = (id: string): string | undefined => {
	if (!id) {
		return "아이디를 입력해주세요.";
	}
};

export const validatePassword = (password: string): string | undefined => {
	if (!password) {
		return "비밀번호를 입력해주세요.";
	}

	if (password.length < PASSWORD_MIN_LENGTH) {
		return `비밀번호는 최소 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`;
	}

	if (!/[A-Z]/.test(password)) {
		return "대문자를 포함해야 합니다.";
	}

	if (!/[a-z]/.test(password)) {
		return "소문자를 포함해야 합니다.";
	}

	if (!/[0-9]/.test(password)) {
		return "숫자를 포함해야 합니다.";
	}
};
