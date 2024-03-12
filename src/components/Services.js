// components/Services.js
import React from 'react';
import data from './Data/data';
import './Services.css';

const Services = () => {
  const { services, servicesDescription } = data;

  return (
    <section id="services" className="section services" aria-label="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-description">{servicesDescription}</p>
        <div className="services-container">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
