import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'lost-item',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("dA4ZB3rHdcYYfjbXu");
  }, []);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject.replace('-', ' '),
      message: formData.message
    };

    emailjs.send('service_jmxc6wx', 'template_c6oprte', templateParams)
      .then(() => {
        setStatus('success');
        setTimeout(() => {
          setStatus('idle');
          onClose();
          setFormData({ name: '', email: '', subject: 'lost-item', message: '' });
        }, 3000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="success-state">
            <div className="success-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h2>Message Sent!</h2>
            <p>Our institutional support team will review your report and get back to you within 24 hours.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <h2>Contact Eureka Support</h2>
              <p>Professional assistance for the university's central lost and found ecosystem.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">University Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="yourname@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleChange}>
                  <option value="lost-item">Report a Lost Item</option>
                  <option value="found-item">Report a Found Item</option>
                  <option value="account-issue">Account Verification</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Describe your item or issue with precision..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={status === 'sending'}>
                {status === 'sending' ? 'Transmitting...' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p className="error-message">
                  Oops! Something went wrong. Please try again or email us directly at eurekalostfound@gmail.com.
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
