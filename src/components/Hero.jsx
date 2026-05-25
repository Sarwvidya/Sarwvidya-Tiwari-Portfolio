import React from 'react';
import './Hero.css';

const Hero = () => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow-1"></div>
      <div className="ambient-glow-2"></div>
      
      {/* Decorative Grid Overlay */}
      <div className="grid-overlay"></div>

      <div className="hero-container container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Software Engineer @ Cognizant
          </div>
          
          <h1 className="hero-title">
            Sarwvidya Tiwari<br />
            <span className="gradient-text">Full Stack Developer</span>
          </h1>
          
          <p className="hero-subtitle">
            I am a results-driven <strong className="hero-highlight">Java Full Stack Developer</strong> with 3 years of experience building scalable, enterprise-grade web applications using <strong>Java, Spring Boot, Microservices, SQL Server, and ReactJS</strong>.
          </p>
          
          <div className="hero-actions">
            <button onClick={() => handleScrollTo('projects')} className="btn btn-primary">
              Explore Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <button onClick={() => handleScrollTo('contact')} className="btn btn-secondary">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Premium CSS-based Geometric Graphic Art */}
        <div className="hero-graphic">
          <div className="graphic-canvas">
            <div className="geometric-orb orb-primary"></div>
            <div className="geometric-orb orb-secondary"></div>
            
            {/* Floating Glassmorphic Card Stack */}
            <div className="glass-card card-back">
              <div className="card-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="card-body">
                <div className="code-line"><span className="code-keyword">@RestController</span></div>
                <div className="code-line"><span className="code-keyword">@RequestMapping</span>(<span className="code-string">"/api"</span>)</div>
                <div className="code-line"><span className="code-keyword">public class</span> <span className="code-class">Controller</span> &#123;</div>
              </div>
            </div>

            <div className="glass-card card-front">
              <div className="card-header">
                <div className="profile-indicator"></div>
                <div className="profile-text">
                  <div className="profile-name">Sarwvidya T.</div>
                  <div className="profile-title">Software Engineer</div>
                </div>
              </div>
              <div className="card-stats">
                <div className="stat-item">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years Exp</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">9.09</div>
                  <div className="stat-label">B.Tech CGPA</div>
                </div>
              </div>
              <div className="card-radar">
                <span className="pulse-ring"></span>
                <span className="radar-core"></span>
              </div>
            </div>
            
            {/* Small Floating Badges */}
            <div className="floating-badge badge-1">
              <span>☕ Spring Boot</span>
            </div>
            <div className="floating-badge badge-2">
              <span>⚛️ React.js</span>
            </div>
            <div className="floating-badge badge-3">
              <span>🐳 Docker</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="scroll-indicator" onClick={() => handleScrollTo('about')}>
        <span className="mouse-wheel"></span>
      </div>
    </section>
  );
};

export default Hero;
