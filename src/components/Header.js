import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Traductor de Texto</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Inicio</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Idiomas</a>
          </li>
          <li className="header__nav-item">
            <a href="#" className="header__nav-link">Acerca de</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
