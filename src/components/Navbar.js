import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="home" smooth={true} duration={1000} className="navbar-logo">Kiran Industries</Link>
        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="home-page" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about-us" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="services" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="gallery" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="testimonials" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>Testimonials</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={1000} className="nav-link" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
