import React from 'react';
import ProjectCard from './projectCard.jsx';
import './projects.css';
import { featuredProjects } from '../data/projectdata.js';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/project');
  };

  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <h2>Featured Projects</h2>
        <p className="featured-projects-description">
          Explore a selection of my recent work showcasing innovative solutions 
          and creative problem-solving across various technologies and domains.
        </p>
      </div>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <div className="projects-footer">
        <button className="view-all-btn" onClick={handleViewAll}>
          View All Projects
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default Projects;