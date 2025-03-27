import { BaseInputProps } from "@/types/input";
import React, { forwardRef, useState } from "react";
import BaseInput from "./BaseInput";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export type NumberInputProps = Omit<
	BaseInputProps,
	"type" | "rightElement" | "error" | "onChange"
> & {
	min?: number;
	max?: number;
	value: number;
	onValueChange?: (value: number) => void;
};

const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
	({ min = 1, max = 100, value, onValueChange, ...props }, ref) => {
		const [error, setError] = useState<string>("");

		const handleStep = (step: number) => {
			let next = value + step;
			setError("");

			if (next < min) next = min;
			if (next > max) {
				setError(`최대 ${max}까지 입력할 수 있습니다.`);
				next = max;
			}
			onValueChange?.(next);
		};

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const next = Number(e.target.value);
			if (Number.isNaN(next)) return;
			onValueChange?.(next);
		};

		const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
			e.preventDefault();
		};

		return (
			<BaseInput
				type="number"
				ref={ref}
				value={value}
				onChange={(e) => handleChange(e)}
				error={error}
				readOnly
				onKeyDown={handleKeyDown}
				rightElement={
					<div className="flex flex-col items-center gap-0.5">
						<button
							type="button"
							onClick={() => handleStep(1)}
							className="disabled:opacity-50"
						>
							<ChevronUpIcon size={16} />
						</button>
						<button
							type="button"
							onClick={() => handleStep(-1)}
							className="disabled:opacity-50"
						>
							<ChevronDownIcon size={16} />
						</button>
					</div>
				}
				{...props}
			/>
		);
	}
);

NumberInput.displayName = "NumberInput";

export default NumberInput;
