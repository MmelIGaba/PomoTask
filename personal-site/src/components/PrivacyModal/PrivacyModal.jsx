import React from 'react';
import styles from './PrivacyModal.module.css';

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.title}>Privacy Notice</h2>
        <div className={styles.content}>
          <p>
            This website collects minimal personal information through the contact form to respond to inquiries.
            Your data is processed in accordance with GDPR and South African data protection laws.
          </p>
          <h3 className={styles.sectionTitle}>Data Collection</h3>
          <ul className={styles.list}>
            <li>Name and email address from contact form submissions</li>
            <li>IP address and basic analytics for website improvement</li>
            <li>Cookies for theme preference and session management</li>
          </ul>
          <h3 className={styles.sectionTitle}>Data Usage</h3>
          <ul className={styles.list}>
            <li>Responding to your messages and inquiries</li>
            <li>Improving website functionality and user experience</li>
            <li>Basic analytics to understand visitor interests</li>
          </ul>
          <h3 className={styles.sectionTitle}>Your Rights</h3>
          <ul className={styles.list}>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to data portability</li>
          </ul>
          <p className={styles.contact}>
            For privacy-related questions, contact me at{' '}
            <a href="mailto:msgwebworks@gmail.com" className={styles.link}>
              msgwebworks@gmail.com
            </a>
          </p>
        </div>
        <button
          onClick={onClose}
          className={styles.closeButton}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PrivacyModal;
