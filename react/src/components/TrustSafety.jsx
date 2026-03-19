import React from 'react';
import './TrustSafety.css';
import useReveal from '../hooks/useReveal';

const TrustSafety = () => {
  const [ref, isVisible] = useReveal();
  return (
    <section className="trust-safety bg-primary" id="security" ref={ref}>
      <div className={`container reveal ${isVisible ? 'visible' : ''}`}>
        <div className="section-header text-white">
          <h2 className="text-white">Built for trust and safety</h2>
        </div>
        
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-1.17-10.903A15.115 15.115 0 0112 3c1.232 0 2.408.147 3.535.426m2.958 13.13a15.908 15.908 0 01-6.493 2.876m1.17-10.903A15.115 15.115 0 0012 3l-.465.042m0 0A15.115 15.115 0 018.042 3.426m2.958 13.13a15.908 15.908 0 006.493 2.876M12 21V11m0 0l4.5 4.5M12 11l-4.5 4.5"></path>
              </svg>
            </div>
            <h3>Verified Users Only</h3>
            <p>Access restricted to students, faculty, and staff with valid university credentials.</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3>Data Protection</h3>
            <p>Enterprise-grade encryption for all user communications and personal item documentation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;
