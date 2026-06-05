'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Bell, Bot, UserCheck } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { EASE_OUT } from '@/lib/animations';
import styles from './Projects.module.css';

const projects = [
  {
    icon: Bot,
    title: 'AI Clinic Receptionist',
    problem: 'Clinics were losing 40+ hours per week answering repetitive patient calls.',
    solution: 'An AI voice/chat agent that handles appointment scheduling and patient FAQs 24/7.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Twilio'],
    results: '60% reduction in manual call handling',
    demoLink: '#',
    githubLink: '#',
    accentColor: 'blue',
  },
  {
    icon: Bell,
    title: 'Appointment Reminder Automation',
    problem: 'High no-show rates were causing significant revenue loss for service businesses.',
    solution: 'Automated workflow sending WhatsApp/SMS reminders and handling rescheduling responses.',
    tech: ['n8n', 'Node.js', 'WhatsApp API'],
    results: '40% fewer no-shows in month one',
    demoLink: '#',
    githubLink: '#',
    accentColor: 'cyan',
  },
  {
    icon: UserCheck,
    title: 'Lead Qualification Automation',
    problem: 'Sales teams spent most of their time manually reviewing and filtering unqualified leads.',
    solution: 'AI-powered intake form that scores and routes leads in real-time, saving human review.',
    tech: ['React', 'Python', 'OpenAI API', 'PostgreSQL'],
    results: '15 hours per week saved for sales team',
    demoLink: '#',
    githubLink: '#',
    accentColor: 'blue',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="section-eyebrow">Featured Work</span>
          <h2 className={`section-title ${styles.title}`}>
            Problems Solved,<br />
            <span className="text-gradient">Results Delivered</span>
          </h2>
          <p className="section-description">
            Every project starts with a real business problem. Here's how I've solved them.
          </p>
        </motion.div>

        {/* Cards */}
        <div className={styles.grid}>
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={i}
                className={`${styles.card} ${styles[`card_${project.accentColor}`]}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: EASE_OUT }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE_OUT } }}
              >
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <div className={`${styles.iconWrap} ${styles[`icon_${project.accentColor}`]}`}>
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <div className={styles.cardLinks}>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="GitHub">
                      <GithubIcon size={16} />
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.iconLink} aria-label="Live Demo">
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>

                {/* Details */}
                <div className={styles.detailGroup}>
                  <p className={styles.detailLabel}>Problem</p>
                  <p className={styles.detailText}>{project.problem}</p>
                </div>
                <div className={styles.detailGroup}>
                  <p className={styles.detailLabel}>Solution</p>
                  <p className={styles.detailText}>{project.solution}</p>
                </div>

                {/* Result Pill */}
                <div className={`${styles.resultPill} ${styles[`result_${project.accentColor}`]}`}>
                  <span className={`${styles.resultDot} ${styles[`dot_${project.accentColor}`]}`} />
                  {project.results}
                </div>

                {/* Tech Stack */}
                <div className={styles.techRow}>
                  {project.tech.map((t, j) => (
                    <span key={j} className="pill pill-neutral">{t}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
