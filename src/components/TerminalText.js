import React, { useState, useEffect } from 'react';

const TerminalText = ({
    text,
    speed = 50,
    showCursor = true,
    onComplete = () => { },
    className = ''
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (!isComplete) {
            setIsComplete(true);
            onComplete();
        }
    }, [currentIndex, text, speed, isComplete, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && <span className="terminal-cursor"></span>}
        </span>
    );
};

export default TerminalText;
