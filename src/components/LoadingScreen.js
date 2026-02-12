import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const messages = [
    '> INITIALIZING SYSTEM...',
    '> LOADING SECURITY PROTOCOLS...',
    '> ESTABLISHING SECURE CONNECTION...',
    '> DECRYPTING USER DATA...',
    '> VERIFYING CREDENTIALS...',
    '> LOADING CYBERSECURITY MODULES...',
    '> ACTIVATING FIREWALL...',
    '> SYSTEM READY',
    '> ACCESS GRANTED'
];

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [bootMessages, setBootMessages] = useState([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        // Progress bar animation
        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + 2;
            });
        }, 50);

        return () => clearInterval(progressInterval);
    }, []);

    useEffect(() => {
        // Boot messages animation
        if (currentMessageIndex < messages.length) {
            const messageTimeout = setTimeout(() => {
                setBootMessages(prev => [...prev, messages[currentMessageIndex]]);
                setCurrentMessageIndex(prev => prev + 1);
            }, 300 + currentMessageIndex * 200);

            return () => clearTimeout(messageTimeout);
        }
    }, [currentMessageIndex]);

    useEffect(() => {
        // Complete loading when progress reaches 100%
        if (progress === 100) {
            setTimeout(() => {
                onLoadingComplete();
            }, 1000);
        }
    }, [progress, onLoadingComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-scanline"></div>

            <div className="loading-content">
                {/* ASCII Art Logo */}
                <motion.div
                    className="ascii-logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <pre>{`
    ███╗   ███╗ █████╗ ██╗     ███████╗ █████╗ ██████╗ ███████╗
    ████╗ ████║██╔══██╗██║     ██╔════╝██╔══██╗██╔══██╗██╔════╝
    ██╔████╔██║███████║██║     █████╗  ███████║██║  ██║█████╗  
    ██║╚██╔╝██║██╔══██║██║     ██╔══╝  ██╔══██║██║  ██║██╔══╝  
    ██║ ╚═╝ ██║██║  ██║███████╗██║     ██║  ██║██████╔╝███████╗
    ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝
                    `}</pre>
                </motion.div>

                {/* Boot Messages */}
                <div className="boot-messages">
                    {bootMessages.map((message, index) => (
                        <motion.div
                            key={index}
                            className="boot-message"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {message}
                            {index === bootMessages.length - 1 && index < messages.length - 1 && (
                                <span className="terminal-cursor"></span>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                    <div className="progress-bar">
                        <motion.div
                            className="progress-fill"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="progress-text">{progress}%</div>
                </div>

                {/* Security Badge */}
                <motion.div
                    className="security-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="badge-text">SECURE BOOT SEQUENCE</div>
                </motion.div>
            </div>
        </div>
    );
};

export default LoadingScreen;
