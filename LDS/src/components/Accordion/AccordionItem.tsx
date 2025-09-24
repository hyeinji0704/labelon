import React, { useState } from "react";

export interface AccordionItemProps {
	/** 아이템 제목 */
	title: string;
	/** 아이템 내용 */
	children: React.ReactNode;
	/** 기본으로 열려있을지 여부 */
	defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
	title,
	children,
	defaultOpen = false,
}) => {
	const [isOpen, setIsOpen] = useState(defaultOpen);

	return (
		<div className={`accordion-item ${isOpen ? "is-open" : ""}`}>
			<button
				type="button"
				className="accordion-item__header"
				onClick={() => setIsOpen(!isOpen)}
			>
				<span>{title}</span>
				<svg
          className="accordion-item__icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            d="M6 9l6 6 6-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
			</button>

			{isOpen && (
				<div className="accordion-item__content">{children}</div>
			)}
		</div>
	);
};
