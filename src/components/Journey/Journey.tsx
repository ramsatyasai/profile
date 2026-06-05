'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EASE_OUT } from '@/lib/animations';
import styles from './Journey.module.css';

const timeline = [
  {
    date: 'Present ',
    title: 'Freelancing & Building Saifolio',
    description: 'Actively acquiring freelance clients, delivering AI automation projects, and documenting the journey publicly.',
    accent: 'blue',
    status: 'current',
  },
  {
    date: 'Upcoming',
    title: 'Starting M.Tech',
    description: 'Pursuing higher education to deepen knowledge in advanced computing, AI systems, and scalable software.',
    accent: 'cyan',
    status: 'upcoming',
  },
  {
    date: '2025',
    title: 'First AI Automation Project',
    description: 'Deployed an AI-powered clinic receptionist that reduced manual call handling by 60%.',
    accent: 'blue',
    status: 'done',
  },
  {
    date: '2022 – 2024',
    title: 'Foundation in Software Development',
    description: 'Completed multiple academic and freelance projects, building a strong Python & backend engineering foundation.',
    accent: 'cyan',
    status: 'done',
  },
];

export default function Journey() {
  return (
    <section id="journey" className={`section ${styles.journey}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="section-eyebrow">Building in Public</span>
          <h2 className={`section-title ${styles.title}`}>
            The Journey So Far
          </h2>
          <p className="section-description" style={{ textAlign: 'center' }}>
            Documenting the path from student to AI automation consultant.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className={`${styles.item} ${styles[`item_${item.accent}`]}`}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: EASE_OUT }}
            >
              <div className={`${styles.dot} ${styles[`dot_${item.accent}`]} ${item.status === 'current' ? styles.dotCurrent : ''}`}>
                {item.status === 'upcoming' && <div className={styles.dotRing} />}
              </div>

              <div className={`glass ${styles.card}`}>
                <span className={`${styles.date} ${styles[`date_${item.accent}`]}`}>
                  {item.date}
                </span>
                {item.status === 'current' && (
                  <span className={styles.currentBadge}>Current</span>
                )}
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
