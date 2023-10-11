import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img
        src={`${process.env.PUBLIC_URL}/logo/sellMeDreamsLogo.png`}
        alt="Sell Me Dreams Logo"
        className="logo"
      />
    </header>
  );
};

export default Header;