import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-gray-800 fixed w-full z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side - Navigation Links */}
        <ul className={`nav-links md:flex hidden space-x-6`}>
          <li><a href="#services" className="hover:text-purple-500">Services</a></li>
          <li><a href="#portfolio" className="hover:text-purple-500">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-purple-500">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
        </ul>

        {/* Right Side - Logo */}
        <h1 className="text-2xl font-bold text-purple-500 md:ml-auto">Kakatech</h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} className="text-white" /> : <FaBars size={24} className="text-white" />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-gray-900 text-center md:hidden"
        >
          <ul className="flex flex-col py-4 space-y-4">
            <li><a href="#services" className="hover:text-purple-500">Services</a></li>
            <li><a href="#portfolio" className="hover:text-purple-500">Portfolio</a></li>
            <li><a href="#testimonials" className="hover:text-purple-500">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-purple-500">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
