import React from 'react';
import './WorkBoardContent.scss';

interface WorkBoardContentProps {
  children: React.ReactNode;
  columns?: 1 | 2;
  mode?: 'fields' | 'image';
}

export const WorkBoardContent: React.FC<WorkBoardContentProps> = ({
  children,
  columns = 2,
  mode = 'fields',
}) => {
  return (
    <div
      className={`workboard-content ${
        mode === 'fields'
          ? `workboard-content--${columns}`
          : 'workboard-content--image'
      }`}
    >
      {children}
    </div>
  );
};
