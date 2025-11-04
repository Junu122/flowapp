import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px 0px 0px' });

  return (
    <motion.div
      className="project-card"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={cardVariants}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
    >
      <img src={project?.image} alt={project?.title} />
      <div className="project-info">
        <h3>{project?.title}</h3>
        <p>{project?.location}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
