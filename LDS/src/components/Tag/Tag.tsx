import React from "react";
import "./Tag.scss";

export interface TagProps {
  /** 라벨 텍스트 */
  label: string;
  /** 태그 내용 목록 */
  contents?: string[];
  /** 태그 스타일 */
  variant?: "default" | "semantic";
  /** 다크 모드 여부 */
  darkMode?: boolean;
  /** 아이콘 (라이트/다크 모두 있으면 자동 전환, 없으면 표시 안함) */
  icons?: {
    light: string;
    dark: string;
  };
}

export const Tag: React.FC<TagProps> = ({
  label,
  contents,
  variant = "default",
  darkMode,
  icons = {
    light: "/images/icons/icon-tag__law01.svg", // 기본 라이트 모드 아이콘
    dark: "/images/icons/icon-tag__law02.svg", // 기본 다크 모드 아이콘
  },
}) => {
   const list = contents || [];

  return (
    <div className={`tag tag--${variant}`}>
      <div className="tag__header">
        <img
          src={darkMode ? icons.dark : icons.light}
          alt="tag icon"
          className="tag__icon"
        />
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
