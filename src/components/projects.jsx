import React from 'react';
import ProjectCard from './projectCard.jsx';
import './projects.css';
import { featuredProjects } from '../data/projectdata.js';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';





const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      
      <div className="projects-grid">
       
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      
      </div>
    </section>
  );
};

export default Projects;