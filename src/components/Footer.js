// src/components/Footer.js
import React from 'react';
import data from './Data/data';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  const { companyName} = data;

  return (
    <footer className="footer-section">
    
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {companyName}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
