import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from './animations';
import './Hero.css';

import image1 from '../assets/1 (1).jpg';
import image2 from '../assets/1 (2).jpg';
import image3 from '../assets/1 (3).jpg';
import image4 from '../assets/1 (4).jpg';
import image5 from '../assets/1 (5).jpg';

const Hero = () => {
  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imageUrls.length]);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="hero-section"
      style={{ backgroundImage: `url(${imageUrls[currentImageIndex]})` }}
    >
      <div className="hero-content">
        <motion.h1
          variants={slideInLeft}
          className="hero-title"
        >
          Welcome to Kakatech
        </motion.h1>
        <motion.p
          variants={slideInRight}
          className="hero-subtitle"
        >
          Your partner in Graphic Design, Web Development, and Social Media Management
        </motion.p>
        <motion.div className="hero-services">
          <motion.div variants={slideInLeft} className="hero-service">
            <i className="fas fa-palette"></i>
            <h3>Graphic Design</h3>
            <p>Creative and stunning designs tailored to your brand.</p>
          </motion.div>
          <motion.div variants={fadeIn} className="hero-service">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Modern, responsive websites that drive results.</p>
          </motion.div>
          <motion.div variants={slideInRight} className="hero-service">
            <i className="fas fa-share-alt"></i>
            <h3>Social Media Management</h3>
            <p>Engaging content and strategies to grow your online presence.</p>
          </motion.div>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hero-button"
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Hero;