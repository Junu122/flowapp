import React from 'react';
import './WorkCard.css';
import { ArrowRight, MapPin } from 'lucide-react';
import { delay, motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const WorkCard = ({ index,id, title, location, category, imageSrc }) => {
  const detailUrl = `/projects/${id}`; // Example dynamic URL
  const navigate=useNavigate()
  const handleViewProject=(title)=>{
    navigate(`/project/${title}`)

  }

const cardVariants = {
  // Use a custom function to randomly start the card off-screen
  hidden: (i) => ({ 
    opacity: 0, 
    x: i % 2 === 0 ? -200 : 200, // Even index slides from left, odd from right
    y: 0 
  }),
  visible: (i) => ({ 
    opacity: 1, 
    x: 0, 
    transition: {
      type: "tween",
      duration: 0.7,
      ease: "easeOut",
      delay: i * 0.12 // Staggered entry
    }
  }),
  exit: { 
    opacity: 0, 
    x: -200, // Fade out while sliding up slightly
    transition: { 
      duration: 0.3
    } 
  }
};


  return (
    <motion.div
    className="work-card"
      layout
    custom={index} // Assuming you have a CSS class for your card
      variants={cardVariants}
      initial="hidden" // Start in the hidden state
      animate="visible" // Animate to the visible state on mount
      exit="exit"
      
    >
      <div onClick={()=>navigate(`/project/${id}`)} className="work-card-image-container">
        <img
          src={imageSrc || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'}
          alt={title}
          className="work-card-image"
        />
        
        <div className="work-card-badge">
          <span className="work-card-category">{title}</span>
        </div>

        <div className="work-card-overlay">
          
          </div>
         
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