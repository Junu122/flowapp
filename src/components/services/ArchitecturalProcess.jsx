import React from 'react';
import './ArchitecturalProcess.css';
import { Parallax } from 'react-scroll-parallax';

// Defines the 5 key stages in an architectural project
const architecturalStages = [
  {
    title: 'Conception & Discovery',
    description: 'We begin with an in-depth consultation, site analysis, and feasibility studies to solidify the vision, budget, and scope of your project. This is where ideas take root.',
  },
  {
    title: 'Schematic Design',
    description: 'Our team develops initial sketches, digital models, and floor plans. We focus on spatial relationships, massing, and preliminary design options for client review.',
  },
  {
    title: 'Design Development',
    description: 'The approved schematic design is refined with detailed material specifications, systems coordination (HVAC, structural), and integration of advanced technical requirements.',
  },
  {
    title: 'Construction Documentation',
    description: 'We prepare the final, comprehensive set of blueprints, specifications, and bidding documents required for permits and construction. Precision is paramount at this stage.',
  },
  {
    title: 'Construction & Oversight',
    description: 'We provide continuous on-site presence, managing quality control, resolving construction queries, and ensuring the final build faithfully executes the approved design.',
  },
];

const ArchitecturalProcess = () => {
  return (
    <section className="process-container">
      <div className="process-header">
        <h2 className="process-title">
          Our **Five-Stage** <span className="highlight-red">Architectural Journey</span>
        </h2>
        <p className="process-subtitle">
          A structured, transparent, and collaborative process is key to delivering visionary architecture on time and within budget.
        </p>
      </div>

      <div className="timeline-wrapper">
        {architecturalStages.map((stage, index) => (
          
          <div 
            key={index} 
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="step-number">{`0${index + 1}`}</div>
            <div className="step-content">
              <h3 className="step-title">{stage.title}</h3>
              <p className="step-description">{stage.description}</p>
            </div>
          </div>
       
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalProcess;