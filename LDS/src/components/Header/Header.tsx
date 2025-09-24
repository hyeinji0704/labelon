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
    user: { light: string; dark: string };
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
    user: {
      light: '/images/icons/icon-user.svg',
      dark: '/images/icons/icon-user-dark.svg',
    },
  },
}) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" className="header__logo-img" />
        <span className="header__appname">{appName}</span>
      </div>

      <div className="header__controls">
        
        <div className="header__user">
          <img
            src={darkMode ? icons.user.dark : icons.user.light}
            alt="user"
            className="header__user-icon"
          />
          <span className="header__username"><em>{userName}</em>님</span>
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
