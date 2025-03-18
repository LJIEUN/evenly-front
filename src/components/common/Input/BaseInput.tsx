import { BaseInputProps } from "@/types/input";
import React, { forwardRef, memo } from "react";

const BaseInput = memo(
	forwardRef<HTMLInputElement, BaseInputProps>(
		(
			{
				icon,
				error,
				helper,
				label,
				required,
				size = "md",
				styleState = "default",
				fullWidth = true,
				className,
				containerClassName,
				disabled,
				rightElement,
				...props
			},
			ref
		) => {
			const getInputStyles = () => {
				const baseStyles = `w-full
    bg-white
    text-black
    text-body
    rounded-lg
    transition-all
    duration-200
    ${rightElement ? "pr-18" : "pr-10"}
    `;
				const sizeStyles =
					{
						sm: `h-[1.5rem] px-[8px] py-[3px]`,
						md: "h-[2rem] px-[12px] py-[5px]",
						lg: "h-[2.5rem] px-[16px] py-[9px]",
						xl: "h-[3.25rem] px-[24px] py-[14px]",
					}[size] || "h-32 px-[12px] py-[5px]";

				const stateStyles = {
					default: "border border-gray-300 focus:border-gray-500",
					invalid: "border border-red-500 focus:border-red-500",
				}[styleState];

				const disabledStyles = disabled ? `opacity-50 cursor-not-allowed` : ``;

				return `${baseStyles} ${sizeStyles} ${stateStyles} ${disabledStyles} ${
					className || ""
				}`;
			};

			return (
				<div
					className={`relative ${fullWidth ? "w-full" : "w-auto"} ${
						containerClassName || ""
					}`}
				>
					{label && (
						<label className="block mb-2 text-black">
							{label}
							{required && <span className="text-red-500"> *</span>}
						</label>
					)}

					{icon && (
						<div className="absolute left-4 top-1/2 transform -translate-y-1/2">
							{icon}
						</div>
					)}

					<input
						ref={ref}
						disabled={disabled}
						className={getInputStyles()}
						{...props}
					/>

					{rightElement && <div>{rightElement}</div>}

					{(error || helper) && (
						<p
							className={`mt-1 text-sm ${
								error ? "text-red-500" : "text-gray-400"
							}`}
						>
							{error || helper}
						</p>
					)}
				</div>
			);
		}
	)
);

export default BaseInput;
