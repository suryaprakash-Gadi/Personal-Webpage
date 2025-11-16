import React from 'react';
import SectionTitle from './SectionTitle';
import { leadershipAndInvolvement } from '../data/portfolioData.jsx';
import { FaAward, FaUsers, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const experienceItemVariants = {
  hidden: { opacity: 0, y: 30 }, // Adjusted y for a slightly different entry
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Slightly faster stagger
      duration: 0.5,
      ease: "easeOut"
    },
  }),
};

const Experience = () => {
  const getIcon = (title) => {
    const lowerTitle = title.toLowerCase();
    const iconSize = "w-4 h-4 sm:w-5 sm:h-5"; // Centralized icon size
    if (lowerTitle.includes("partner") ) return <FaBriefcase className={`text-accent-1 ${iconSize}`} />;
    if (lowerTitle.includes("thon")|| lowerTitle.includes("hack")) return <FaUsers className={`text-accent-1 ${iconSize}`} />;
    if (lowerTitle.includes("certified") || lowerTitle.includes("holder")) return <FaAward className={`text-accent-1 ${iconSize}`} />;
    return <FaBriefcase className={`text-accent-1 ${iconSize}`} />; // Default
  };

  return (
    <section id="experience" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title">Experience & Achievements</SectionTitle>

        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
          {/* Central Timeline Line: Positioned to align with the center of the icon holder */}
          {/* The icon holder is w-8 h-8 (sm:w-10 sm:h-10). Line starts effectively at icon holder's center. */}
          <div className="absolute left-[calc(1rem-0.5px)] sm:left-[calc(1.25rem-0.5px)] top-0 h-full w-0.5 bg-primary-bg rounded-full"></div>
          {/* 1rem = half of w-8 (icon holder), 1.25rem = half of w-10 (icon holder on sm screens) 
              w-0.5 is for the line width (approx 2px)
          */}

          {leadershipAndInvolvement.map((item, index) => (
            <motion.div
              key={index}
              className="mb-10 flex" // Use flex to align icon and content
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }} // amount adjusted
            >
              {/* Icon Column (sits on the timeline line) */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-bg rounded-full border-2 border-accent-1 flex items-center justify-center mr-4 sm:mr-6 relative z-10">
                {/* z-10 to ensure icon is above the line if they overlap slightly */}
                {getIcon(item.role)}
              </div>

              {/* Content Card Column */}
              <div className="flex-grow p-4 sm:p-6 bg-primary-bg rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-accent-1 font-mono">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary/80 font-mono mt-1 sm:mt-0">{item.duration}</p>
                </div>
                <p className="text-sm sm:text-md text-accent-2/90 font-semibold mb-2 sm:mb-3">{item.organization}</p>
                
                {item.points.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1.5 text-text-secondary pl-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm leading-relaxed sm:leading-normal">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary/80 italic text-xs sm:text-sm">Details forthcoming.</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;