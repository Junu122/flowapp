// src/pages/ProjectDetailPage.js
import React from 'react';
import { PROJECTS } from '../../data/projectdata';
import './ProjectDetail.css';
import { useParams } from 'react-router-dom';
// This component assumes it receives the project ID (e.g., 'p4') as a prop.
const ProjectDetail = () => {
  // --- 1. Fetch Data ---
  const {projectid}=useParams()
  const project = PROJECTS.find(p => p.id === projectid);


  if (!project) {
    return <div className="detail-error">Project not found.</div>;
  }

  // Split description into paragraphs for better rendering
  const paragraphs = project.description

  return (
    <div className="project-detail-page">
      {/* --- Section 1: Hero Image --- */}
      <div className="detail-hero-container">
        <img 
          src={project.imageSrc} 
          alt={project.title} 
          className="detail-hero-image" 
        />
        <div className="detail-hero-overlay">
          <h1 className="detail-title">{project.title}</h1>
        </div>
      </div>

      {/* --- Section 2: Details and Description --- */}
      <div className="detail-content-wrapper">
        <div className="detail-info-box">
          
          <h2 className="info-box-heading">Project Information </h2>

          <div className="info-row">
            <span className="info-label">LOCATION</span>
            <span className="info-value">{project.location}</span>
          </div>

          <div className="info-row">
            <span className="info-label">CLIENT</span>
            <span className="info-value">{project.client}</span>
          </div>
          
          <div className="info-row">
            <span className="info-label">PROJECT TYPE</span>
            <span className="info-value">{project.category}</span>
          </div>
          
          <div className="info-row">
            <span className="info-label">AREA</span>
            <span className="info-value red-text-value">{project.area}</span>
          </div>

        </div>
        
      
      </div>
      
      {/* --- Section 3: Full Project Gallery --- */}
      {project?.images?.length > 0 && (
        <div className="project-gallery-section">
          <h2 className="gallery-heading">PROJECT GALLERY <span className="red-dot">●</span></h2>
          <div className="gallery-grid">
            {project.images.map(image => (
              <div key={image.id} className="gallery-item">
                <img 
                  src={image} 
                  alt={image.alt} 
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {
        paragraphs&& (
          <div className="detail-description">
          <h2 className="description-heading">Concept & Vision <span className="red-line"></span></h2>
          <p className='description-paragraph '>{paragraphs}</p>
          </div>
        )
       
      }
        
      
          
   
        
    </div>
  );
};

// Example usage: <ProjectDetailPage projectId="p4" />
export default ProjectDetail;