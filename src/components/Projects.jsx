import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'User Verification Service (Cognizant)',
      desc: 'An enterprise role-based user authentication and access control service. Implements secure RESTful endpoints using Spring Security + JWT, custom user verification schemas, and RBAC controls.',
      tags: ['Java', 'Spring Security', 'JWT', 'RBAC'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'dashboard',
      detailSnippet: 'RBAC: Role Verification Active'
    },
    {
      title: 'Entire - E-commerce Platform',
      desc: 'A robust microservices-based e-commerce application. Integrates Spring Boot REST APIs with a ReactJS storefront. Utilizes MySQL for inventory and order persistence, secured with JWT controls.',
      tags: ['Spring Boot', 'ReactJS', 'Microservices', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'chart',
      detailSnippet: 'Simulating product browsing...'
    },
    {
      title: 'Expencer - Personal Expense Manager',
      desc: 'A daily transaction tracker and budget planning tool. Features a Spring Boot REST API layer supporting custom wallets and transaction ledgers, coupled with a responsive ReactJS dashboard.',
      tags: ['Spring Boot', 'ReactJS', 'HTML/CSS', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      type: 'editor',
      detailSnippet: 'Dashboard active on localhost:3000'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        
        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              {/* Premium Interactive CSS Showcase Canvas instead of static placeholders */}
              <div className="project-canvas-container">
                {project.type === 'dashboard' && (
                  <div className="canvas-demo demo-dashboard">
                    <div className="cluster-nodes">
                      <div className="node active-node pulse"></div>
                      <div className="node-line"></div>
                      <div className="node active-node-alt pulse-alt"></div>
                      <div className="node-line"></div>
                      <div className="node standard-node"></div>
                    </div>
                    <div className="terminal-lines">
                      <span className="term-green">✔ Connected to cluster-us-east-1</span>
                      <span className="term-white">→ Active nodes: 12 | Load: 42%</span>
                    </div>
                  </div>
                )}

                {project.type === 'chart' && (
                  <div className="canvas-demo demo-chart">
                    <div className="chart-line-graphic">
                      <svg viewBox="0 0 200 80" className="svg-chart">
                        <path 
                          d="M0,60 Q30,20 60,50 T120,20 T180,45 L200,10" 
                          fill="none" 
                          stroke="url(#chart-grad)" 
                          strokeWidth="3.5" 
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="chart-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#a855f7" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="chart-pulse-marker"></div>
                    </div>
                    <div className="ticker-bar">
                      <span className="ticker-label">AETHR ETH INDEX</span>
                      <span className="ticker-val positive">+5.8%</span>
                    </div>
                  </div>
                )}

                {project.type === 'editor' && (
                  <div className="canvas-demo demo-editor">
                    <div className="editor-sim">
                      <div className="editor-row"><span className="ed-keyword">import</span> org.springframework.web.bind.*;</div>
                      <div className="editor-row"><span className="ed-keyword">@PostMapping</span>(<span className="ed-str">"/wallets"</span>)</div>
                      <div className="editor-row"><span className="ed-keyword">public</span> <span className="ed-class">ResponseEntity</span> create() &#123;<span className="ed-cursor"></span></div>
                    </div>
                  </div>
                )}
                
                {/* Overlay details on hover */}
                <div className="canvas-overlay">
                  <span className="overlay-badge">{project.detailSnippet}</span>
                </div>
              </div>

              {/* Card Details */}
              <div className="project-info-container">
                <h3 className="project-title-text">{project.title}</h3>
                <p className="project-desc-text">{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="badge project-badge">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-secondary btn-small">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary btn-small">
                    Source
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
