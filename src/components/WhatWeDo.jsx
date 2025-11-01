import React from 'react';
import './whatwedo.css';
import { useNavigate } from 'react-router-dom';

// Replace these with actual image paths or URLs
import archIcon from '../../public/images/staircase.png';
import interiorIcon from '../../public/images/blueprint.png';
import landscapeIcon from '../../public/images/drawing.png';

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <section className="what-we-do">
      <h2>What We Do</h2>
      <div className="services-grid">
        <div className="service-card">
          <img src={archIcon} alt="Architectural Design" className="service-icon" />
          <h3>Architectural Design</h3>
          <p>
            Comprehensive design solutions for residential and commercial projects — from concept
            development to execution drawings, balancing aesthetics, function, and context.
          </p>
        </div>
        <div className="service-card">
          <img src={interiorIcon} alt="Interior Design" className="service-icon" />
          <h3>Interior Design</h3>
          <p>
            Tailored interiors for homes, offices, and clinics that combine clarity, comfort, and cohesive
            spatial design.
          </p>
        </div>
        <div className="service-card">
          <img src={landscapeIcon} alt="Landscape Design" className="service-icon" />
          <h3>Landscape Design</h3>
          <p>
            Site-responsive landscape layouts that connect architecture with its surroundings through
            thoughtful planning.
          </p>
        </div>
      </div>
      <button className="more-button" onClick={() => navigate('/projects')}>
        View All Projects
      </button>
    </section>
  );
};

export default WhatWeDo;
