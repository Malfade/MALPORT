import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Malfade', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/nikita-cybersecurity', icon: <FaLinkedin /> },
        { name: 'Telegram', url: 'https://t.me/MalfyRose', icon: <FaTelegram /> }
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="glitch-text">SECURE COMMUNICATION</span>
                    </h2>
                    <p className="section-subtitle">{'//'} ENCRYPTED CHANNEL</p>
                    <div className="section-divider"></div>
                </motion.div>

                <div className="contact-grid">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="info-card glass">
                            <h3 className="info-title">Let's Work Together!</h3>
                            <p className="info-description">
                                Open to new projects and collaboration opportunities. Reach out
                                directly through the channels below or connect via social media.
                            </p>

                            <div className="social-links">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-card glass"
                                        whileHover={{ scale: 1.05, borderColor: 'var(--color-cyan)' }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <div className="social-icon">{social.icon}</div>
                                        <div className="social-name">{social.name}</div>
                                    </motion.a>
                                ))}
                            </div>

                            <div className="contact-details">
                                <div className="detail-item">
                                    <div className="detail-label">Email</div>
                                    <div className="detail-value">nikitaundusk@gmail.com</div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-label">Phone</div>
                                    <div className="detail-value">+996 550 57 94 87</div>
                                </div>
                                <div className="detail-item">
                                    <div className="detail-label">Location</div>
                                    <div className="detail-value">Kyrgyzstan</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
