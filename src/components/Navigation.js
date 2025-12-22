import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [securityLevel] = useState(5);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home', encrypted: 'H0M3' },
    { name: 'ABOUT', href: '#about', encrypted: '@B0UT' },
    { name: 'SKILLS', href: '#skills', encrypted: 'SK1LLS' },
    { name: 'PROJECTS', href: '#projects', encrypted: 'PR0J3CTS' },
    { name: 'ACHIEVEMENTS', href: '#achievements', encrypted: '@CH13V3M3NTS' },
    { name: 'CONTACT', href: '#contact', encrypted: 'C0NT@CT' }
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  return (
    <motion.nav
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <GlitchText text="NIKITA.SYS" intensity="low" trigger="hover" />
          <div className="logo-status">
            <span className="status-dot pulse-glow"></span>
            ONLINE
          </div>
        </div>

        {/* Navigation Items */}
        <ul className="nav-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="nav-item"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={item.href}
                className="nav-link"
                data-encrypted={item.encrypted}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Security Status */}
        <div className="nav-status">
          <div className="status-item">
            <span className="status-label">SEC:</span>
            <span className="status-value">LVL {securityLevel}</span>
          </div>
          <div className="status-divider"></div>
          <div className="status-item">
            <span className="status-label">CONN:</span>
            <span className="status-value status-secure">SECURE</span>
          </div>
          <div className="status-divider"></div>
          <div className="status-item time-display">
            <span className="status-label">TIME:</span>
            <span className="status-value">{formatTime(currentTime)}</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;
