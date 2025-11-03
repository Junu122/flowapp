// ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Get the current location object from React Router
    const location = useLocation();

    useEffect(() => {
        // Scroll to the top of the window
        window.scrollTo(0, 0);
    }, [location.pathname]); // Dependency array: Re-run every time the path changes

    // This component renders nothing; its sole purpose is the side effect (scrolling)
    return null; 
};

export default ScrollToTop;