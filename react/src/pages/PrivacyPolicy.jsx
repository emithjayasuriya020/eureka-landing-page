import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page section-padding">
      <div className="container">
        <div className="legal-header">
          <h1>Privacy Policy</h1>
          <p>Last Updated: March 19, 2026</p>
        </div>
        
        <div className="legal-content">
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to Eureka SmartFind. We are committed to protecting your privacy and ensuring a secure environment for our university community. This policy explains how we handle your information.</p>
          </section>

          <section>
            <h2>2. Information Collection</h2>
            <p>We collect information necessary to facilitate the lost and found process, including:</p>
            <ul>
              <li><strong>University Identity:</strong> Verification through institutional credentials to ensure only students/staff use the system.</li>
              <li><strong>Item Data:</strong> Descriptions, photos, and location data related to lost or found items.</li>
              <li><strong>Communication:</strong> Anonymous chat logs captured for security and dispute resolution.</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Data</h2>
            <p>Your data is used solely for:</p>
            <ul>
              <li>Matching lost reports with found items using our AI system.</li>
              <li>Verifying ownership claims.</li>
              <li>Notifying you of high-probability matches.</li>
              <li>Maintaining campus safety and preventing fraud.</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Protection</h2>
            <p>We implement enterprise-grade encryption. Item lists are obscured until a match is found, preventing bad actors from claiming items they haven't lost.</p>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>If you have questions about your privacy at Eureka, contact our support team at privacy@eureka-smartfind.edu.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
