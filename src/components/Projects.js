import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLock } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [flippedCard, setFlippedCard] = useState(null);

    const projects = [
        {
            title: "INFRAMAP",
            classification: "PUBLIC",
            description: "ПОБЕДИТЕЛЬ хакатона по цифровизации государственного управления в КГТУ им. Разакова, Бишкек (27-29 мая 2024). Интерактивная веб-платформа для оптимизации размещения государственных учреждений (школы, больницы, пожарные станции) с использованием пространственного анализа и машинного обучения.",
            tech: ["React", "Django", "Python", "JavaScript", "OpenStreetMap"],
            role: "Fullstack разработка • Геопространственный анализ • UI/UX • Архитектура",
            achievement: "1-е место • 100,000 сом • КГТУ им. Разакова",
            github: "https://github.com/Num1s/infra-map"
        },
        {
            title: "JAPAN DIGITAL UNIVERSITY",
            classification: "ACTIVE",
            description: "Разработка официального веб-сайта для Japan Digital University (JDU) - первого японского цифрового университета в Узбекистане. Университет создан в рамках сотрудничества между Узбекистаном и Японией для подготовки IT-специалистов по японским стандартам.",
            tech: ["React", "Node.js", "MongoDB", "i18n", "Responsive Design"],
            role: "Frontend разработка • UI/UX дизайн • Многоязычная локализация",
            status: "В РАЗРАБОТКЕ",
            website: "https://jdu.uz"
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">
                        <span className="glitch-text">CLASSIFIED PROJECTS</span>
                    </h2>
                    <p className="section-subtitle">{'//'} MISSION ARCHIVES</p>
                    <div className="section-divider"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`project-card-3d ${flippedCard === index ? 'flipped' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            onClick={() => setFlippedCard(flippedCard === index ? null : index)}
                        >
                            <div className="card-inner">
                                {/* Front */}
                                <div className="card-front glass-terminal">
                                    <div className="classification-label badge-success">
                                        <FaLock /> {project.classification}
                                    </div>
                                    <div className="project-preview">
                                        <div className="preview-text">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="preview-hint">CLICK TO DECRYPT</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Back */}
                                <div className="card-back glass-terminal">
                                    <div className="terminal-window">
                                        <div className="terminal-header">
                                            <div className="terminal-dot"></div>
                                            <div className="terminal-dot"></div>
                                            <div className="terminal-dot"></div>
                                            <span className="terminal-title">{project.title.toLowerCase()}.txt</span>
                                        </div>
                                        <div className="terminal-body">
                                            <p className="project-description">{project.description}</p>

                                            {project.achievement && (
                                                <div className="project-info">
                                                    <span className="info-label">{'//'} ACHIEVEMENT:</span>
                                                    <span className="info-value">{project.achievement}</span>
                                                </div>
                                            )}

                                            {project.status && (
                                                <div className="project-info">
                                                    <span className="info-label">{'//'} STATUS:</span>
                                                    <span className="info-value status-active">{project.status}</span>
                                                </div>
                                            )}

                                            {project.role && (
                                                <div className="project-info">
                                                    <span className="info-label">{'//'} ROLE:</span>
                                                    <span className="info-value">{project.role}</span>
                                                </div>
                                            )}

                                            <div className="project-tech">
                                                {project.tech.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag badge-info">{tech}</span>
                                                ))}
                                            </div>

                                            <div className="project-links">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" onClick={(e) => e.stopPropagation()}>
                                                        <FaGithub /> GITHUB
                                                    </a>
                                                )}
                                                {project.website && (
                                                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={(e) => e.stopPropagation()}>
                                                        <FaExternalLinkAlt /> VISIT
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
