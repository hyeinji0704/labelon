import React from "react";
import { Tag } from "../Tag/Tag";
import type { TagProps } from "../Tag/Tag";
import { TextField } from "../TextField/TextField";
import type { TextFieldProps } from "../TextField/TextField";
import "./TagField.scss";

export interface TagFieldProps {
	showTag?: boolean;
	tag?: Partial<TagProps>;
	showTextField?: boolean;
	textField?: TextFieldProps;
	direction?: "row" | "column";
}

export const TagField: React.FC<TagFieldProps> = ({
	showTag = true,
	tag,
	showTextField = true,
	textField,
	direction = "column",
}) => {
	const defaultTag: TagProps = {
		label: tag?.label || "항목",
		icon: "",
		contents: undefined,
		variant: tag?.variant || "default",
	};

	return (
		<div className={`tag-field tag-field--${direction}`}>
			{showTag && tag && <Tag {...defaultTag} {...tag} />}
			{showTextField && textField && (
				<TextField
					variant={textField.variant || "default"}
					{...textField}
				/>
			)}
		</div>
	);
};
