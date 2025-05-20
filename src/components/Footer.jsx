import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    &copy; {new Date().getFullYear()} Healing Path. All rights reserved.
  </footer>
);

export default Footer;
