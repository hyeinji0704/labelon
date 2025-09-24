// Sidebar.tsx
import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { AccordionItem } from "../Accordion/AccordionItem";
import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import { FormSection } from "../FormSection/FormSection";
import { TagList } from "../Tag/TagList";
import { TextField } from "../TextField/TextField";
import "./Sidebar.scss";

export interface SidebarProps {
	/** 사이드바 열림 여부 */
	isOpen?: boolean;
	/** 닫기 버튼 클릭 핸들러 */
	onClose?: () => void;
	/** 열기 버튼 클릭 핸들러 */
	onOpen?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
	isOpen = true,
	onClose,
	onOpen,
}) => {
	if (!isOpen) {
		return (
			<aside className="sidebar is-closed">
				<div className="sidebar__header">
					<h2 className="sidebar__title">작업 현황</h2>
					<button className="sidebar-toggle" onClick={onOpen}>
						<img
							src="/images/icons/icon-sidebar-open.svg"
							alt="사이드바 열기"
						/>
					</button>
				</div>
			</aside>
		);
	}

	return (
		<aside className="sidebar is-open">
			{/* 상단 헤더 */}
			<div className="sidebar__header">
				<div className="sidebar__title-group">
					<h2 className="sidebar__title">작업 현황</h2>
					<Button label="작업가이드" variant="secondary" size="sm" />
				</div>
				<button className="sidebar__close" onClick={onClose}>
					<img src="/images/icons/icon-close.svg" alt="닫기" />
				</button>
			</div>

			{/* 본문 */}
			<div className="sidebar__body">
				<FormSection
					title="데이터 타입"
					className="form-section--with-border"
				>
					<FormField
						label="유형"
						options={[
							{ value: "basic", label: "기본형" },
							{ value: "advanced", label: "고급형" },
						]}
					/>
				</FormSection>

				<FormSection title="질문 세트">
					<Accordion>
						<AccordionItem title="세트 01" defaultOpen>
							<TextField
								label="질문"
								placeholder="내용을 입력하세요."
								rows={2}
							/>
							<TextField
								label="답변"
								placeholder="내용을 입력하세요."
								rows={4}
							/>
							<TagList
								items={[
									{
										label: "법령근거",
										contents: [
											"제58조 2항",
											"시행령 제77조 2항",
											"방송통신기자재 적합성 평가",
										],
										variant: "default",
									},
								]}
							/>
						</AccordionItem>

						<AccordionItem title="세트 02">
							<TextField
								label="질문"
								placeholder="세트 02 질문 입력"
								rows={2}
							/>
							<TextField
								label="답변"
								placeholder="세트 02 답변 입력"
								rows={4}
							/>
						</AccordionItem>
					</Accordion>
				</FormSection>
			</div>

			{/* 푸터 */}
			<div className="sidebar__footer">
				<FormSection title="지문 작업 가능여부">
					<FormField
						label="가능여부"
						options={[
							{ value: "available", label: "가능" },
							{ value: "unavailable", label: "불가능" },
						]}
					/>
				</FormSection>
				<Button label="제출하기" variant="primary" size="lg" />
			</div>
		</aside>
	);
};
