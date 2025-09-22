import React from 'react';
import './TextField.scss';

export interface TextFieldProps {
  /** label (라벨 텍스트) */
  label?: string;
  /** placeholder */
  placeholder?: string;
  /** 현재 값 */
  value?: string;
  /** 질문 / 답변 variant */
  variant?: 'question' | 'answer';
  /** 값 변경 핸들러 */
  onChange?: (value: string) => void;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder = '내용을 입력하세요.',
  value,
  variant = 'question',
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="textfield">
      {label && <label className="textfield__label">{label}</label>}
      <textarea
        className={`textfield__input textfield__input--${variant}`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
