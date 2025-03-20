import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonSize = "sm" | "md" | "lg" | "xl";
export type ButtonStyle = "filled" | "text" | "icon" | "icon-round";
export type ButtonColor = "dustyBlue" | "softKhaki" | "icon" | "white";

export interface BaseButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "size"> {
	size?: ButtonSize;
	style?: ButtonStyle;
	color?: ButtonColor;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}
