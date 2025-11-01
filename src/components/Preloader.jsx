import React, { useEffect, useState } from 'react';
import './preloader.css';

const Preloader = ({ trigger }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, [trigger]); // re-run on route change

  if (!loading) return null;

  return (
    <div className="preloader">
      <img src="/images/FLOW_LOGO1.png" alt="Flow Architects Logo" className="preloader-img" />
      <div className="preloader-logo">
        <div className="line"></div>
        <div className="square"></div>
        <div className="line"></div>
      </div>
      <p>Flow Architects</p>
    </div>
  );
};

export default Preloader;
