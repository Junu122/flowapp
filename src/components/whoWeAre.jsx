import React from 'react';
import './whoweare.css';
import { Parallax } from 'react-scroll-parallax';
import FadeInWhenVisible from './FadeInVisible.jsx';
const WhoWeAre = () => {
  return (
    <div className='who-we-are-main'>
 <Parallax >
        <section className="who-we-are-parallax">
      <div className="who-we-are-overlay">
        <div className="who-we-are-content">
          <FadeInWhenVisible delay={0.3}>
          <h2>Our Design Philosophy</h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.5}>
          <p>
            We believe architecture should inspire, endure, and harmonize with its environment.
        Our designs reflect a commitment to sustainability, elegance, and human-centered spaces.
          </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.7}>
          <p>
           Every project begins with a deep understanding of context—cultural, environmental, and emotional.
        We strive to create spaces that not only serve their purpose but elevate the experience of those who inhabit them.
          </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.9}>
          <a href="/about" className="who-we-are-button">Learn More</a>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
   </Parallax>
       
    </div>
   
  );
};

export default WhoWeAre;
