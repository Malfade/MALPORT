import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaJs, FaNode } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Современная платформа электронной коммерции с корзиной покупок, системой платежей и административной панелью.",
      image: "/api/placeholder/400/250",
      technologies: [FaReact, FaNode, SiMongodb, SiTailwindcss],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Аналитическая панель для управления социальными сетями с графиками, статистикой и планировщиком постов.",
      image: "/api/placeholder/400/250",
      technologies: [FaReact, FaJs, SiFirebase, SiTailwindcss],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Приложение для управления задачами с drag & drop, уведомлениями и командной работой.",
      image: "/api/placeholder/400/250",
      technologies: [FaReact, FaNode, SiMongodb],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Weather App",
      description: "Красивое погодное приложение с анимациями, прогнозом на неделю и геолокацией.",
      image: "/api/placeholder/400/250",
      technologies: [FaReact, FaJs, SiTailwindcss],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <motion.div
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="projects-header"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
          }}
        >
          <h2>Проекты</h2>
          <p>Некоторые из моих последних работ</p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>Изображение проекта</span>
                </div>
                {project.featured && (
                  <div className="featured-badge">Рекомендуемый</div>
                )}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((Tech, index) => (
                    <Tech key={index} className="tech-icon" />
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> Код
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Демо
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="projects-cta"
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.8, delay: 0.4 } }
          }}
        >
          <p>Хотите увидеть больше проектов?</p>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub /> Посетить GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects; 