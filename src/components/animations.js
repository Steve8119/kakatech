import { motion } from 'framer-motion';

// Fade-in animation
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

// Slide-in from left animation
export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Slide-in from right animation
export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Slide-in from bottom animation
export const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Scale-up animation
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

// Staggered animation for children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child animation
    },
  },
};

// Bounce animation
export const bounce = {
  hidden: { y: 0 },
  visible: {
    y: [0, -20, 0],
    transition: {
      duration: 1,
      repeat: Infinity, // Loop the animation
      repeatType: 'mirror',
    },
  },
};

