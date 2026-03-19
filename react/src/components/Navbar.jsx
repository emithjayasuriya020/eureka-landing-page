import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import useScrollSpy from '../hooks/useScrollSpy';

const Navbar = ({ onContactClick }) => {
  const activeId = useScrollSpy(['how-it-works', 'features', 'security', 'about-us'], { threshold: 0.3 });

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <span className="logo-text">Eureka</span>
          <span className="logo-subtext"> SmartFind</span>
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/#how-it-works" className={activeId === 'how-it-works' ? 'active' : ''}>How It Works</Link></li>
          <li><Link to="/#features" className={activeId === 'features' ? 'active' : ''}>Features</Link></li>
          <li><Link to="/#security" className={activeId === 'security' ? 'active' : ''}>Security</Link></li>
          <li><Link to="/#about-us" className={activeId === 'about-us' ? 'active' : ''}>About Us</Link></li>
        </ul>
        
        <button className="cta-button" onClick={onContactClick}>Contact Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
