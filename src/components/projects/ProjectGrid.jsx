// src/components/ProjectGrid.js
import React from 'react';
import WorkCard from './WorkCard';
import ProjectCard from '../projectCard';
import { PROJECTS } from '../../data/projectdata'; // Import your data
import './ProjectGrid.css';

const ProjectGrid = () => {
  return (
    <section className="project-grid-container">
      <div className="grid">
        {PROJECTS.map(project => (
          <WorkCard 
            key={project.id}
            id={project.id}
            title={project.title}
            location={project.location}
            category={project.category}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;