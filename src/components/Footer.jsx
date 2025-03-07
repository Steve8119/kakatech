import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { fadeIn } from './animations';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-gray-900 py-12"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Kakatech</h2>
        <p className="text-gray-400 mb-6">Your partner in creativity and technology.</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://facebook.com" className="text-purple-500 hover:text-purple-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-purple-500 hover:text-purple-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-purple-500 hover:text-purple-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" className="text-purple-500 hover:text-purple-400">
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Kakatech. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;