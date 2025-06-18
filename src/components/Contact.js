import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Спасибо за сообщение! Я свяжусь с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="contact-header" variants={itemVariants}>
          <h2>Связаться со мной</h2>
          <p>Готов обсудить ваш проект или предложение о работе</p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <motion.div 
              className="contact-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaEnvelope className="contact-icon" />
              <h3>Email</h3>
              <p>your.email@example.com</p>
            </motion.div>

            <motion.div 
              className="contact-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaPhone className="contact-icon" />
              <h3>Телефон</h3>
              <p>+7 (999) 123-45-67</p>
            </motion.div>

            <motion.div 
              className="contact-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <FaMapMarkerAlt className="contact-icon" />
              <h3>Локация</h3>
              <p>Москва, Россия</p>
            </motion.div>

            <motion.div className="social-links" variants={itemVariants}>
              <h3>Социальные сети</h3>
              <div className="social-icons">
                <motion.a
                  href="https://t.me/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTelegram />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-form" variants={itemVariants}>
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="name">Имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                variants={itemVariants}
              >
                <label htmlFor="message">Сообщение</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact; 