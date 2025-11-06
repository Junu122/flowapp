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
  hidden: { 
    opacity: 0, 
    y: 500 // Start slightly below for a nice slide-up effect
  },
  visible: (i) => ({ 
    opacity: 1, 
    y: 0, 
    transition: {
      // Use a slightly longer duration for smoothness
      duration: 0.6,
      ease: "easeInOut",
      // Reduced stagger delay for a quicker "wave"
      delay: i * 0.15 
    }
  }),
  exit: { 
    opacity: 0, 
    y: -200, // Slide left off-screen on exit
    transition: { 
      duration: 0.4, // A clear duration for the exit animation
      ease: "easeOut" // Accelerate as it leaves
    } 
  }
};
  return (
    <motion.div
    className="work-card" // Assuming you have a CSS class for your card
      variants={cardVariants}
      initial="hidden" // Start in the hidden state
      animate="visible" // Animate to the visible state on mount
      exit="exit"
      custom={index}
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