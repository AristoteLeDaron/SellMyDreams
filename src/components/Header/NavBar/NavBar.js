import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navBar">
      <ul className="navList">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/about">À propos de moi</Link></li>
        <li>
          <span>Mes rêves</span>
          <ul className="dropdown">
            <li><Link to="/dreams/all">Tous mes rêves</Link></li>
            <li><Link to="/dreams/action">Action</Link></li>
            <li><Link to="/dreams/romance">Romance</Link></li>
            <li><Link to="/dreams/violence">Violence</Link></li>
            <li><Link to="/dreams/erotic">Érotique</Link></li>
            <li><Link to="/dreams/adventure">Aventure</Link></li>
            <li><Link to="/dreams/nightmares">Cauchemars</Link></li>
            <li><Link to="/dreams/others">Autres</Link></li>
          </ul>
        </li>
        <li><Link to="/cart">Panier</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
