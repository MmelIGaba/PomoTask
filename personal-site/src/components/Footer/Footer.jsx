import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>&copy; 2025 MSGWebWorks (Mmeli Gabriel Dyantyi). All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
