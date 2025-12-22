import React from 'react';
import './ScanLine.css';

const ScanLine = ({ speed = 4, opacity = 0.5 }) => {
    return (
        <div
            className="scan-line"
            style={{
                animationDuration: `${speed}s`,
                opacity: opacity
            }}
        />
    );
};

export default ScanLine;
