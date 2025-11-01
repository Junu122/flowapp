import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo"><img src="/images/FLOW_LOGO1.png" alt="Logo" /></div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" exact activeClassName="active" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" activeClassName="active" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" activeClassName="active" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/contact" activeClassName="active" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
      <div
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
