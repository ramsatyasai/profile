import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <p className={styles.tagline}>Building Software. Automating Workflows. Documenting the Journey.</p>
          <h1 className={styles.headline}>
            Hi, I'm <span className={styles.highlight}>Ram Satya Sai.</span>
          </h1>
          <p className={styles.subheadline}>
            I build scalable software solutions and AI-driven automation systems to solve real business problems.
          </p>
          <div className={styles.ctaGroup}>
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Book a Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
