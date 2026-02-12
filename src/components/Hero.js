import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaTelegram, FaShieldAlt } from 'react-icons/fa';
import MatrixRain from './MatrixRain';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';
import './Hero.css';

const Hero = () => {
    const [showTitle, setShowTitle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTitle(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Malfade', icon: <FaGithub /> },
        { name: 'Telegram', url: 'https://t.me/MalfyRose', icon: <FaTelegram /> }
    ];

    const skills = ['Cybersecurity', 'React / TypeScript', 'AI Integration', 'Penetration Testing'];

    return (
        <section id="home" className="hero">
            <MatrixRain density={0.96} speed={45} />

            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Security Clearance Badge */}
                    <motion.div
                        className="clearance-badge"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaShieldAlt className="clearance-icon" />
                        <div className="clearance-info">
                            <div className="clearance-level">SECURITY CLEARANCE: LEVEL 5</div>
                            <div className="clearance-status">
                                <span className="status-dot pulse-glow"></span>
                                ACCESS GRANTED
                            </div>
                        </div>
                    </motion.div>

                    {/* Terminal Prompt */}
                    <motion.div
                        className="terminal-prompt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="prompt-symbol">root@nikita:~$</span>
                        {showTitle && (
                            <TerminalText
                                text=" whoami"
                                speed={100}
                                showCursor={false}
                            />
                        )}
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <GlitchText text="MALFADE" intensity="medium" trigger="always" />
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.h2
                        className="hero-subtitle gradient-text-cyber"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        WEB DEVELOPER & SECURITY SPECIALIST
                    </motion.h2>

                    {/* Username */}
                    <motion.p
                        className="hero-username"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                    >
                        @MalfyRose
                    </motion.p>

                    {/* Skill Tags */}
                    <motion.div
                        className="hero-tags"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.6 }}
                    >
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="tag badge-success"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6 + index * 0.1 }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        className="hero-description terminal-window"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                    >
                        <div className="terminal-header">
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                            <div className="terminal-dot"></div>
                            <span className="terminal-title">profile.txt</span>
                        </div>
                        <div className="terminal-body">
                            <p>
                                <span className="terminal-comment"># Web Developer & IT Project Initiator</span><br />
                                <span className="terminal-comment"># Specializing in:</span><br />
                                → Cybersecurity Research & Analysis<br />
                                → Web Development (React, TypeScript)<br />
                                → AI Integration & Automation<br />
                                → Independent Security Research
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                    >
                        <button
                            className="btn btn-primary"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            <span>VIEW PROJECTS</span>
                        </button>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                            <span>DOWNLOAD CV</span>
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="hero-social"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.2 }}
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link glass-terminal"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                title={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Profile Image with Holographic Effect */}
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="image-container">
                        {/* Hexagonal Frame */}
                        <div className="hex-frame">
                            <svg viewBox="0 0 100 100" className="hex-svg">
                                <polygon
                                    points="50 1 95 25 95 75 50 99 5 75 5 25"
                                    className="hex-border"
                                />
                            </svg>
                        </div>

                        {/* Scanning Lines */}
                        <div className="scan-lines">
                            <div className="scan-line-horizontal"></div>
                            <div className="scan-line-vertical"></div>
                        </div>

                        {/* Profile Image */}
                        <div className="image-wrapper">
                            <img
                                src="/images/photo_2025-09-29_19-18-24.jpg"
                                alt="Nikita - Cybersecurity Specialist"
                                className="profile-image"
                            />
                            <div className="image-overlay hologram"></div>
                        </div>

                        {/* Data Streams */}
                        <div className="data-streams">
                            <div className="data-stream-line"></div>
                            <div className="data-stream-line"></div>
                            <div className="data-stream-line"></div>
                        </div>

                        {/* Security Status */}
                        <div className="image-status">
                            <div className="status-indicator">
                                <span className="status-dot pulse-glow"></span>
                                IDENTITY VERIFIED
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
            >
                <div className="scroll-text">SCROLL TO EXPLORE</div>
                <div className="scroll-arrow">↓</div>
            </motion.div>
        </section>
    );
};

export default Hero;
