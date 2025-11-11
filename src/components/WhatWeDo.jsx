import React from 'react';
import './Whatwedo.css';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-scroll-parallax';


const servicesData = [
  {
    icon: '/images/123.jpeg', // Replace with an actual icon/image component or URL
    title: 'Architectural Design',
    description: "We transform visions into detailed, buildable blueprints. Our approach blends aesthetic appeal with structural integrity and sustainability.",
  },
  {
    icon: '/images/interior.avif', // Replace with an actual icon/image component or URL
    title: 'Interior Design',
    description: "From groundbreaking to ribbon-cutting, we ensure projects are delivered on time, within budget, and to the highest standards of quality.",
  },
  {
    icon: '/images/landscape.avif', // Replace with an actual icon/image component or URL
    title: 'Landscape Design',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/renovation.avif', // Replace with an actual icon/image component or URL
    title: 'Renovation & Adaptive Reuse',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/design-development.avif', // Replace with an actual icon/image component or URL
    title: 'Design Development & Technical Detailing',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },
  {
    icon: '/images/visualization.avif', // Replace with an actual icon/image component or URL
    title: 'Visualization & 3D Modelling',
    description: "Designing environments that prioritize energy efficiency, minimize environmental impact, and maximize the long-term value of your investment.",
  },

];

const WhatWeDo = () => {
  const navigate = useNavigate()
  return (
    <div className="services-container">
      <div className="service-main-header">
        <h2 className="services-main-title">Service We Provide</h2>
        <p className="service-main-description">
          Our architectural practice is humble however operates with confidence because we are experienced in a variety of building types and styles with a proven track record.</p>
      </div>


      <div className="whatwedo-grid">
        {servicesData.map((service, index) => (
          <div key={index} className="whatwedo-card">
            {/* The icon is rendered large and bold for visual impact */}
            <div className="service-icon"><img src={service.icon} alt="" /></div>
            <h3 className="service-title">{service.title}</h3>
            {/* <p className="service-description">{service.description}</p> */}
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/services")} className='service-button'>View all Services</button>
    </div>
  );
};

export default WhatWeDo;
