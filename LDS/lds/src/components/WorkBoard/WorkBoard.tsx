// WorkBoard.tsx
import React from 'react';
import { WorkBoardHeader } from './WorkBoardHeader';
import { WorkBoardContent } from './WorkBoardContent';
import './WorkBoard.scss';

interface WorkBoardProps {
  title: string;
  time: string;
  approvedCount: number;
  totalCount: number;
  children: React.ReactNode;
  mode?: 'fields' | 'image';
}

export const WorkBoard: React.FC<WorkBoardProps> = ({
  title,
  time,
  approvedCount,
  totalCount,
  children,
  mode = 'fields',
}) => {
  return (
    <div className="workboard">
      <WorkBoardHeader
        title={title}
        time={time}
        approvedCount={approvedCount}
        totalCount={totalCount}
      />
      <WorkBoardContent mode={mode}>
        {children}
      </WorkBoardContent>
    </div>
  );
};
