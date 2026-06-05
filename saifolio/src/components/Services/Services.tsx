'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, BrainCircuit, Wrench } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    icon: Zap,
    title: 'AI Automation',
    description: 'End-to-end business automation that removes repetitive manual work.',
    examples: ['Workflow automation', 'Lead management pipelines', 'Business process automation', 'AI-powered assistants'],
    accent: 'blue',
  },
  {
    icon: BrainCircuit,
    title: 'AI Integrations',
    description: 'Integrate powerful LLM capabilities directly into your products.',
    examples: ['LLM integration & fine-tuning', 'AI chat systems', 'AI-powered tools & dashboards'],
    accent: 'cyan',
  },
  {
    icon: Code2,
    title: 'Backend Development',
    description: 'Robust, scalable APIs and system architecture built for growth.',
    examples: ['REST APIs with FastAPI/Python', 'Database design & optimization', 'Microservices architecture'],
    accent: 'blue',
  },
  {
    icon: Wrench,
    title: 'Custom Software',
    description: 'Tailored internal tools and dashboards that fit your workflow perfectly.',
    examples: ['Internal productivity tools', 'Analytics dashboards', 'Custom business software'],
    accent: 'cyan',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-eyebrow">Services</span>
          <h2 className={`section-title ${styles.title}`}>
            What I Build<br />
            <span className="text-gradient">For Your Business</span>
          </h2>
          <p className="section-description">
            From intelligent automation to full-stack software — every solution is engineered to deliver measurable results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className={`${styles.card} ${styles[`card_${service.accent}`]}`}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className={`${styles.iconWrap} ${styles[`icon_${service.accent}`]}`}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.description}</p>
                <ul className={styles.list}>
                  {service.examples.map((ex, j) => (
                    <li key={j} className={styles.listItem}>
                      <span className={`${styles.listDot} ${styles[`dot_${service.accent}`]}`} />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
