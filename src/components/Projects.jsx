import React from 'react';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData.jsx';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="bg-secondary-bg rounded-lg shadow-xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Optional: Add an image for each project */}
      {/* <img src={project.image || '/src/assets/project-bg-1.jpg'} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/> */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-accent-1 font-mono">{project.title}</h3>
          {project.icon && <div className="text-accent-1">{project.icon}</div>}
        </div>
        <p className="text-xs text-text-secondary font-mono mb-3">{project.date} | {project.category}</p>
        <p className="text-sm text-text-secondary mb-4 flex-grow leading-relaxed">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-1 font-mono">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs bg-primary-bg text-accent-1 px-2 py-1 rounded-full font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-between space-x-4 pt-5 border-t border-primary-bg">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors flex items-center"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <FaGithub size={20} className="mr-1" /> <span className="font-mono text-sm">Code</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors flex items-center"
              aria-label={`Live demo of ${project.title}`}
            >
              <FaExternalLinkAlt size={18} className="mr-1" /> <span className="font-mono text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="projects-title">My Creations</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;