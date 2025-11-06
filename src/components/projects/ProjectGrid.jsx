// src/components/ProjectGrid.js
import React,{useState,useMemo} from 'react';
import WorkCard from './WorkCard';
import ProjectCard from '../projectCard';
import { PROJECTS } from '../../data/projectdata'; // Import your data
import './ProjectGrid.css';

const ProjectGrid = () => {
  const [selectedCategory,setSelectedCategory]=useState("COMMERCIAL")

  const categories = useMemo(() => {
    const uniqueCategories = new Set();
    PROJECTS.forEach(project => {
      // Assuming 'category' is the property that holds the type
      uniqueCategories.add(project.category);
    });
    return [ ...Array.from(uniqueCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
  
    return PROJECTS.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  return (
    <section className="project-grid-container">
      <div className="category-filter-bar">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            // Apply an active class if the category is currently selected
            className={selectedCategory === category ? 'active-filter' : ''}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid">
        {filteredProjects.map(project => (
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