import React from 'react';
import './ServiceHero.css'; // Import the CSS file

// Placeholder image (can be a sweeping image of varied projects or the team working)
const heroImage = '/images/123.jpeg';

const ServiceHero = () => {
  return (
    <section className="service-hero-container">
      <div 
        className="service-hero-background" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="service-hero-overlay"></div>
      <div className="service-hero-content">
        {/* <span className="service-hero-tagline">Our Integrated Approach</span> */}
        <h1 className="service-hero-title">Beyond Blueprints: Full-Scope Architectural Excellence</h1>
        {/* <p className="service-hero-subtitle">
          From initial concept and feasibility studies to final construction administration, we provide an integrated suite of services designed for seamless project delivery and uncompromising quality.
        </p> */}
        <a href="#services-list" className="service-hero-cta">
          Explore Our Core Services
        </a>
      </div>
    </section>
  );
};

export default ServiceHero;