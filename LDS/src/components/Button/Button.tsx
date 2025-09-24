import React from "react";
import "./Button.scss";

export interface ButtonProps {
	label: string;
	variant?: "primary" | "secondary";
	size?: "sm" | "lg";
	disabled?: boolean;
	onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
	label,
	variant = "primary",
	size = "md",
	disabled = false,
	onClick,
}) => {
	return (
		<button
			className={`btn btn--${variant} btn--${size}`}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</button>
	);
};
