import React from 'react';
import './Hero.jsx.css';
import heroImg from '../assets/hero_product.png';
import useReveal from '../hooks/useReveal';

const Hero = () => {
  const [ref, isVisible] = useReveal();

  return (
    <section className="hero" id="home" ref={ref}>
      <div className={`container hero-container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <div className="badge">ESTABLISHED PROTOCOL</div>
          <h1>
            Recovery with <br />
            <span className="text-primary">Institutional Precision.</span>
          </h1>
          <p className="hero-description">
            The next generation of campus lost and found. A centralized, secure, and AI-driven ecosystem designed exclusively for University Students.
          </p>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <img src={heroImg} alt="Recovered Item" className="hero-img" />
          
          <div className="live-match-card">
            <div className="match-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#8B1D1D"/>
              </svg>
            </div>
            <div className="match-info">
              <div className="match-label">LIVE MATCH</div>
              <div className="match-title">iPhone 13 Pro Found</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
