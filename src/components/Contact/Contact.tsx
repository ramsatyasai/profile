'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { EASE_OUT } from '@/lib/animations';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const phoneNumber = '919032381330'; // India (+91) country code prefix required by wa.me
    const text = `Hi Ram,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    setTimeout(() => {
      setSending(false);
      window.open(whatsappUrl, '_blank');
    }, 600);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className={`section-title ${styles.title}`}>
            Let's Build Something<br />
            <span className="text-gradient">Worthwhile Together</span>
          </h2>
          <p className="section-description" style={{ textAlign: 'center' }}>
            Let's discuss how automation can help your business scale, save time, and grow revenue.
          </p>
        </motion.div>

        {/* Contact Box */}
        <motion.div
          className={`glass ${styles.contactBox}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.15, duration: 0.7, ease: EASE_OUT }}
        >
          <div className={styles.boxGlow} aria-hidden="true" />

          {/* Info Panel */}
          <div className={styles.infoPanel}>
            <h3 className={styles.infoTitle}>Reach Out Directly</h3>
            <p className={styles.infoSubtext}>Prefer a call? Book a 30-minute intro session to discuss your project needs.</p>

            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><Mail size={16} /></div>
                <span>ramsatyasaikapileswarapu@gmail.com</span>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><MapPin size={16} /></div>
                <span>India 🇮🇳</span>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://github.com/ramsatyasai"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-ghost ${styles.socialBtn}`}
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ram-satya-sai-kapileswarapu-8a365023a"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-ghost ${styles.socialBtn}`}
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your business problem or automation needs..."
                rows={5}
                className={styles.textarea}
              />
            </div>
            <motion.button
              type="submit"
              className={`btn btn-primary ${styles.submitBtn}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={sending}
            >
              {sending ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
              <Send size={16} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
