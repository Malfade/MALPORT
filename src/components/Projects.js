import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "INFRAMAP",
            description: "ПОБЕДИТЕЛЬ хакатона по цифровизации государственного управления в КГТУ им. Разакова, Бишкек (27-29 мая 2024). Интерактивная веб-платформа для оптимизации размещения государственных учреждений (школы, больницы, пожарные станции) с использованием пространственного анализа и машинного обучения. Система решает задачи оптимизации инфраструктуры на основе анализа географических данных.",
            tech: ["React", "Django", "Python", "JavaScript", "OpenStreetMap"],
            role: "Fullstack разработка • Геопространственный анализ • UI/UX • Архитектура",
            achievement: "1-е место • 100,000 сом • КГТУ им. Разакова",
            github: "https://github.com/Num1s/infra-map"
        },
        {
            title: "JAPAN DIGITAL UNIVERSITY",
            description: "Разработка официального веб-сайта для Japan Digital University (JDU) - первого японского цифрового университета в Узбекистане. Университет создан в рамках сотрудничества между Узбекистаном и Японией для подготовки IT-специалистов по японским стандартам и трудоустройства в японских компаниях. Проект включает многоязычную поддержку, систему подачи документов и интеграцию с образовательными платформами.",
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
                    <h2 className="section-title" style={{ color: '#4fc08d' }}>Проекты</h2>
                    <div className="section-divider" style={{ background: '#4fc08d' }}></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="project-preview">
                                <div className="preview-overlay">
                                    <span>HOLOGRAM<br />PREVIEW</span>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>

                                <p className="project-description">{project.description}</p>

                                {project.achievement && (
                                    <div className="project-achievement">
                                        <div className="achievement-label">ДОСТИЖЕНИЕ:</div>
                                        <div className="achievement-text">{project.achievement}</div>
                                    </div>
                                )}

                                {project.status && (
                                    <div className="project-status">
                                        <div className="status-label">СТАТУС:</div>
                                        <div className="status-text">{project.status}</div>
                                    </div>
                                )}

                                {project.role && (
                                    <div className="project-role">
                                        <div className="role-label">МОЯ РОЛЬ:</div>
                                        <div className="role-text">{project.role}</div>
                                    </div>
                                )}

                                <div className="project-tech">
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaGithub /> GITHUB
                                        </a>
                                    )}
                                    {project.website && (
                                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                                            <FaExternalLinkAlt /> САЙТ
                                        </a>
                                    )}
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
