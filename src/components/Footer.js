import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaReact, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, threshold: 0.2 }}
      >
        <motion.div className="footer-content" variants={itemVariants}>
          <div className="footer-brand">
            <h3>Портфолио</h3>
            <p>Создано с <FaHeart className="heart-icon" /> и <FaReact className="react-icon" /></p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Навигация</h4>
              <ul>
                <li><a href="#hero">Главная</a></li>
                <li><a href="#about">О себе</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#contact">Контакты</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Социальные сети</h4>
              <div className="footer-social">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTelegram />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Контакты</h4>
              <ul>
                <li>your.email@example.com</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>&copy; {currentYear} Портфолио. Все права защищены.</p>
            <p className="footer-tech">Разработано на React с Framer Motion</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 