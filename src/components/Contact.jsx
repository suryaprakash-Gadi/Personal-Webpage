import React from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  }),
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="contact-title">Get In Touch</SectionTitle>
        <motion.div 
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-10 py-4 font-mono text-lg bg-accent-1 text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:shadow-accent-1/30"
          >
            Say Hello
          </a>

          <div className="mt-12 flex justify-center space-x-6">
            {Object.entries(socialLinks).map(([key, link], index) => (
              <motion.a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-1 transition-colors"
                aria-label={key}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 2} // Start delay after main button
                viewport={{ once: true }}
              >
                {React.cloneElement(link.icon, { size: 32 })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;