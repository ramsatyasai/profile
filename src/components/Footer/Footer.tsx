'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import styles from './Footer.module.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topGlow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>
            <span className={styles.logoMark} />
            Saifolio
          </a>
          <p className={styles.tagline}>
            Building Software. Automating Workflows. Documenting the Journey.
          </p>
          <div className={styles.socials}>
            <a href="https://github.com/ramsatyasai" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href="https://www.linkedin.com/in/ram-satya-sai-kapileswarapu-8a365023a" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
          </div>
        </div>

        {/* Nav */}
        <nav className={styles.navCol}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.ctaCol}>
          <h4 className={styles.colTitle}>Ready to automate?</h4>
          <p className={styles.ctaText}>Let's discuss your project and find the right solution.</p>
          <a href="#contact" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Book a Call <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>© {year} Kapileswarapu Ram Satya Sai. All rights reserved.</p>
            <p className={styles.madeWith}>Built with Next.js & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
