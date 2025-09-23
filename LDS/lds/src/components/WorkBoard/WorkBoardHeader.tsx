import React from 'react';
import './WorkBoardHeader.scss';

interface WorkBoardHeaderProps {
  time: string;
  approvedCount: number;
  totalCount: number;
}

export const WorkBoardHeader: React.FC<WorkBoardHeaderProps> = ({
  time,
  approvedCount,
  totalCount,
}) => {
  return (
    <div className="workboard-header">
      {/* ✅ 타이틀은 고정 */}
      <h2 className="workboard-header__title">작업데이터</h2>
      <div className="workboard-header__status">
        <span className="workboard-header__time">
          <img src="/images/icons/icon-time.svg" alt="" className="workboard-header__icon" />
          작업시간 <span className="workboard-header__value">{time}</span>
        </span>

        <span className="workboard-header__approved">
          <img src="/images/icons/icon-confirm.svg" alt="" className="workboard-header__icon" />
          승인 작업수 <span className="workboard-header__value">{approvedCount}</span>
        </span>

        <span className="workboard-header__total">
          <img src="/images/icons/icon-total.svg" alt="" className="workboard-header__icon" />
          전체 작업수 <span className="workboard-header__value">{totalCount}</span>
        </span>

    </div>
    </div>
  );
};
