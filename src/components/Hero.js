import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTelegram, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Устанавливаем размеры окна при первом рендере
    if (typeof window !== 'undefined') {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(102, 126, 234, 0.4)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: 0
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Привет! Я <span className="highlight">Пентестер</span>
          </motion.h1>
          
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Проверяю современные веб-приложения на наличие уязвимостей и устраняю их
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.button
              className="btn primary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => {
                const projectsElement = document.getElementById('projects');
                if (projectsElement) {
                  projectsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Мои проекты
            </motion.button>
            
            <motion.button
              className="btn secondary"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaDownload /> Скачать CV
            </motion.button>
          </motion.div>

          <motion.div className="hero-social" variants={itemVariants}>
            <motion.a
              href="https://github.com/Malfade"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/nikita-cybersecurity"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://t.me/MalfyRose"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <FaTelegram />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image" variants={itemVariants}>
          <motion.div
            className="image-container"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="image-placeholder">
              <motion.div
                className="code-animation"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                &lt;/&gt;
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => {
          const aboutElement = document.getElementById('about');
          if (aboutElement) {
            aboutElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 