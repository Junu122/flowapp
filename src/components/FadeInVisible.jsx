import React from 'react';
import { useInView } from 'react-intersection-observer';

import './FadeInVisible.css'; // We'll create this CSS file next

const FadeInWhenVisible = ({ children, delay = 0, className = '' }) => {
    // 1. Setup the Intersection Observer
    // We use a low threshold (0.1) so it triggers quickly when entering view
    const { ref, inView } = useInView({
        threshold: 0.3, 
        triggerOnce: false, // Crucial: only runs the animation one time
    });

    // 2. Conditionally apply the animation class
    // We combine the user's custom className with our animation class
    const animationClass = inView ? 'animate-fade-in-up' : 'start-hidden';

    return (
        <div 
            ref={ref} 
            className={`${animationClass} ${className}`}
            style={{ animationDelay: `${delay}s` }} // Apply the delay
        >
            {children}
        </div>
    );
};

export default FadeInWhenVisible;