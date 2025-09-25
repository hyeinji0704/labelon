import React from 'react';
import './Header.scss';

interface HeaderProps {
  logo: string;
  appName?: string;
  userName: string;
  darkMode: boolean; // 유지
  onToggleMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  appName = 'Label ON',
  userName,
  onToggleMode,
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-img" />
        <span className="header__appname">{appName}</span>
      </div>

      <div className="header__controls">
        {/* ✅ 유저 아이콘: 원래 코드 그대로 */}
        <div className="header__user">
          <img
            src="../../images/icons/icon-user.svg"
            alt="user"
            className="header__user-icon"
          />
          <span className="header__username">
            <em>{userName}</em>님
          </span>
        </div>

        <button className="header__mode-btn" onClick={onToggleMode}>
          <img
            src="/images/icons/moon.svg"
            alt="moon icon"
            className="header__icon header__icon--moon"
          />
          <img
            src="/images/icons/sun.svg"
            alt="sun icon"
            className="header__icon header__icon--sun"
          />
        </button>
      </div>
    </header>
  );
};
