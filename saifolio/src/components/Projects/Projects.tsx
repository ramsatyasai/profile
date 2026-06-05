import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'AI Clinic Receptionist',
    problem: 'Clinics lose time managing appointments and answering repetitive patient queries.',
    solution: 'An AI voice/text agent that handles scheduling and patient FAQs 24/7.',
    tech: ['Python', 'FastAPI', 'LLMs', 'Twilio'],
    results: 'Reduced manual call handling by 60%.',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Appointment Reminder Automation',
    problem: 'High no-show rates for booked appointments.',
    solution: 'Automated workflow that sends WhatsApp/SMS reminders and handles rescheduling.',
    tech: ['n8n', 'Node.js', 'WhatsApp API'],
    results: 'Decreased no-shows by 40% within the first month.',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Lead Qualification Automation',
    problem: 'Sales teams spend too much time filtering unqualified leads.',
    solution: 'An AI-powered form that scores leads in real-time and routes them appropriately.',
    tech: ['React', 'Python', 'OpenAI API', 'PostgreSQL'],
    results: 'Saved 15 hours per week for the sales team.',
    demoLink: '#',
    githubLink: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Real Problems, Automated Solutions</p>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imagePlaceholder}>
                <span>Project Preview</span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i} className={styles.badge}>{t}</span>
                  ))}
                </div>
                
                <div className={styles.details}>
                  <p><strong>Problem:</strong> {project.problem}</p>
                  <p><strong>Solution:</strong> {project.solution}</p>
                  <p><strong>Results:</strong> <span className={styles.highlight}>{project.results}</span></p>
                </div>
                
                <div className={styles.links}>
                  <a href={project.demoLink} className="btn btn-primary" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>Live Demo</a>
                  <a href={project.githubLink} className="btn btn-outline" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
