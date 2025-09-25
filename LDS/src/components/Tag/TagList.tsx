import React from "react";
import type { TagProps } from "./Tag";
import { Tag } from "./Tag";
import "./Tag.scss";

export interface TagListProps {
	items: TagProps[];
}

export const TagList: React.FC<TagListProps> = ({ items }) => {
	return (
		<div className="tag-list">
			{items.map((item, index) => (
				<Tag key={index} {...item} />
			))}
		</div>
	);
};