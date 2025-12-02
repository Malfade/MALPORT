import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { text: 'ИНИЦИАЛИЗАЦИЯ AI ЯДРА...', color: '#00f5ff', icon: '🧠' },
    { text: 'ЗАГРУЗКА КОМПОНЕНТОВ...', color: '#ff0080', icon: '⚡' },
    { text: 'ПОДКЛЮЧЕНИЕ К СЕРВЕРУ...', color: '#FFD700', icon: '🌐' },
    { text: 'СИСТЕМА ГОТОВА!', color: '#00ff41', icon: '✅' }
  ];

  useEffect(() => {
    setShowLogo(true);

    const loadingProcess = async () => {
      const totalTime = 1500; // Еще больше сократил до 1.5 секунд
      const startTime = Date.now();
      
      // Оптимизированное обновление прогресса
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / totalTime) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
        }
      }, 16); // 60 FPS
      
      // Параллельное выполнение этапов для скорости
      const stepPromises = steps.map((step, i) => 
        new Promise(resolve => {
          setTimeout(() => {
            if (i === currentStep) {
              setCurrentStep(i);
              setDisplayText(step.text);
            }
            resolve();
          }, i * 300); // Перекрывающиеся этапы
        })
      );
      
      await Promise.all(stepPromises);
      
      clearInterval(progressInterval);
      setProgress(100);
      setIsComplete(true);
    };

    const timer = setTimeout(loadingProcess, 50); // Почти мгновенный старт
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="modern-loading-screen">
      {/* Оптимизированный фон с градиентом */}
      <div className="gradient-bg">
        <div className="gradient-overlay"></div>
      </div>

      {/* Минималистичные частицы */}
      <div className="particles-container">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-particle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [-100, -window.innerHeight - 100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              backgroundColor: steps[Math.floor(Math.random() * steps.length)].color
            }}
          />
        ))}
      </div>
      
      <div className="loading-container">
        {/* Современный заголовок */}
        <motion.div 
          className="modern-header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="brand-badge">FULLSTACK AI</div>
          <h1 className="main-title">PENTESTER SYSTEM</h1>
          <div className="subtitle">v2025 • Optimized Edition</div>
        </motion.div>

        {/* Улучшенный логотип */}
        <AnimatePresence>
          {showLogo && (
            <motion.div 
              className="modern-logo"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 1, ease: "backOut" }}
            >
              <div className="logo-circle">
                <motion.div 
                  className="logo-inner"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="logo-center">
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      🚀
                    </motion.span>
                  </div>
                </motion.div>
              </div>
              <div className="logo-text">
                <div className="primary-text">PENTESTER</div>
                <div className="secondary-text">PORTFOLIO</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Современная система статуса */}
        <motion.div 
          className="status-system"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="status-grid">
            {['AI CORE', 'SYSTEM', 'NETWORK'].map((label, idx) => (
              <motion.div 
                key={label}
                className="status-indicator"
                animate={{ 
                  opacity: progress > (idx + 1) * 30 ? 1 : 0.3,
                  scale: progress > (idx + 1) * 30 ? 1 : 0.9
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="indicator-dot" style={{
                  backgroundColor: progress > (idx + 1) * 30 ? '#00ff41' : '#333'
                }}></div>
                <span className="indicator-label">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Современный прогресс бар */}
        <div className="progress-section">
          <div className="progress-header">
            <span className="progress-label">SYSTEM INITIALIZATION</span>
            <motion.span 
              className="progress-value"
              key={Math.round(progress)}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>
          <div className="modern-progress-track">
            <motion.div 
              className="progress-bar"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <div className="progress-highlight"></div>
          </div>
        </div>

        {/* Современный терминал */}
        <motion.div 
          className="terminal-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
              <span className="terminal-title">ALAYSOFT</span>
            </div>
            <div className="terminal-content">
              <div className="terminal-line">
                <span className="prompt">➜ ~</span>
                <motion.span 
                  className="command-output"
                  key={currentStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ color: steps[currentStep]?.color }}
                >
                  {steps[currentStep]?.icon} {displayText}
                </motion.span>
                <motion.span 
                  className="cursor"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Информационная панель */}
        <motion.div 
          className="info-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <div className="info-item">
            <span className="info-icon">💻</span>
            <div className="info-content">
              <div className="info-label">MODE</div>
              <div className="info-value">FULLSTACK</div>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🤖</span>
            <div className="info-content">
              <div className="info-label">AI</div>
              <div className="info-value">ACTIVE</div>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon">🏆</span>
            <div className="info-content">
              <div className="info-label">STATUS</div>
              <div className="info-value">CHAMPION</div>
            </div>
          </div>
        </motion.div>

        {/* Завершающее сообщение */}
        <AnimatePresence>
          {isComplete && (
            <motion.div 
              className="completion-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                animate={{ 
                  textShadow: [
                    '0 0 5px #00ff41',
                    '0 0 20px #00ff41, 0 0 30px #00ff41',
                    '0 0 5px #00ff41'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨ СИСТЕМА АКТИВИРОВАНА ✨
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoadingScreen; 