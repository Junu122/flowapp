import React from 'react';
import './hero.css';
import { ParallaxBanner } from 'react-scroll-parallax';
const Hero = () => {
    const  BannerLayer = {
    image:
      'https://demo.templatesjungle.com/modern/images/singleimage.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };
  return (
    <ParallaxBanner  layers={[BannerLayer]}
    className="aspect-[2/1] ">
        <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Designing Tomorrow’s Landmarks</h1>
          <p>Minimal. Sustainable. Timeless.</p>
          <button>View Projects</button>
        </div>
      </div>
    </section>
    </ParallaxBanner>
    
  );
};

export default Hero;
