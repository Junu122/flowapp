import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './hero.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import FadeInWhenVisible from './FadeInVisible';
const Hero = () => {
    const  BannerLayer = {
    image:
      '/images/HOMEPAGE-COVER.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    style: {
            marginTop: '200px'
        }
    
  };
  const navigate=useNavigate()
  const handleViewProjects = () => {
        // Example navigation logic
        navigate('/project'); 
    };

    const handleContactUs = () => {
        // Example navigation logic
        navigate('/contact');
    };
  const hello=  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  return (
  
<ParallaxBanner layers={[BannerLayer]} className='parallax-layer' >
   <section className="hero-section">
            {/* <img
                src="/images/hero-img.jpeg"
                alt="Modern Architecture"
                className="hero-background"
            /> */}
            
            <div className="hero-overlay"></div>
            
            <div className="hero-content " >
                {/* <FadeInWhenVisible delay={1}>
                <p className="hero-subtitle">Architecture & Design Studio</p>
                </FadeInWhenVisible> */}
                 <FadeInWhenVisible delay={1.4}>
                <h1 className="hero-title"  >
                   
                    Creating <strong>Timeless Spaces</strong> for Modern Living
                </h1>
                </FadeInWhenVisible>
                <FadeInWhenVisible delay={1.6}>
                <p className="hero-description">
                   Blending modern sensibilities with lasting design values to create spaces that feel personal,balanced and enduring
                </p>
                </FadeInWhenVisible>
                <div className="hero-buttons">
                    <button 
                        className="btn btn-project" 
                        onClick={handleViewProjects}
                    >
                        View Projects
                    </button>
                    {/* <button 
                        className="btn btn-secondary" 
                        onClick={handleContactUs}
                    >
                        Contact Us
                    </button> */}
                </div>
            </div>

            {/* If you want to include the stats section, uncomment and use the below code */}
            {/* <div className="hero-stats">
                <div className="stat-item">
                    <div className="stat-number">250+</div>
                    <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">15+</div>
                    <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number">30+</div>
                    <div className="stat-label">Awards Won</div>
                </div>
            </div> */}
        </section>
    </ParallaxBanner>
  );
};

export default Hero;
