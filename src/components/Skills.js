import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'React', level: 85, color: '#61dafb' },
        { name: 'TypeScript', level: 80, color: '#3178c6' },
        { name: 'JavaScript', level: 85, color: '#f7df1e' },
        { name: 'Python', level: 70, color: '#3776ab' },
        { name: 'HTML/CSS', level: 90, color: '#e34c26' },
        { name: 'Responsive Design', level: 85, color: '#ff6b6b' },
        { name: 'UX/UI Design', level: 75, color: '#a29bfe' },
        { name: 'Network Security', level: 65, color: '#6c5ce7' },
        { name: 'Wi-Fi Analysis', level: 70, color: '#8e44ad' },
        { name: 'tcpdump', level: 65, color: '#e74c3c' },
        { name: 'AI Integration', level: 75, color: '#00cec9' },
        { name: 'Technical Writing', level: 85, color: '#fdcb6e' },
        { name: 'Project Management', level: 75, color: '#2c3e50' }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title" style={{ color: 'var(--color-purple)' }}>Technical Skills</h2>
                    <div className="section-divider" style={{ background: 'var(--color-purple)' }}></div>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="skill-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ scale: 1.03, borderColor: skill.color }}
                        >
                            <div className="skill-header">
                                <span className="skill-name" style={{ color: skill.color }}>
                                    {skill.name.toUpperCase()}
                                </span>
                                <span className="skill-percentage" style={{
                                    background: `linear-gradient(45deg, ${skill.color}, ${skill.color}80)`
                                }}>
                                    {skill.level}%
                                </span>
                            </div>

                            <div className="skill-bar-container" style={{ borderColor: `${skill.color}30` }}>
                                <motion.div
                                    className="skill-bar"
                                    style={{
                                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                                        boxShadow: `0 0 15px ${skill.color}`
                                    }}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.05 + 0.2 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
