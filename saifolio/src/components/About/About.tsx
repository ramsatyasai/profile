'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Lightbulb, Rocket } from 'lucide-react';
import { EASE_OUT } from '@/lib/animations';
import styles from './About.module.css';

const pillars = [
  { icon: User, label: 'AI & Automation', desc: 'Focused' },
  { icon: Lightbulb, label: 'Problem Solving', desc: 'First' },
  { icon: Rocket, label: 'Continuous', desc: 'Learner' },
];

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Text Content */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">
              Building Systems,<br />
              <span className="text-gradient">Not Just Code</span>
            </h2>

            <div className={styles.textBody}>
              <p>
                I'm an aspiring AI Automation Consultant and Software Developer based in India, soon pursuing my M.Tech. My passion lies in turning complex business bottlenecks into streamlined, automated systems that actually work.
              </p>
              <p>
                With a strong foundation in Python, FastAPI, and robust backend architectures, I focus on continuous learning and applying AI to create real, measurable value — not just impressive demos.
              </p>
              <p>
                My end goal is to build a software agency. Right now, I'm delivering exceptional results for freelance clients, one automation at a time, and documenting every step of the journey.
              </p>
            </div>

            {/* Pillars */}
            <div className={styles.pillars}>
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={i}
                    className={`glass ${styles.pillarCard}`}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: EASE_OUT }}
                  >
                    <div className={styles.pillarIcon}>
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className={styles.pillarLabel}>{p.label}</div>
                      <div className={styles.pillarDesc}>{p.desc}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            className={styles.visualCol}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT }}
          >
            <div className={`glass ${styles.profileCard}`}>
              {/* Decorative top glow */}
              <div className={styles.cardGlow} aria-hidden="true" />

              <div className={styles.avatarWrap}>
                <div className={styles.avatar}>RS</div>
                <div className={styles.avatarStatus}>
                  <span className={styles.statusDot} />
                  Open to work
                </div>
              </div>

              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>Ram Satya Sai</h3>
                <p className={styles.profileRole}>AI Automation & Software Dev</p>
              </div>

              <div className={styles.tagCloud}>
                {['Python', 'FastAPI', 'AI Integration', 'n8n', 'LLMs', 'Automation'].map((tag, i) => (
                  <span key={i} className="pill pill-blue">{tag}</span>
                ))}
              </div>

              <div className={styles.profileMeta}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Location</span>
                  <span className={styles.metaValue}>India 🇮🇳</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>Status</span>
                  <span className={styles.metaValue} style={{ color: 'var(--cyan)' }}>Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
