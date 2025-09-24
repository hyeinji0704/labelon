import React from "react";
import "./Accordion.scss";

export interface AccordionProps {
	/** 아코디언 아이템들 */
	children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
	return <div className="accordion">{children}</div>;
};
