import React from 'react';
import './Services.css';
import serviceImage from '../assets/1 (3).jpg'; // Import your image

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Mobile Development',
      description: 'Sample text. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      id: 2,
      title: 'Mobility Services',
      description: 'Sample text. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat.',
    },
    {
      id: 3,
      title: 'Software Consulting',
      description: 'Sample text. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.',
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-button">MORE</button>
            </div>
          ))}
        </div>
        <div className="service-image-container">
            <img src={serviceImage} alt="Services" className="service-image"/>
        </div>
      </div>
    </section>
  );
};

export default Services;