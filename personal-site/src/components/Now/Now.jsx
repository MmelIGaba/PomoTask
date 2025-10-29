import React from 'react';
import { motion } from 'framer-motion';
import styles from './Now.module.css';

const Now = () => {
  return (
    <section id="now" className={styles.now}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What I'm Up To Now
        </motion.h2>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Developing LitLink</h3>
            <p className={styles.cardText}>
              Building a privacy-conscious event networking app that helps professionals connect meaningfully
              at conferences and meetups without compromising personal data.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Deepening AI/ML Fluency</h3>
            <p className={styles.cardText}>
              Completing ranked machine learning and deep learning projects to strengthen my technical foundation
              and explore cutting-edge AI applications.
            </p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Refining Professional Presence</h3>
            <p className={styles.cardText}>
              Focusing on minimalist, performance-driven design principles to create digital experiences
              that are both beautiful and functional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Now;
