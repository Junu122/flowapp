import React from 'react';
import './AboutHero.css'; // Import the CSS file


const heroImage = '/images/home3.avif';

const AboutHero = () => {
  return (
    <section className="about-hero-container">
      <div 
        className="about-hero-background" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="about-hero-overlay"></div>
      <div className="about-hero-content">
        <h1 className="about-hero-title">Crafting Spaces, Inspiring Futures.</h1>
        <p className="about-hero-mission">
          We are dedicated to innovative design, sustainable solutions, and client-centric collaboration, shaping environments that stand the test of time.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;