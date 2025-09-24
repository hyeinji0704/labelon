import React from 'react';
import './WorkField.scss';

interface WorkFieldProps {
  label: string;
  children: React.ReactNode;
}

export const WorkField: React.FC<WorkFieldProps> = ({ label, children }) => {
  return (
    <div className="workfield">
      <span className="workfield__label">{label}</span>
      <div className="workfield__body">{children}</div>
    </div>
  );
};
