import React from 'react';
import './WorkCard.css';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const WorkCard = ({ id, title, location, category, imageSrc }) => {
  const detailUrl = `/projects/${id}`; // Example dynamic URL
  const navigate=useNavigate()
  const handleViewProject=(title)=>{
    navigate(`/project/${title}`)

  }
  return (
    <motion.div className="work-card">
      <div onClick={()=>navigate(`/project/${id}`)} className="work-card-image-container">
        <img
          src={imageSrc || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'}
          alt={title}
          className="work-card-image"
        />
        
        {/* <div className="work-card-badge">
          <span className="work-card-category">{category}</span>
        </div> */}

        <div className="work-card-overlay" />
      </div>

      {/* <div className="work-card-content">
        <h3 className="work-card-title">{title}</h3>
        
        <div className="work-card-location">
          <MapPin className="work-card-icon" />
          <span>{location}</span>
        </div>

        <button onClick={()=>navigate(`/project/${id}`)} className="work-card-button">
          View Project
          <ArrowRight className="work-card-button-icon" />
        </button>
      </div> */}

      {/* <div className="work-card-accent" /> */}
      </motion.div>
  );
};

export default WorkCard;