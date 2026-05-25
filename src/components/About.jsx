import React from 'react';
import './About.css';

const About = () => {
  const timelineData = [
    {
      role: 'Software Engineer',
      company: 'Cognizant',
      period: "Sept' 2023 - Present",
      desc: 'Developing scalable full-stack enterprise applications with Java, Spring Boot, ReactJS, and SQL Server. Designing secure RBAC RESTful APIs via Spring Security + JWT, building CI/CD Jenkins pipelines, and orchestrating Docker containers on Kubernetes (K8s).'
    },
    {
      role: 'Web Developer Intern',
      company: 'BOTS Private Ltd.',
      period: 'Jun\' 2022 - Mar\' 2023',
      desc: 'Built and customized modern e-commerce storefronts using Shopify, HTML, CSS, and JavaScript. Actively managed inventory uploads and cataloging for 1,800+ products ensuring accurate availability.'
    },
    {
      role: 'B.Tech in Electronics & Communication',
      company: 'Gyan Ganga Institute of Tech. and Science',
      period: '2019 - 2023',
      desc: 'Graduated with an outstanding cumulative CGPA of 9.09. Engaged in core software coursework, data structures, systems, and communications.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Biography Card */}
          <div className="about-bio glass-panel">
            <div className="bio-visual-avatar">
              <div className="avatar-glow"></div>
              <div className="avatar-symbol">S</div>
            </div>
            
            <h3 className="bio-title">My Philosophy</h3>
            <p className="bio-text">
              I am a dedicated software engineer focused on building clean, modular, and enterprise-ready systems. I specialize in bridging powerful Java-based Spring Boot backend architectures with smooth, fast React frontend components.
            </p>
            <p className="bio-text">
              My engineering approach prioritizes SOLID principles, clean code patterns, extensive performance testing, and scalable microservices containerization to deliver absolute business value.
            </p>
            
            <div className="about-metrics">
              <div className="metric-box">
                <span className="metric-num">3 Yrs</span>
                <span className="metric-lbl">Full-Stack Exp</span>
              </div>
              <div className="metric-box">
                <span className="metric-num">9.09</span>
                <span className="metric-lbl">ECE CGPA</span>
              </div>
            </div>
          </div>

          {/* Timeline Experience */}
          <div className="about-timeline">
            <h3 className="timeline-section-title">Professional Journey</h3>
            
            <div className="timeline-container">
              {timelineData.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="marker-inner"></span>
                  </div>
                  
                  <div className="timeline-content glass-panel">
                    <span className="timeline-date">{item.period}</span>
                    <h4 className="timeline-role">{item.role}</h4>
                    <h5 className="timeline-company">{item.company}</h5>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
