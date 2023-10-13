import React from 'react';
import NavBar from '../Header/NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <img
          src={`${process.env.PUBLIC_URL}/logo/sellMeDreamsLogo.jpg`}
          alt="Sell Me Dreams Logo"
          className="logo"
        />
        <h1 className="header-title">Et si nos rêves étaient à vendre...</h1>
        <img
          src={`${process.env.PUBLIC_URL}/logo/sellMeDreamsLogo.jpg`}
          alt="Sell Me Dreams Logo"
          className="logo"
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
