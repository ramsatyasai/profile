import React from 'react';
import styles from './Journey.module.css';

const timeline = [
  {
    date: 'Present',
    title: 'Building Saifolio & Freelancing',
    description: 'Actively taking on freelance clients to solve business bottlenecks using AI automation and custom software.'
  },
  {
    date: 'Upcoming',
    title: 'Starting M.Tech',
    description: 'Pursuing higher education to deepen my knowledge in advanced computing, AI, and scalable architectures.'
  },
  {
    date: 'Recent',
    title: 'Built First AI Automation Project',
    description: 'Successfully deployed an AI-powered receptionist that reduced manual clinic call handling by 60%.'
  },
  {
    date: 'Past',
    title: 'Started Software Development',
    description: 'Completed multiple academic and freelance projects, building a strong foundation in Python and backend systems.'
  }
];

export default function Journey() {
  return (
    <section id="journey" className={`section ${styles.journey}`}>
      <div className="container">
        <h2 className="section-title">Building in Public</h2>
        <p className="section-subtitle">My Journey So Far</p>
        
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <span className={styles.date}>{item.date}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
