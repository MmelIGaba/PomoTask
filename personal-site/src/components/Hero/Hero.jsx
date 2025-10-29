import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <h2 className={styles.title}>Freelance Fullstack Developer South Africa</h2>
        <p className={styles.subtitle}>Specializing in web & mobile apps, AI integration, MS Power Platform automation, software redesign, and digital marketing for businesses and startups. Let's transform your ideas into digital solutions.</p>
        <a href="#projects" className={styles.ctaButton}>Explore My Work</a>
      </div>
    </section>
  );
};

export default Hero;
