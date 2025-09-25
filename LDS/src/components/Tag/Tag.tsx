import React from "react";
import "./Tag.scss";

export interface TagProps {
  label: string;
  /** 태그 내용 목록 */
  contents?: string[];
  variant?: "default" | "semantic";
  /** 아이콘 표시 여부 (스토리에서 끌 수 있음) */
  showIcon?: boolean;
}

export const Tag: React.FC<TagProps> = ({
  label,
  contents,
  variant = "default",
  showIcon = true,
}) => {
  const list = contents || [];

  return (
    <div className={`tag tag--${variant}`}>
      <div className="tag__header">
        {/* ✅ 아이콘은 필요할 때만 렌더 */}
        {showIcon && (
          <>
            <img
              src="/images/icons/icon-tag__law01.svg"
              alt="라이트 모드"
              className="tag__icon tag__icon--light"
            />
            <img
              src="/images/icons/icon-tag__law02.svg"
              alt="다크 모드"
              className="tag__icon tag__icon--dark"
            />
          </>
        )}
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
