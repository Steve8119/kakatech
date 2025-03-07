import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

// Import images from assets folder
import image1 from '../assets/2 (1).jpg';
import image2 from '../assets/2 (2).jpg';
import image3 from '../assets/2 (3).jpg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO, TechCorp',
      comment: 'Kakatech transformed our brand with their amazing designs and web development skills!',
      image: image1, // Replaced placeholder with actual image
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Marketing Manager, FashionCo',
      comment: 'Their social media management boosted our engagement by 200%. Highly recommended!',
      image: image2,
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Founder, StartupX',
      comment: 'The team at Kakatech is professional, creative, and delivers on time.',
      image: image3,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-800">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-500"
              />
              <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
              <p className="text-gray-400 mb-4">{testimonial.role}</p>
              <p className="text-gray-300 italic">"{testimonial.comment}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
