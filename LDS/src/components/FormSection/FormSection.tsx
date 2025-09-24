import React from 'react';
import './FormSection.scss';

interface FormSectionProps {
  /** 섹션 타이틀 (예: 데이터 타입, 질문 세트, 지문 작업 가능여부) */
  title: string;
  /** 섹션 내부에 들어갈 컴포넌트들 */
  children: React.ReactNode;
  /** 추가 커스텀 클래스 */
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  children,
  className,
}) => {
  return (
    <section className={`form-section ${className || ''}`}>
      <h3 className="form-section__title">{title}</h3>
      <div className="form-section__content">{children}</div>
    </section>
  );
};
