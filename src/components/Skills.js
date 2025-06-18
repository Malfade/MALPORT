import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNode, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  const skills = [
    { name: 'React', level: 90, icon: FaReact, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, icon: FaJs, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, icon: SiTypescript, color: '#3178C6' },
    { name: 'HTML5', level: 95, icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS3', level: 90, icon: FaCss3Alt, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Node.js', level: 75, icon: FaNode, color: '#339933' },
    { name: 'MongoDB', level: 70, icon: SiMongodb, color: '#47A248' },
    { name: 'Firebase', level: 75, icon: SiFirebase, color: '#FFCA28' },
    { name: 'Git', level: 85, icon: FaGitAlt, color: '#F05032' }
  ];

  return (
    <section id="skills" className="skills" ref={ref}>
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="skills-header" variants={itemVariants}>
          <h2>Навыки</h2>
          <p>Технологии, которыми я владею</p>
        </motion.div>

        <motion.div className="skills-grid" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="skill-header">
                <div className="skill-info">
                  <skill.icon 
                    className="skill-icon" 
                    style={{ color: skill.color }}
                  />
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-level">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  variants={progressVariants}
                  custom={skill.level}
                  style={{ 
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)` 
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="skills-summary" variants={itemVariants}>
          <div className="summary-card">
            <h3>Frontend</h3>
            <p>Современные фреймворки и библиотеки для создания интерактивных пользовательских интерфейсов</p>
          </div>
          <div className="summary-card">
            <h3>Backend</h3>
            <p>Серверные технологии для создания надежных и масштабируемых API</p>
          </div>
          <div className="summary-card">
            <h3>Инструменты</h3>
            <p>Современные инструменты разработки для эффективной работы в команде</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills; 