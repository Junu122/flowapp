import React from 'react';
import './AboutHero.css'; // Import the CSS file


const heroImage = '/images/home3.avif';

const AboutHero = () => {
  return (
<section className="about-hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Designing the Future. <br /> Building Legacies.
        </h1>
        <p className="hero-subtitle">
          For over 10 years, we've blended **innovative design** with **sustainable practices** to create spaces that inspire, endure, and elevate communities.
        </p>
        <p className="hero-intro-text">
          Our philosophy is rooted in understanding the unique stories of our clients and translating them into tangible, functional, and beautiful architectural solutions.
        </p>
      </div>
      {/* Optional: Add a call-to-action button */}
      {/* <button className="cta-button">
        See Our Story
      </button> */}
    </section>
  );
};

export default AboutHero;