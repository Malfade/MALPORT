import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import ScanLine from './components/ScanLine';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />;
  }

  return (
    <div className="App">
      <ScanLine speed={5} opacity={0.3} />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Malfade(Nikita) - Web Developer & Security Specialist. All rights reserved.</p>
          <p className="footer-tagline">Built with React & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
