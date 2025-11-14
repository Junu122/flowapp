import React from 'react';
import './Whatwedo.css';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';
import FadeInWhenVisible from './FadeInVisible';

const servicesData = [
  {
    icon: '/images/SERVICE-IMAGES/1.jpg', // Replace with an actual icon/image component or URL
    title: 'Architectural Design',
    description: "We transform visions into detailed, buildable blueprints. Our approach blends aesthetic appeal with structural integrity and sustainability.",
  },
  {
    icon: '/images/SERVICE-IMAGES/1.1.png', // Replace with an actual icon/image component or URL
    title: 'Interior Design',
    description: "From groundbreaking to ribbon-cutting, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
  },
  {
    icon: '/images/SERVICE-IMAGES/3.jpg', // Replace with an actual icon/image component or URL
    title: 'Landscape Design',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/SERVICE-IMAGES/2.jpg', // Replace with an actual icon/image component or URL
    title: 'Renovation & Adaptive Reuse',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/SERVICE-IMAGES/10.site1.jpg', // Replace with an actual icon/image component or URL
    title: 'Design Development & Technical Detailing',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/SERVICE-IMAGES/11.jpeg', // Replace with an actual icon/image component or URL
    title: 'Visualization & 3D Modelling',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },

];

const WhatWeDo = () => {
  const navigate = useNavigate()
  return (
    <div className="services-container">
      <div className="service-main-header">
        <FadeInWhenVisible delay={0.2}>
        <h2 className="services-main-title">Service We Provide</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
        <p className="service-main-description">
          Our architectural practice is humble however operates with confidence because we are experienced in a variety of building types and styles with a proven track record.
          </p>
          </FadeInWhenVisible>
      </div>


      <div className="whatwedo-grid">
        {servicesData.map((service, index) => (
         
            <div className="whatwedo-card">
               <FadeInWhenVisible key={index} delay={0.2 + index * 0.2}>
              {/* The icon is rendered large and bold for visual impact */}
              <div className="service-icon"><img src={service.icon} alt="" /></div>
              <h3 className="service-title">{service.title}</h3>
               </FadeInWhenVisible>
              {/* <p className="service-description">{service.description}</p> */}
            </div>
         
         
        ))}
      </div>
      <FadeInWhenVisible delay={0.4}>
      <button onClick={() => navigate("/services")} className='service-button'>View all Services</button>
      </FadeInWhenVisible>
    </div>
  );
};

export default WhatWeDo;
