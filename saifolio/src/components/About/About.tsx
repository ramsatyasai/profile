import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Who I Am & What Drives Me</p>
        
        <div className={styles.aboutContent}>
          <div className={styles.textColumn}>
            <p>
              I am an aspiring AI Automation Consultant and Software Developer based in India, currently preparing to pursue my M.Tech. 
              My passion lies in turning complex business bottlenecks into streamlined, automated solutions.
            </p>
            <p>
              With a strong foundation in Python, FastAPI, and robust backend systems, I focus on continuous learning 
              and leveraging Artificial Intelligence to create tangible value for businesses.
            </p>
            <p>
              I don't just write code; I build scalable systems that solve real problems. My goal is to eventually start my own Software Agency, and right now, I'm focused on delivering exceptional results for my freelance clients while documenting my journey.
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <h3>AI & Automation</h3>
                <p>Focused</p>
              </div>
              <div className={styles.statItem}>
                <h3>Backend</h3>
                <p>Specialist</p>
              </div>
              <div className={styles.statItem}>
                <h3>Continuous</h3>
                <p>Learner</p>
              </div>
            </div>
          </div>
          <div className={styles.imageColumn}>
            <div className={styles.imagePlaceholder}>
              <span>[Your Photo Here]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
