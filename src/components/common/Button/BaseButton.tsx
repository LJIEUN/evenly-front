import { BaseButtonProps } from "@/types/button";
import React, { forwardRef, memo, useMemo } from "react";
import {
	BASE_BUTTON_STYLES,
	BUTTON_SIZE_STYLES,
	BUTTON_STYLES,
} from "./styles";

const BaseButton = memo(
	forwardRef<HTMLButtonElement, BaseButtonProps>(
		(
			{
				size = "md",
				style = "filled",
				color = "dustyBlue",
				leftIcon,
				rightIcon,
				disabled,
				className,
				children,
				...props
			},
			ref
		) => {
			const buttonStyles = useMemo(() => {
				return `${BASE_BUTTON_STYLES} ${BUTTON_SIZE_STYLES[size]} ${
					BUTTON_STYLES[style]?.[color] || ""
				} ${className || ""}`;
			}, [size, style, color, className]);

			return (
				<button
					ref={ref}
					className={buttonStyles}
					disabled={disabled}
					{...props}
				>
					{leftIcon && <span className="inline-flex">{leftIcon}</span>}
					{children}
					{rightIcon && <span className="inline-flex">{rightIcon}</span>}
				</button>
			);
		}
	)
);

BaseButton.displayName = "BaseButton";

export default BaseButton;
