import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;