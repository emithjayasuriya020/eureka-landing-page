import React from 'react';
import './Features.css';
import useReveal from '../hooks/useReveal';

const Features = () => {
  const [ref, isVisible] = useReveal();
  const features = [
    {
      title: "AI Smart Matching",
      description: "Sophisticated neural networks compare lost reports with found items in real-time, delivering high-probability matches instantly.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-.912l-.547-.547z"></path>
        </svg>
      )
    },
    {
      title: "Hidden Found Items",
      description: "Public lists are obscured to prevent fraudulent claims. Only potential owners see relevant identifying details after initial verification.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path>
        </svg>
      )
    },
    {
      title: "Secure Chat Verification",
      description: "Communicate through an encrypted, anonymous channel until proof of ownership is confirmed by our internal systems.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="features bg-off-white" id="features" ref={ref}>
      <div className="container">
        <div className={`section-header reveal ${isVisible ? 'visible' : ''}`}>
          <h2>High-Impact Features</h2>
          <p>Advanced technology repurposed for institutional community care.</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className={`feature-card reveal ${isVisible ? 'visible' : ''}`} key={index} style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
