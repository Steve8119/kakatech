import React from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

// Import images
import image1 from '../assets/1 (3).jpg';
import image2 from '../assets/1 (2).jpg';
import image3 from '../assets/1 (1).jpg';
import image4 from '../assets/1 (4).jpg';
import image5 from '../assets/1 (5).jpg';
import image6 from '../assets/1 (2).jpg'; // New image added

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Branding Design',
      description: 'A modern branding design for a tech startup.',
      image: image1,
    },
    {
      id: 2,
      title: 'E-commerce Website',
      description: 'A fully functional e-commerce website built with React.',
      image: image2,
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description: 'A successful social media campaign for a fashion brand.',
      image: image3,
    },
    {
      id: 4,
      title: 'Mobile App Design',
      description: 'User-friendly mobile app design for a fitness company.',
      image: image4,
    },
    {
      id: 5,
      title: 'UI/UX Redesign',
      description: 'A complete UI/UX redesign for improved user experience.',
      image: image5,
    },
    {
      id: 6,
      title: 'Custom Web App',
      description: 'Developed a custom web application tailored to client needs.',
      image: image6, // Using the new image
    },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__container">
        <motion.h2
          className="portfolio__section-title portfolio__text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Portfolio
        </motion.h2>
        <div className="portfolio__projects">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="portfolio__project-card"
            >
              <img src={project.image} alt={project.title} className="portfolio__project-image" />
              <div className="portfolio__project-content">
                <h3 className="portfolio__project-title">{project.title}</h3>
                <p className="portfolio__project-description">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
