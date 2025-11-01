import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/images/FLOW_LOGO1.png" alt="Flow Architects Logo" className="footer-logo" />
          <h3>Flow Architects</h3>
          <p>Designing spaces that inspire and endure.</p>
        </div>

        <div className="footer-section">
          <h4>Explore</h4>
          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Twitter">🐦</a>
          </div>
        </div>

        <div className="footer-address">
          <h4>Studio Address</h4>
          <p>StudioArc Architects</p>
          <p>Taliparamba, Kerala 670141</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: studio@studioarc.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} StudioArc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
