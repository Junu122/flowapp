import React from 'react';
import ProjectCard from './projectCard.jsx';
import './projects.css';

const projects = [
  {
    title: 'Urban Nest',
    location: 'Mumbai, India',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-6.jpg',
  },
  {
    title: 'Glass Pavilion',
    location: 'Berlin, Germany',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-7.jpg',
  },
  {
    title: 'Coastal Retreat',
    location: 'Goa, India',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-4.jpg',
  },
  {
    title: 'Skyline Studio',
    location: 'New York, USA',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-1.jpg',
  },
  {
    title: 'Skyline Studio',
    location: 'New York, USA',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-1.jpg',
  },
  {
    title: 'Urban Nest',
    location: 'Mumbai, India',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-6.jpg',
  },
  {
    title: 'Glass Pavilion',
    location: 'Berlin, Germany',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-7.jpg',
  },
  {
    title: 'Coastal Retreat',
    location: 'Goa, India',
    image: 'https://demo.templatesjungle.com/modern/images/portfolio-thumb-4.jpg',
  }
];





const Projects = () => {
  return (
    <section className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;