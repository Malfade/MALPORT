import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="nav-container">
        <motion.div
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2>Портфолио</h2>
        </motion.div>

        <div className="nav-menu">
          <motion.a
            href="#hero"
            className="nav-link"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
          >
            Главная
          </motion.a>
          <motion.a
            href="#about"
            className="nav-link"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            О себе
          </motion.a>
          <motion.a
            href="#skills"
            className="nav-link"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('skills');
            }}
          >
            Навыки
          </motion.a>
          <motion.a
            href="#projects"
            className="nav-link"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            Проекты
          </motion.a>
          <motion.a
            href="#contact"
            className="nav-link"
            whileHover={{ y: -2 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Контакты
          </motion.a>
        </div>

        <motion.div
          className="nav-toggle"
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>
      </div>

      <motion.div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        variants={menuVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
      >
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
          Главная
        </a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          О себе
        </a>
        <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>
          Навыки
        </a>
        <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
          Проекты
        </a>
        <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
          Контакты
        </a>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 