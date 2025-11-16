import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, id }) => {
  return (
    <motion.h2
      id={id}
      className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 font-mono text-accent-1 relative py-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-7xl font-bold text-secondary-bg opacity-30 z-0">
        {children}
      </span>
    </motion.h2>
  );
};

export default SectionTitle;