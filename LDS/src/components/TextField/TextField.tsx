import React, { useId, useRef, useEffect } from "react";
import "./TextField.scss";

export interface TextFieldProps
	extends Omit<
		React.TextareaHTMLAttributes<HTMLTextAreaElement>,
		"onChange"
	> {
	label?: string;
	variant?: "default" | "question" | "answer";
	onChange?: (value: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
	label,
	placeholder = "내용을 입력하세요.",
	value,
	variant = "default",
	onChange,
	disabled = false,
	...rest
}) => {
	const id = useId();
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (!disabled) {
			onChange?.(e.target.value);
		}

		if (textareaRef.current) {
			textareaRef.current.style.height = "auto"; // 기존 높이 리셋
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.style.height = "auto";
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	}, [value]);

	return (
		<div className={`textfield ${disabled ? "is-disabled" : ""}`}>
			{label && (
				<label className="textfield__label" htmlFor={id}>
					{label}
				</label>
			)}
			<textarea
				ref={textareaRef}
				id={id}
				rows={1}
				className={`textfield__input textfield__input--${variant}`}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				disabled={disabled}
				{...rest}
			/>
		</div>
	);
};
