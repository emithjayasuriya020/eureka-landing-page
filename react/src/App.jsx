import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import TrustSafety from './components/TrustSafety';
import Team from './components/Team';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  return null;
};

const Home = () => (
  <main>
    <Hero />
    <HowItWorks />
    <Features />
    <TrustSafety />
    <Team />
  </main>
);

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const toggleContactModal = () => setIsContactModalOpen(!isContactModalOpen);

  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <Navbar onContactClick={toggleContactModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        <Footer onContactClick={toggleContactModal} />
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
