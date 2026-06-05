'use client';

import React, { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder phone number. Replace with actual number including country code (e.g. 919876543210 for India)
    const phoneNumber = 'YOUR_PHONE_NUMBER_HERE'; 
    const text = `Hi Ram,\n\nMy name is ${formData.name} (${formData.email}).\n\n${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-subtitle">Ready to automate your business?</p>
        
        <div className={styles.contactWrapper}>
          <div className={styles.contactInfo}>
            <h3>Get in Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <span className={styles.icon}>📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.icon}>📍</span>
                <span>India</span>
              </div>
            </div>
            
            <div className={styles.socialLinks}>
              <a href="https://github.com/ramsatyasai" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>GitHub</a>
              <a href="https://www.linkedin.com/in/ram-satya-sai-kapileswarapu-8a365023a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>LinkedIn</a>
            </div>
          </div>
          
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your.email@example.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell me about your project or automation needs..." rows={5}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}
