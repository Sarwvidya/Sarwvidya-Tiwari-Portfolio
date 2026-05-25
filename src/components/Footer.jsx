import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <span className="brand-logo" onClick={handleScrollToTop}>
            Sarvy<span className="logo-dot">.</span>
          </span>
          <p className="brand-tagline">Designing & building premium digital solutions.</p>
        </div>

        <div className="footer-nav">
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Sarwvidya Tiwari. All rights reserved. Crafted with passion using React &amp; Vanilla CSS.
          </p>
          
          <button 
            className="scroll-top-btn" 
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
