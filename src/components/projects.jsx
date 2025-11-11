import React from 'react';
import ProjectCard from './projectCard.jsx';
import './projects.css';
import { featuredProjects } from '../data/projectdata.js';
import { useNavigate } from 'react-router-dom';
import FadeInWhenVisible from './FadeInVisible.jsx';
const Projects = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/project');
  };

  return (
    <section className="featured-projects">
      <div className="featured-projects-header">
        <FadeInWhenVisible delay={0.2}>
        <h2>Featured Projects</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
            <p className="featured-projects-description">
          Explore a selection of my recent work showcasing innovative solutions 
          and creative problem-solving across various technologies and domains.
        </p>
        </FadeInWhenVisible>
      
      </div>
      
      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <FadeInWhenVisible delay={0.2 + index * 0.1} key={index}>
          <ProjectCard key={index} project={project} index={index} />
          </FadeInWhenVisible>
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