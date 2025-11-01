import React from 'react';
import './ServiceList.css';
import archIcon from '../../../public/images/postimg1.jpg';
import interiorIcon from '../../../public/images/postimg1.jpg';
import landscapeIcon from '../../../public/images/postimg1.jpg';

const services = [
    {
        icon: '/images/portfolio-large-2.jpg', // Placeholder for an icon (e.g., design icon)
        title: 'Architectural Design',
        description: 'Comprehensive design solutions for residential and commercial projects — from concept development to execution drawings, balancing aesthetics, function, and context.'
    },
    {
        icon: '/images/portfolio-thumb-4.jpg', // Placeholder for an icon (e.g., development icon)
        title: 'Interior Design',
        description: 'Tailored interiors for homes, offices, and clinics that combine clarity, comfort, and cohesivespatial design.'
    },
    {
        icon: '/images/main-banner1.jpg', // Placeholder for an icon (e.g., marketing icon)
        title: 'Landscape Design',
        description: 'Site-responsive landscape layouts that connect architecture with its surroundings through thoughtful planning.'
    },
    {
        icon: '🎨', // Placeholder for an icon (e.g., UX icon)
        title: 'Renovation & Adaptive Reuse',
        description: 'Reimagining existing structures to improve spatial efficiency and usability while retaining their core character.'
    },
    {
        icon: '📈', // Placeholder for an icon (e.g., analytics icon)
        title: 'Design Development & Technical Detailing',
        description: 'Refining conceptual designs into coordinated technical drawings that define design intent and precision.'
    },
        {
        icon: '📈', // Placeholder for an icon (e.g., analytics icon)
        title: 'Visualization & 3D Modelling',
        description: 'Realistic 3D visuals and walkthroughs that communicate design intent and help clients experience their spaces early.'
    },
    {
        icon: '🤝', // Placeholder for an icon (e.g., consulting icon)
        title: 'Project Coordination & On-Site Support',
        description: 'Design-level coordination and site visits to ensure design clarity, material understanding, and alignment between drawings and on-ground execution. In close coordination with clients and contractors.'
    }
];

const ServiceList = () => {
    return (
        <section className="service-intro-container">
            <div className="service-intro-header">
                <h1 className="service-intro-title">
                    Our <span className="highlight-red">Services</span>
                </h1>
                <p className="service-intro-subtitle">
                    Discover a suite of services designed to elevate your business, enhance your digital presence, and achieve measurable growth. We combine innovation with meticulous execution.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon"><img src={service.icon} alt="" /></div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-description">{service.description}</p>
                        {/* Optional: Add a "Learn More" button */}
                        <button className="service-card-button" onClick={() => console.log(`Learn more about ${service.title}`)}>
                            Learn More <span>&rarr;</span>
                        </button>
                    </div>
                ))}
            </div>

            <div className="service-cta-section">
                <p className="service-cta-text">
                    Ready to transform your vision into reality?
                </p>
                <button className="service-cta-button" onClick={() => console.log('Navigate to Services Page')}>
                    Explore All Services
                </button>
            </div>
        </section>
    );
};

export default ServiceList;
