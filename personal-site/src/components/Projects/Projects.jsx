import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'MS Power Platform Business Automation',
      description: 'Custom PowerApps and Power Automate solutions for small businesses in Johannesburg, streamlining workflows and improving efficiency.',
      link: '#'
    },
    {
      title: 'AI-Integrated E-commerce Platform',
      description: 'Full-stack online store with React, Node.js, MongoDB, and AI-powered recommendations for personalized shopping experiences.',
      link: '#'
    },
    {
      title: 'Mobile App for Startups',
      description: 'Cross-platform Flutter app with Firebase backend, featuring real-time data sync and AI-driven insights for business growth.',
      link: '#'
    },
    {
      title: 'Software Redesign & Modernization',
      description: 'Legacy system migration to modern web technologies, improving performance and user experience for enterprise clients.',
      link: '#'
    },
    {
      title: 'Digital Marketing Dashboard',
      description: 'Comprehensive analytics platform for tracking campaign performance, built with React and integrated with Google Analytics API.',
      link: '#'
    },
    {
      title: 'Cloud-Native Web Application',
      description: 'Scalable web app deployed on AWS/Azure, featuring microservices architecture and AI-powered features for tech innovation.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <a href={project.link} className={styles.cardLink}>View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
