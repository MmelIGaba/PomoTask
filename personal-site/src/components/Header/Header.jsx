import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(true);

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>Mmeli Gabriel Dyantyi</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#home" className={styles.navLink}>Home</a></li>
            <li><a href="#about" className={styles.navLink}>About</a></li>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
          <button
            onClick={toggleLightMode}
            className={styles.themeToggle}
            aria-label="Toggle light mode"
          >
            {isLightMode ? (
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
        </nav>
        <div className={styles.mobileControls}>
          <button
            onClick={toggleLightMode}
            className={styles.themeToggle}
            aria-label="Toggle light mode"
          >
            {isLightMode ? (
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            ) : (
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
              </svg>
            )}
          </button>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
          >
            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNavList}>
            <li><a href="#home" className={styles.mobileNavLink} onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" className={styles.mobileNavLink} onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" className={styles.mobileNavLink} onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" className={styles.mobileNavLink} onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
