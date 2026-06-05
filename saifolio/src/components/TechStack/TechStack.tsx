import React from 'react';
import styles from './TechStack.module.css';

const categories = [
  {
    name: 'Backend & DB',
    skills: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'REST APIs', 'System Architecture']
  },
  {
    name: 'AI & Automation',
    skills: ['n8n', 'OpenAI API', 'LLM Integration', 'Agentic Workflows', 'Business Process Automation']
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'HTML/CSS', 'JavaScript', 'TypeScript']
  },
  {
    name: 'Tools & Deployment',
    skills: ['Git/GitHub', 'Docker', 'Vercel', 'Render', 'Linux']
  }
];

export default function TechStack() {
  return (
    <section className={`section ${styles.techStack}`}>
      <div className="container">
        <h2 className="section-title">Tech Stack</h2>
        <p className="section-subtitle">The Tools I Use to Build</p>
        
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={index} className={styles.category}>
              <h3 className={styles.categoryName}>{category.name}</h3>
              <div className={styles.skills}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.skillItem}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
