import React from 'react';
import './Header.scss';

interface HeaderProps {
  logo: string;
  appName?: string;
  userName: string;
  darkMode: boolean;
  onToggleMode: () => void;
  icons?: {
    moon: string;
    sun: string;
  };
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  appName = 'Label ON',
  userName,
  darkMode,
  onToggleMode,
  icons = {
    moon: '/images/icons/moon.svg',
    sun: '/images/icons/sun.svg',
  },
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-img" />
        <span className="header__appname">{appName}</span>
      </div>

      <div className="header__controls">
        {/* ✅ user-icon은 고정 경로로 표시 */}
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
            src={darkMode ? icons.sun : icons.moon}
            alt="mode toggle"
            className="header__icon"
          />
        </button>
      </div>
    </header>
  );
};
