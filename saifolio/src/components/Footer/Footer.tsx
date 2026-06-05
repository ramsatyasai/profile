import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>Saifolio<span>.</span></a>
          <p>Building Software. Automating Workflows.</p>
        </div>
        
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
        </div>
        
        <div className={styles.copyright}>
          &copy; {currentYear} Kapileswarapu Ram Satya Sai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
