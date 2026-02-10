import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const activities = [
        {
            icon: 'AS',
            title: 'ALAYSOFT',
            subtitle: 'AppSec Specialist',
            description: 'Responsible for application security, vulnerability assessment, and ensuring secure development lifecycle since November 2025.',
            tags: ['AppSec', 'Security Audit', 'SSDLC'],
            link: 'https://www.alaysoft.space/',
            gradient: 'linear-gradient(45deg, #00f5ff, #ff0080)'
        },
        {
            icon: 'BL',
            title: 'BEELINE',
            subtitle: 'SOC Intern',
            description: 'Internship in the Security Operations Center (SOC), focusing on threat monitoring, incident response, and security analysis since February 2026.',
            tags: ['SOC', 'Monitoring', 'Incidents'],
            link: 'https://beeline.kg/',
            gradient: 'linear-gradient(45deg, #ff0080, #ff6b35)'
        },
        {
            icon: 'SW',
            title: 'SOLARWINDS RESEARCH',
            subtitle: 'Independent Research',
            description: 'Comprehensive analysis of the SolarWinds cyberattack (SUNBURST/Solorigate). Focused on attack vectors, supply-chain compromise, and persistence mechanisms.',
            tags: ['Cybersecurity', 'Supply Chain', 'Analysis'],
            link: 'https://docs.google.com/document/d/e/2PACX-1vQcBAlsTchlIsHbuysKDqxeouSDJSWD5JdrL2YLnE_8TgXZdRhkG5AXFbpwFVnaDILwVk1He3rl_do0/pub',
            gradient: 'linear-gradient(45deg, #00ff41, #00f5ff)'
        }
    ];

    const traits = [
        { title: 'SYSTEM THINKING', desc: 'See systems holistically: architecture, logic, risks, and limitations' },
        { title: 'INDEPENDENT', desc: 'Work autonomously on research and development tasks' },
        { title: 'CRITICAL THINKER', desc: 'Analyze constraints, risks, and edge cases thoroughly' },
        { title: 'TIME MANAGEMENT', desc: 'Balance studies, self-learning, research, and projects' },
        { title: 'LEADERSHIP', desc: 'Project coordination and mentoring peers in technical topics' }
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="glitch-text">USER PROFILE</span>
                    </h2>
                    <p className="section-subtitle">{'//'} SYSTEM INFORMATION</p>
                    <div className="section-divider"></div>
                </motion.div>

                <div className="about-grid">
                    <motion.div
                        className="about-intro"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="intro-card glass">
                            <div className="terminal-header">
                                <span className="terminal-dot"></span>
                                <span className="terminal-dot"></span>
                                <span className="terminal-dot"></span>
                            </div>
                            <p className="terminal-text">
                                ИНИЦИАЛИЗАЦИЯ ПРОФИЛЯ... ✓<br />
                                ЗАГРУЗКА AI-МОДУЛЕЙ... ✓<br />
                                АКТИВАЦИЯ ХАКАТОН-РЕЖИМА... ✓
                            </p>
                            <p className="intro-description">
                                Web Developer and IT Project Initiator with strong focus on cybersecurity,
                                web development, and AI integration. Currently working in an innovative AI-powered
                                web studio and conducting independent security research.
                                <br /><br />
                                Passionate about system thinking, network security, and bringing innovative ideas
                                to concrete results. Strong background in React development, technical documentation,
                                and project coordination.
                            </p>
                        </div>

                        <div className="traits-grid">
                            {traits.map((trait, index) => (
                                <motion.div
                                    key={index}
                                    className="trait-card glass"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    whileHover={{ scale: 1.02, borderColor: 'var(--color-cyan)' }}
                                >
                                    <h3 className="trait-title">{trait.title}</h3>
                                    <p className="trait-desc">{trait.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="activities"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="activity-card glass"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="activity-header">
                                    <div className="activity-icon" style={{ background: activity.gradient }}>
                                        {activity.icon}
                                    </div>
                                    <div>
                                        <h3 className="activity-title">{activity.title}</h3>
                                        {activity.subtitle && <p className="activity-subtitle">{activity.subtitle}</p>}
                                    </div>
                                </div>
                                <p className="activity-description">{activity.description}</p>
                                <div className="activity-tags">
                                    {activity.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="activity-tag">{tag}</span>
                                    ))}
                                </div>
                                {activity.link && (
                                    <a href={activity.link} target="_blank" rel="noopener noreferrer" className="activity-link">
                                        {activity.link.replace('https://', '')} →
                                    </a>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
