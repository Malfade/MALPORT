import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCode, FaNetworkWired, FaLock, FaBug, FaRobot } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const skillCategories = [
        { id: 'all', name: 'ALL SYSTEMS', icon: <FaShieldAlt /> },
        { id: 'offensive', name: 'OFFENSIVE', icon: <FaBug /> },
        { id: 'defensive', name: 'DEFENSIVE', icon: <FaLock /> },
        { id: 'development', name: 'DEVELOPMENT', icon: <FaCode /> },
        { id: 'network', name: 'NETWORK', icon: <FaNetworkWired /> },
        { id: 'ai', name: 'AI/ML', icon: <FaRobot /> }
    ];

    const skills = [
        { name: 'React', category: 'development', level: 85, icon: '⚛️', description: 'Modern web applications' },
        { name: 'TypeScript', category: 'development', level: 80, icon: '📘', description: 'Type-safe development' },
        { name: 'JavaScript', category: 'development', level: 85, icon: '🟨', description: 'Core programming' },
        { name: 'Python', category: 'development', level: 70, icon: '🐍', description: 'Scripting & automation' },
        { name: 'Network Security', category: 'defensive', level: 65, icon: '🛡️', description: 'Security protocols' },
        { name: 'Wi-Fi Analysis', category: 'offensive', level: 70, icon: '📡', description: 'Wireless penetration' },
        { name: 'tcpdump', category: 'network', level: 65, icon: '📊', description: 'Packet analysis' },
        { name: 'Penetration Testing', category: 'offensive', level: 68, icon: '🔓', description: 'Vulnerability assessment' },
        { name: 'Firewall Config', category: 'defensive', level: 72, icon: '🔥', description: 'Network protection' },
        { name: 'AI Integration', category: 'ai', level: 75, icon: '🤖', description: 'ML model deployment' }
    ];

    const filteredSkills = activeCategory === 'all'
        ? skills
        : skills.filter(skill => skill.category === activeCategory);

    return (
        <section id="skills" className="skills section hex-pattern">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="glitch-text">SECURITY ARSENAL</span>
                    </h2>
                    <p className="section-subtitle">{'//'} TOOLS & TECHNOLOGIES</p>
                    <div className="section-divider"></div>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    className="category-filters"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.button
                            key={category.id}
                            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-name">{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <div className="skills-grid">
                    {filteredSkills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass-terminal"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="skill-header">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-info">
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            </div>

                            <div className="skill-progress">
                                <div className="progress-header">
                                    <span className="progress-label">PROFICIENCY</span>
                                    <span className="progress-value">{skill.level}%</span>
                                </div>
                                <div className="progress-bar-container">
                                    <motion.div
                                        className="progress-bar"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                                    >
                                        <div className="progress-glow"></div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Terminal-style status */}
                            <div className="skill-status">
                                <span className="status-dot pulse-glow"></span>
                                <span className="status-text">OPERATIONAL</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Summary */}
                <motion.div
                    className="skills-stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="stat-item glass-terminal">
                        <div className="stat-value">{skills.length}</div>
                        <div className="stat-label">TOTAL SKILLS</div>
                    </div>
                    <div className="stat-item glass-terminal">
                        <div className="stat-value">
                            {Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%
                        </div>
                        <div className="stat-label">AVG PROFICIENCY</div>
                    </div>
                    <div className="stat-item glass-terminal">
                        <div className="stat-value">{skillCategories.length - 1}</div>
                        <div className="stat-label">CATEGORIES</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
