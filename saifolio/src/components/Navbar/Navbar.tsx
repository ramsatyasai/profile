import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <a href="#">Saifolio</a>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#journey">Journey</a></li>
        </ul>
        <div className={styles.navActions}>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
}
