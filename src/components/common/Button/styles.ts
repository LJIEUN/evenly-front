import { ButtonColor, ButtonSize, ButtonStyle } from "@/types/button";

export const BASE_BUTTON_STYLES = `
inline-flex
items-center
justify-center
rounded-lg
text-base
transition-all
duration-200
gap-w
`;

export const BUTTON_SIZE_STYLES: Record<ButtonSize, string> = {
	sm: "h-[1.5rem] px-[8px] py-[5px]",
	md: "h-[2rem] px-[12px] py-[5px]",
	lg: "h-[2.5rem] px-[16px] py-[9px]",
	xl: "h-[3.25rem] px-[24px] py-[14px]",
};

// TODO: Hover색상 필요
export const BUTTON_STYLES: Record<ButtonStyle, Record<ButtonColor, string>> = {
	filled: {
		dustyBlue:
			"bg-[#AFC8D9] text-white hover:bg-[#AFC8D9]/80 active:bg-[#AFC8D9]/70",
		softKhaki:
			"bg-[#C2B59B] text-white hover:bg-[#C2B59B]/80 active:bg-[#C2B59B]/70",
		icon: "",
		white: "",
	},
	border: {
		dustyBlue:
			"text-[#AFC8D9] border border-[#AFC8D9] hover:text-[#AFC8D9]/40 active:text-[#AFC8D9]/40",
		softKhaki:
			"text-[#C2B59B] border border-#[C2B59B] hover:text-[#C2B59B]/40 active:text-[#C2B59B]/40",
		icon: "",
		white: "",
	},
	icon: {
		dustyBlue: "",
		softKhaki: "",
		icon: "",
		white: "",
	},
	"icon-round": {
		dustyBlue: "",
		softKhaki: "",
		icon: "",
		white: "",
	},
};
