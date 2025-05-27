import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/contact" className="logo-link">
        <img src={logo} alt="Health Path logo" className="logo-svg" />
      </Link>
    </div>

    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
  </header>
);

export default Header;
