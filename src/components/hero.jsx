import React from 'react';
import {  useNavigate } from 'react-router-dom';
import './hero.css';
import { ParallaxBanner } from 'react-scroll-parallax';
const Hero = () => {
    const  BannerLayer = {
    image:
      '/images/home5.jpeg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  const navigate=useNavigate()
  return (
   <ParallaxBanner layers={[BannerLayer]} className="aspect-[2/1]">
  <section className="hero">
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>Crafting Spaces That Shape Experiences</h1>
        <p>
          We design with intention—where form meets function, and every detail tells a story.
          Our architecture blends minimalism, sustainability, and timeless elegance to create environments that inspire.
        </p>
        <button onClick={()=>navigate("/project")}>View Projects</button>
      </div>
    </div>
  </section>
</ParallaxBanner>

    
  );
};

export default Hero;
