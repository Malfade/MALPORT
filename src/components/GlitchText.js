import React, { useState, useEffect } from 'react';

const GlitchText = ({
    text,
    intensity = 'medium',
    className = '',
    trigger = 'hover'
}) => {
    const [isGlitching, setIsGlitching] = useState(trigger === 'always');
    const [glitchedText, setGlitchedText] = useState(text);

    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    const intensitySettings = {
        low: { probability: 0.1, duration: 100 },
        medium: { probability: 0.2, duration: 150 },
        high: { probability: 0.3, duration: 200 }
    };

    const settings = intensitySettings[intensity] || intensitySettings.medium;

    useEffect(() => {
        if (!isGlitching) {
            setGlitchedText(text);
            return;
        }

        const interval = setInterval(() => {
            const newText = text.split('').map(char => {
                if (char === ' ') return ' ';
                if (Math.random() < settings.probability) {
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                }
                return char;
            }).join('');

            setGlitchedText(newText);

            setTimeout(() => setGlitchedText(text), 50);
        }, settings.duration);

        return () => clearInterval(interval);
    }, [isGlitching, text, settings]);

    const handleMouseEnter = () => {
        if (trigger === 'hover') setIsGlitching(true);
    };

    const handleMouseLeave = () => {
        if (trigger === 'hover') setIsGlitching(false);
    };

    return (
        <span
            className={`glitch-text ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {glitchedText}
        </span>
    );
};

export default GlitchText;
