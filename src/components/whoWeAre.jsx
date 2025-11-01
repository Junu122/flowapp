import React from 'react';
import './whoweare.css';
import { Parallax } from 'react-scroll-parallax';

const WhoWeAre = () => {
  return (
    <div className='who-we-are-main'>
 
               <section className="who-we-are-parallax">
      <div className="who-we-are-overlay">
        <div className="who-we-are-content">
          <h2>Our Design Philosophy</h2>
          <p>
            We believe architecture should inspire, endure, and harmonize with its environment.
        Our designs reflect a commitment to sustainability, elegance, and human-centered spaces.
          </p>
          <p>
           Every project begins with a deep understanding of context—cultural, environmental, and emotional.
        We strive to create spaces that not only serve their purpose but elevate the experience of those who inhabit them.
          </p>
          <a href="/about" className="who-we-are-button">Learn More</a>
        </div>
      </div>
    </section>
   
       
    </div>
   
  );
};

export default WhoWeAre;
