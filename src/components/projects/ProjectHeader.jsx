import React from 'react';
import "./ProjectHeader.css"

const ProjectsHeader = () => {
  return (
    <div className="projects-header">
      <div className="header-content">
        {/* The main heading is split to apply different colors */}
        <h1 className="project-header-title">
          <span className="black-text">OUR </span>
          <span className="red-text">PROJECTS</span>
        </h1>
        {/* A subtle subtext for the architectural feel */}
        <p className="header-subtext">DESIGN. VISION. REALITY.</p>
      </div>
    </div>
  );
};

export default ProjectsHeader;