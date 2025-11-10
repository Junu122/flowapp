import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './hero.css';
import { ParallaxBanner } from 'react-scroll-parallax';
const Hero = () => {
    const  BannerLayer = {
    image:
      '/images/main-banner1.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  const navigate=useNavigate()
  return (
   
  <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>We Design Spaces That Inspire</h1>
          <p>Architecture | Interior | Planning</p>
          <button>View Our Projects</button>
        </div>
      </div>
    </section>


    
  );
};

export default Hero;
