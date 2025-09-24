import React from "react";
import "./Tag.scss";

export interface TagProps {
	icon?: string;
	label: string;
	/** 태그 내용 목록 */
	contents?: string[];
	variant?: "default" | "semantic";
}

export const Tag: React.FC<TagProps> = ({
	icon = "/images/icons/icon-tag__law.svg",
	label,
	contents,
	variant = "default",
}) => {
	const list = contents || [];

	return (
		<div className={`tag tag--${variant}`}>
			<div className="tag__header">
				{icon && <img src={icon} alt="" className="tag__icon" />}
				<span className="tag__label">{label}</span>
			</div>

			{list.length > 0 && (
				<ul className="tag__list">
					{list.map((content, idx) => (
						<li key={idx} className="tag__content">
							{content}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
