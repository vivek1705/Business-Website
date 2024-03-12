// src/components/HomePage.js
import React from 'react';
import data from './Data/data';
import './HomePage.css';
import SocialMediaIcons from './SocialMediaIcons';


const Homepage = () => {
  const { companyName, homepage } = data;
  const { desc, description, description2 } = homepage;

 
  return (
    <section className="home-page" aria-label="home">
      <div className="container">
        <div className="welcome-content">
          <h1 className="company-name">{companyName}</h1>
          <p className="company-desc">{desc}</p>
          <p className="company-description">{description}</p>
          <p className="company-description">{description2}</p>
          <p className="social">Follow Us</p>
          <div className="social-media-icons">
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
