import React from 'react';
import './Legal.css';

const TermsOfService = () => {
  return (
    <div className="legal-page section-padding">
      <div className="container">
        <div className="legal-header">
          <h1>Terms of Service</h1>
          <p>Last Updated: March 19, 2026</p>
        </div>
        
        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By using Eureka SmartFind, you agree to comply with these terms and all university policies regarding campus property.</p>
          </section>

          <section>
            <h2>2. User Responsibility</h2>
            <p>Users must provide accurate descriptions of items. Misrepresentation or fraudulent claims may result in loss of access and reporting to university authorities.</p>
          </section>

          <section>
            <h2>3. Protocol for Returns</h2>
            <p>Eureka facilitates matching but is not responsible for the physical exchange of items. We recommend meeting in designated safe zones on campus for returns.</p>
          </section>

          <section>
            <h2>4. Privacy and Security</h2>
            <p>You agree to use our anonymous chat system solely for verifying item ownership. Harassment or inappropriate use of the communication system is strictly prohibited.</p>
          </section>

          <section>
            <h2>5. Institutional Governance</h2>
            <p>This service operates as a supplement to campus security. All high-value items (e.g., wallet, expensive tech) remain subject to standard institutional lost and found protocols.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
