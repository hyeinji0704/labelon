import React from 'react';
import { Label } from '../Label/Label';
import { Select, SelectProps } from '../Select/Select';
import './FormField.scss';

export interface FormFieldProps extends SelectProps {
  /** 라벨 텍스트 */
  label: string;
  /** 필수 여부 */
  required?: boolean;
  /** 라벨과 셀렉트 배치 방향 */
  layout?: 'vertical' | 'horizontal';
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required,
  id,
  layout = 'horizontal',
  ...selectProps
}) => {
  return (
    <div className={`form-field form-field--${layout}`}>
      <div className="form-field__control">
        <Label htmlFor={id} text={label} required={required} />
        <Select id={id} {...selectProps} />
      </div>
    </div>
  );
};
