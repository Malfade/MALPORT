import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onLoadingComplete(), 500);
                    return 100;
                }
                return prev + 2;
            });
        }, 30);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="loading-content">
                <motion.div
                    className="loading-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    &lt;DEV/&gt;
                </motion.div>

                <div className="loading-bar-container">
                    <motion.div
                        className="loading-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <motion.div
                    className="loading-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    INITIALIZING SYSTEM... {progress}%
                </motion.div>

                <div className="loading-grid">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="grid-line"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: i * 0.05, duration: 0.3 }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
