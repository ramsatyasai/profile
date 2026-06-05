'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { EASE_OUT } from '@/lib/animations';
import styles from './Hero.module.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Ambient Background */}
      <div className={styles.ambientBg} aria-hidden="true">
        <div className={styles.orbBlue} />
        <div className={styles.orbCyan} />
        <div className={styles.grid} />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.inner}
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow Badge */}
          <motion.div variants={item}>
            <span className={`section-eyebrow ${styles.eyebrow}`}>
              <span className={styles.statusDot} />
              Available for freelance projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className={styles.headline} variants={item}>
            I Build Software That<br />
            <span className="text-gradient">Automates the Work</span>
          </motion.h1>

          {/* Sub */}
          <motion.p className={styles.subheadline} variants={item}>
            Hi, I'm <strong>Ram Satya Sai</strong> — an AI Automation Consultant and Software Developer based in India. I help businesses eliminate bottlenecks by building scalable backend systems and intelligent automation workflows.
          </motion.p>

          {/* CTAs */}
          <motion.div className={styles.ctaRow} variants={item}>
            <a href="#projects" className="btn btn-primary">
              View Projects
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Book a Call
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div className={styles.socialRow} variants={item}>
            <a
              href="https://github.com/ramsatyasai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
              GitHub
            </a>
            <span className={styles.socialDivider} />
            <a
              href="https://www.linkedin.com/in/ram-satya-sai-kapileswarapu-8a365023a"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          className={styles.statsRow}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: EASE_OUT }}
        >
          {[
            { value: '3+', label: 'AI Projects Built' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: 'Python', label: 'Primary Stack' },
          ].map((stat, i) => (
            <div key={i} className={`glass ${styles.statCard}`}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
