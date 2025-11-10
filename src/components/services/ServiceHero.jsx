import React from 'react';
import './ServiceHero.css'; // Import the CSS file

// Placeholder image (can be a sweeping image of varied projects or the team working)
const heroImage = '/images/123.jpeg';

const ServiceHero = () => {
  return (
   <section className="service-hero-section">
      <div className="service-hero-content">
        <h1 className="service-hero-title">
          Our Expertise <br /> to Build What's Next.
        </h1>
        <p className="service-hero-subtitle">
        Our services cover every phase of the built environment: residential, commercial, and institutional design.
        </p>
        {/* <p className="hero-intro-text">
          Our philosophy is rooted in understanding the unique stories of our clients and translating them into tangible, functional, and beautiful architectural solutions.
        </p> */}
      </div>
      {/* Optional: Add a call-to-action button */}
      {/* <button className="cta-button">
        See Our Story
      </button> */}
    </section>
  );
};

export default ServiceHero;