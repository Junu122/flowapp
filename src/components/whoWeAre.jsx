import React from 'react';
import './whoweare.css';
import { Parallax } from 'react-scroll-parallax';

const WhoWeAre = () => {
  return (
    <div className='who-we-are-main'>
 
               <section className="who-we-are-parallax">
      <div className="who-we-are-overlay">
        <div className="who-we-are-content">
          <h2>Who We Are</h2>
          <p>
            We are a multidisciplinary architecture studio crafting spaces that balance form, function, and emotion. Our work is rooted in simplicity, sustainability, and a deep respect for context.
          </p>
          <p>
            From urban sanctuaries to coastal retreats, we design environments that inspire and endure — blending creativity with clarity.
          </p>
          <a href="/about" className="who-we-are-button">Learn More</a>
        </div>
      </div>
    </section>
   
       
    </div>
   
  );
};

export default WhoWeAre;
