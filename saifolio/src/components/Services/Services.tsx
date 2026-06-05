import React from 'react';
import styles from './Services.module.css';

const services = [
  {
    title: 'AI Automation',
    icon: '⚡',
    examples: ['Workflow automation', 'Lead management automation', 'Business process automation', 'AI-powered assistants']
  },
  {
    title: 'AI Integrations',
    icon: '🧠',
    examples: ['LLM integration', 'AI chat systems', 'AI-powered tools']
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    examples: ['REST APIs (FastAPI/Python)', 'Database Design', 'System architecture']
  },
  {
    title: 'Custom Software Solutions',
    icon: '💻',
    examples: ['Internal tools', 'Dashboards', 'Business software']
  }
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <p className="section-subtitle">How I Can Help Your Business</p>
        
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <ul className={styles.exampleList}>
                {service.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
