import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <p className={styles.description}>
          I am Mmeli Gabriel Dyantyi, a freelance fullstack developer based in Johannesburg, South Africa, specializing in custom web and mobile app development. With expertise in .NET, Java Spring Boot, Flutter, Firebase, and modern web frameworks, I deliver AI-integrated solutions, MS Power Platform automation, software redesign services, and digital marketing strategies. I focus on creating scalable, user-focused digital products that drive business transformation and tech innovation for startups and enterprises across Africa.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Fullstack Engineer</h3>
            <p className={styles.cardText}>Building end-to-end solutions with modern web technologies, APIs, and databases for seamless user experiences.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>AI Integration</h3>
            <p className={styles.cardText}>Incorporating machine learning and AI capabilities to create smarter, more adaptive applications.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Cloud Solutions</h3>
            <p className={styles.cardText}>Deploying scalable applications on cloud platforms with focus on performance, security, and cost-efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
