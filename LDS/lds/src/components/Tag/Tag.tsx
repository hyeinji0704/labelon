import React from 'react';
import './Tag.scss';

export interface TagProps {
  icon?: string;
  label: string;
  // 문자열 또는 문자열 배열 둘 다 허용 (하위호환)
  contents?: string[] | string;
  variant?: 'default' | 'semantic';
}

export const Tag: React.FC<TagProps> = ({
  icon = '/images/icons/icon-tag__law.svg',
  label,
  contents,
  variant = 'default',
}) => {
  // 안전 가드: content(단일)로 들어와도 배열로 변환
  const list = Array.isArray(contents)
    ? contents
    : contents
    ? [contents]
    : [];

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
