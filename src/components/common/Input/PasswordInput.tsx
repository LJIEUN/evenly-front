"use client";

import { BaseInputProps } from "@/types/input";
import React, { forwardRef, memo, useState } from "react";
import BaseInput from "./BaseInput";

export type PasswordInputProps = Omit<BaseInputProps, "type" | "rightElement">;

const PasswordInput = memo(
	forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {
		const [isVisible, setIsVisible] = useState(false);

		const toggleVisibility = () => {
			setIsVisible(!isVisible);
		};

		const VisibilityToggle = <div onClick={toggleVisibility}></div>;

		return (
			<BaseInput
				type={isVisible ? "text" : "password"}
				ref={ref}
				rightElement={VisibilityToggle}
				{...props}
			/>
		);
	})
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
