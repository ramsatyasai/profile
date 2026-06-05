'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/animations';
import styles from './TechStack.module.css';

const categories = [
  {
    name: 'Backend & APIs',
    accent: 'blue',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Node.js', level: 70 },
      { name: 'REST APIs', level: 90 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    name: 'AI & Automation',
    accent: 'cyan',
    skills: [
      { name: 'LLM Integration', level: 85 },
      { name: 'OpenAI API', level: 85 },
      { name: 'n8n Workflows', level: 80 },
      { name: 'AI Agents', level: 75 },
      { name: 'Prompt Engineering', level: 80 },
    ],
  },
  {
    name: 'Frontend',
    accent: 'blue',
    skills: [
      { name: 'React / Next.js', level: 70 },
      { name: 'TypeScript', level: 65 },
      { name: 'HTML & CSS', level: 80 },
    ],
  },
  {
    name: 'Tools & Infra',
    accent: 'cyan',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Docker', level: 65 },
      { name: 'Vercel / Render', level: 75 },
      { name: 'Linux', level: 70 },
    ],
  },
];

export default function TechStack() {
  return (
    <section className={`section ${styles.techStack}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="section-eyebrow">Tech Stack</span>
          <h2 className={`section-title ${styles.title}`}>
            The Tools I Use<br />
            <span className="text-gradient">To Get Things Done</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: catIdx * 0.1, duration: 0.6, ease: EASE_OUT }}
            >
              <div className={`${styles.cardAccent} ${styles[`accent_${cat.accent}`]}`} />
              <h3 className={styles.catName}>{cat.name}</h3>
              <div className={styles.skills}>
                {cat.skills.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={`${styles.skillPct} ${styles[`pct_${cat.accent}`]}`}>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <motion.div
                        className={`${styles.barFill} ${styles[`bar_${cat.accent}`]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 + i * 0.07 + 0.3, duration: 0.8, ease: EASE_OUT }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
