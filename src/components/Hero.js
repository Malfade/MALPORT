import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Malfade', icon: <FaGithub /> },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/nikita-cybersecurity', icon: <FaLinkedin /> },
        { name: 'Telegram', url: 'https://t.me/MalfyRose', icon: <FaTelegram /> }
    ];

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="badge-dot"></span>
                        SYSTEM ONLINE
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        NIKITA
                    </motion.h1>

                    <motion.h2
                        className="hero-subtitle gradient-text"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        JUNIOR WEB DEVELOPER
                    </motion.h2>

                    <motion.p
                        className="hero-username"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        @MalfyRose
                    </motion.p>

                    <motion.div
                        className="hero-tags"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        <span className="tag tag-cyan">Cybersecurity</span>
                        <span className="tag tag-magenta">React / TypeScript</span>
                        <span className="tag tag-green">AI Integration</span>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        Junior Web Developer & IT Project Initiator specializing in cybersecurity, web development, and AI integration.
                        Conducting independent security research and working on innovative AI-powered projects.
                    </motion.p>

                    <motion.div
                        className="hero-role-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <div className="role-icon">AI</div>
                        <div className="role-text">
                            <div className="role-title">JUNIOR WEB DEVELOPER</div>
                            <div className="role-subtitle">IT Project Initiator • Security Researcher</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                    >
                        <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                            VIEW PROJECTS
                        </button>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            DOWNLOAD CV
                        </a>
                    </motion.div>

                    <motion.div
                        className="hero-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                title={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="image-container">
                        <div className="image-glow"></div>
                        <img
                            src="/images/photo_2025-09-29_19-18-24.jpg"
                            alt="Nikita - Cybersecurity Specialist"
                            className="profile-image"
                        />
                        <div className="image-overlay"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
