// src/components/AboutUs.js
import React from 'react';
import data from './Data/data';
import './AboutUs.css';

const AboutUs = () => {
  const { aboutUs } = data;
  const { title, description, history, vision, mission, values } = aboutUs;

  
  return (
    <section className="section about-us" aria-label="about-us">
      <div className="container">
        <div className="about-content">
          <h2 className="about-title">{title}</h2>
          <p className="about-description">{description}</p>
          <p className="about-history">{history}</p>
          <div className="card-container">
            <div className="card">
              <h3>Vision</h3>
              <p>{vision}</p>
            </div>
            <div className="card">
              <h3>Mission</h3>
              <p>{mission}</p>
            </div>
            <div className="card">
              <h3>Values</h3>
              <p>{values}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
