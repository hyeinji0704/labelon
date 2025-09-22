import React from 'react';
import './Label.scss';

export interface LabelProps {
  htmlFor?: string;
  text: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, text, required }) => {
  return (
    <label className="label" htmlFor={htmlFor}>
      {text}
      {required && <span className="label__required">*</span>}
    </label>
  );
};
