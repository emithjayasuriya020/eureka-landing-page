import React from 'react';
import './HowItWorks.css';
import useReveal from '../hooks/useReveal';

const Step = ({ number, title, description, icon, isVisible }) => (
  <div className={`hiw-step reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: `${(number - 1) * 0.15}s` }}>
    <div className="hiw-icon-wrapper">
      <div className="hiw-icon-container">
        {icon}
      </div>
      <div className="hiw-step-badge">STEP {number}</div>
    </div>
    <div className="hiw-content">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const HowItWorks = () => {
  const [ref, isVisible] = useReveal();
  const steps = [
    {
      number: 1,
      title: "Report or Describe Your Item",
      description: "Users can post a lost item or describe it using the AI chatbot.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      number: 2,
      title: "AI Finds Potential Matches",
      description: "Our AI compares your description with found items to identify the best matches.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM11 18h-2v-3.38L6.4 13.5 7.5 12.4l2.5 1.7V11h2v3.1l2.5-1.7 1.1 1.1L13 14.62V18h-2z"/>
        </svg>
      )
    },
    {
      number: 3,
      title: "Review and Chat Securely",
      description: "See limited match details and chat with the finder to verify ownership.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
        </svg>
      )
    },
    {
      number: 4,
      title: "Get It Back",
      description: "Confirm the match and safely recover your lost item.",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="how-it-works" id="how-it-works" ref={ref}>
      <div className="container">
        <div className={`hiw-header reveal ${isVisible ? 'visible' : ''}`}>
          <h2>Protocol: How Eureka Recover Works</h2>
          <p>A streamlined architectural approach to returning lost property to its rightful owner.</p>
        </div>
        
        <div className="hiw-grid-container">
          <div className={`hiw-line reveal ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}></div>
          <div className="hiw-grid">
            {steps.map((step) => (
              <Step key={step.number} {...step} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
