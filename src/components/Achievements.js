import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
    const skills = ['Geospatial Analysis', 'Fullstack Development', 'Machine Learning', 'Data Visualization', 'Team Leadership'];

    return (
        <section id="achievements" className="achievements section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title gradient-text-gold">Достижения</h2>
                    <div className="section-divider" style={{ background: 'var(--gradient-gold)' }}></div>
                </motion.div>

                <div className="achievements-grid">
                    <motion.div
                        className="achievement-content"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="achievement-card glass-strong">
                            <h3 className="achievement-title">ПОБЕДА НА ХАКАТОНЕ</h3>

                            <div className="achievement-info">
                                <div className="info-label">КГТУ им. И. Разакова, Бишкек</div>
                                <div className="info-text">27-29 мая 2025</div>
                                <div className="info-text">Хакатон по цифровизации государственного управления</div>
                                <div className="info-prize">Призовой фонд: 100,000 сом</div>
                            </div>

                            <p className="achievement-description">
                                Наша команда заняла <strong className="highlight-gold">1-е место</strong> среди всех участников,
                                разработав комплексную систему <strong className="highlight-cyan">InfraMap</strong> для оптимизации размещения государственных учреждений
                                с использованием геопространственного анализа и машинного обучения.
                            </p>

                            <div className="features-box">
                                <h4 className="features-title">Ключевые особенности InfraMap:</h4>
                                <ul className="features-list">
                                    <li>Интерактивная карта с многослойной визуализацией</li>
                                    <li>Алгоритмы оптимизации размещения школ, больниц, пожарных станций</li>
                                    <li>Анализ зон покрытия и недостаточного обслуживания</li>
                                    <li>Интеграция с OpenStreetMap для города Бишкек</li>
                                    <li>Fullstack решение на React + Django</li>
                                </ul>
                            </div>

                            <div className="skills-tags">
                                {skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>

                            <motion.a
                                href="https://github.com/Num1s/infra-map"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-button"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub /> ПОСМОТРЕТЬ НА GITHUB
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="achievement-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="visual-frame">
                            <div className="frame-corners">
                                <div className="corner corner-tl"></div>
                                <div className="corner corner-tr"></div>
                                <div className="corner corner-bl"></div>
                                <div className="corner corner-br"></div>
                            </div>

                            <div className="trophy-container">
                                <div className="trophy-icon">WINNER</div>
                                <div className="trophy-text">
                                    <div className="trophy-status">STATUS: VICTORY ACHIEVED</div>
                                    <div className="trophy-team">TEAM INFRAMAP</div>
                                    <div className="trophy-location">КГТУ ИМ. И. РАЗАКОВА • БИШКЕК • 2024</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
