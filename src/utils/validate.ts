const ID_MIN_LENGTH = 3;
const ID_MAX_LENGTH = 20;
const PASSWORD_MIN_LENGTH = 8;

export const validateId = (id: string): string | undefined => {
	if (!id || id.trim() === "") {
		return "아이디를 입력해주세요.";
	}

	if (id.length < ID_MIN_LENGTH || id.length > ID_MAX_LENGTH) {
		return `아이디는 최소 ${ID_MIN_LENGTH}자 이상 ${ID_MAX_LENGTH}이하여야 합니다.`;
	}

	const idPattern = /^[a-z0-9_]+$/; // 소문자 + 숫자 + 밑줄 검사
	if (!idPattern.test(id)) {
	  return "아이디는 영문 소문자, 숫자, _만 사용할 수 있습니다.";
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

	if (!/[_!@#$%^&*]/.test(password)) {
		return "특수문자(_!@#$%^&*)를 포함해야 합니다.";
	}
};
