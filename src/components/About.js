import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="about" className="about" ref={ref}>
      <motion.div
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="about-header" variants={itemVariants}>
          <h2>О себе</h2>
          <p>Узнайте больше о моём пути в разработке</p>
        </motion.div>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <motion.p variants={itemVariants}>
              Привет! Я увлеченный пентестер с более чем года опыта анализа уязвимостей 
              современных и функциональных веб-приложений. Специализируюсь на проверке приложений на наличие уязвимостей
              и устранении их.
            </motion.p>
            
          </motion.div>

          <motion.div className="about-cards" variants={itemVariants}>
            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaCode className="card-icon" />
              <h3>Анализ уязвимостей</h3>
              <p>Анализирую код на наличие уязвимостей и устраняю их</p>
            </motion.div>

            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaRocket className="card-icon" />
              <h3>Производительность</h3>
              <p>Оптимизирую приложения для максимальной скорости работы</p>
            </motion.div>

            <motion.div
              className="about-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaLightbulb className="card-icon" />
              <h3>Инновации</h3>
              <p>Использую современные технологии и подходы в разработке</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 