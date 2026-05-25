import React, { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend & APIs' },
    { id: 'tools', name: 'Tools & DevOps' }
  ];

  const skillsData = [
    // Languages & Web
    { name: 'Java Core', level: 95, category: 'frontend', desc: 'Object-Oriented Programming, Multithreading, Streams API, and SOLID patterns.' },
    { name: 'JavaScript & HTML5/CSS3', level: 92, category: 'frontend', desc: 'Asynchronous scripting, custom layout grid, flexbox, and dynamic styles.' },
    { name: 'ReactJS', level: 90, category: 'frontend', desc: 'Hooks, context routing, state binding, and component architecture.' },
    { name: 'SQL (SQL Server/MySQL/Oracle)', level: 90, category: 'frontend', desc: 'Complex query tuning, indices, triggers, and relational schemas.' },
    { name: 'C++', level: 80, category: 'frontend', desc: 'Data structures, algorithm optimization, and procedural concepts.' },
    
    // Frameworks & Core
    { name: 'Spring Boot', level: 92, category: 'backend', desc: 'Robust rest controllers, auto-config, beans, and custom microservices.' },
    { name: 'Spring Security & JWT', level: 90, category: 'backend', desc: 'JSON Web Token authentications, secure auth routes, and Role-Based Access Control.' },
    { name: 'Microservices Architecture', level: 88, category: 'backend', desc: 'Decoupled services coordination, cluster APIs, and global exception hooks.' },
    { name: 'Hibernate & JPA', level: 85, category: 'backend', desc: 'Object-relational mapping tables, entity mapping, and persistence layer setups.' },
    
    // Tools & Cloud
    { name: 'Docker & Containers', level: 85, category: 'tools', desc: 'Creating optimized dockerfiles, multi-stage builds, and image management.' },
    { name: 'Kubernetes (K8s)', level: 80, category: 'tools', desc: 'Orchestrating container nodes, high availability, and YAML setups.' },
    { name: 'Jenkins CI/CD Pipelines', level: 82, category: 'tools', desc: 'Automating build checks, test integration runs, and deploy pipes.' },
    { name: 'Splunk & New Relic', level: 82, category: 'tools', desc: 'Application telemetry monitoring, incident logs analysis, and tracing.' },
    { name: 'Git & Github Workflows', level: 90, category: 'tools', desc: 'Branch structures, version management, and team review processes.' },
    { name: 'Postman & API Testing', level: 88, category: 'tools', desc: 'Endpoint assertions tests, auth header setups, and mock responses.' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        {/* Category Filters */}
        <div className="skills-filters">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="skill-card glass-panel">
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              
              {/* Animated Progress Meter */}
              <div className="skill-meter-container">
                <div 
                  className="skill-meter-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
