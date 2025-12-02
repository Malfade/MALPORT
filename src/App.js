import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [scrollY, setScrollY] = useState(0);

  // Профессиональная темная тема
  const theme = {
    bg: '#1a1a1a',
    primary: '#4a9eff',
    secondary: '#6c5ce7',
    text: '#ffffff',
    accent: '#b0b0b0'
  };

  useEffect(() => {
          const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); // Оптимальное время для UX

    return () => clearTimeout(timer);
  }, []);

  // Отслеживание скролла для анимаций
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Обработка формы
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('ОТПРАВКА...');
    
    // Симуляция отправки (заменить на реальный API)
    setTimeout(() => {
      setFormStatus('✅ СООБЩЕНИЕ ОТПРАВЛЕНО!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1000);
  };

  // Социальные сети с реальными ссылками
      const socialLinks = [
      { name: 'GitHub', url: 'https://github.com/Malfade', icon: 'GitHub' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/nikita-cybersecurity', icon: 'LinkedIn' },
      { name: 'Telegram', url: 'https://t.me/MalfyRose', icon: 'Telegram' }
    ];

  if (loading) {
    return <LoadingScreen />;
  }

  const skills = [
    { name: 'JavaScript', level: 90, color: '#4a9eff' },
    { name: 'React', level: 85, color: '#61dafb' },
    { name: 'Vue.js', level: 80, color: '#4fc08d' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Python', level: 80, color: '#3776ab' },
    { name: 'HTML/CSS', level: 95, color: '#e34c26' },
    { name: '3D Modeling', level: 75, color: '#ff6b35' },
    { name: 'Cybersecurity', level: 70, color: '#6c5ce7' },
    { name: 'Blender', level: 70, color: '#f5792a' },
    { name: 'Network Security', level: 65, color: '#8e44ad' },
    { name: 'Git/GitHub', level: 85, color: '#f05033' },
    { name: 'Project Management', level: 80, color: '#2c3e50' }
  ];

  const projects = [
    {
      title: "INFRAMAP",
      description: "ПОБЕДИТЕЛЬ хакатона по цифровизации государственного управления в КГТУ им. Разакова, Бишкек (27-29 мая 2024). Интерактивная веб-платформа для оптимизации размещения государственных учреждений (школы, больницы, пожарные станции) с использованием пространственного анализа и машинного обучения. Система решает задачи оптимизации инфраструктуры на основе анализа географических данных.",
      tech: ["React", "Django", "Python", "JavaScript", "OpenStreetMap"],
      role: "Fullstack разработка • Геопространственный анализ • UI/UX • Архитектура",
      achievement: "1-е место • 100,000 сом • КГТУ им. Разакова",
      github: "https://github.com/Num1s/infra-map"
    },
    {
      title: "JAPAN DIGITAL UNIVERSITY",
      description: "Разработка официального веб-сайта для Japan Digital University (JDU) - первого японского цифрового университета в Узбекистане. Университет создан в рамках сотрудничества между Узбекистаном и Японией для подготовки IT-специалистов по японским стандартам и трудоустройства в японских компаниях. Проект включает многоязычную поддержку, систему подачи документов и интеграцию с образовательными платформами.",
      tech: ["React", "Node.js", "MongoDB", "i18n", "Responsive Design"],
      role: "Frontend разработка • UI/UX дизайн • Многоязычная локализация",
      status: "В РАЗРАБОТКЕ",
      website: "https://jdu.uz"
    }
  ];

  return (
    <div className="App" style={{
      background: theme.bg,
      color: theme.text,
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif'
    }}>
      {/* Навигация */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        padding: '1.5rem 2rem',
        zIndex: 1000,
        borderBottom: `1px solid ${theme.primary}30`
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 style={{
            color: theme.primary,
            fontSize: '1.8rem',
            fontWeight: '700',
            letterSpacing: '0.1em'
          }}>
            &lt;DEV/&gt;
          </h2>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Главная', 'Профиль', 'Навыки', 'Проекты', 'Достижения', 'Контакты'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} style={{
                textDecoration: 'none',
                color: theme.text,
                fontWeight: '500',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                padding: '0.5rem 1rem',
                borderRadius: '8px'
              }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Футуристичная Hero секция */}
      <section id="главная" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
        display: 'flex',
        alignItems: 'center',
        color: theme.text,
        position: 'relative',
        overflow: 'hidden'
      }}>


        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '5rem',
          alignItems: 'center',
          width: '100%',
          zIndex: 3,
          position: 'relative'
        }}>
          <div>
            {/* Встроенная карточка как часть контента */}
            <div style={{
              background: 'rgba(30, 30, 30, 0.8)',
              border: `2px solid ${theme.secondary}40`,
              borderRadius: '15px',
              padding: '2rem',
              marginBottom: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Левая часть - текст */}
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '1rem',
                  color: theme.primary,
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  textShadow: '0 0 10px #00f5ff'
                }}>
                  SYSTEM ONLINE
                </div>
                <h2 style={{
                  fontSize: '2rem',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}>
                  NIKITA
                </h2>
                <h3 style={{
                  fontSize: '1rem',
                  color: '#00f5ff',
                  marginBottom: '0.5rem',
                  fontWeight: '600'
                }}>
                  CYBERSECURITY SPECIALIST
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  @MalfyRose
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.5rem',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    background: 'rgba(0, 245, 255, 0.1)',
                    color: '#00f5ff',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    border: '1px solid rgba(0, 245, 255, 0.3)'
                  }}>
                    3D Modeling
                  </span>
                  <span style={{
                    background: 'rgba(255, 0, 128, 0.1)',
                    color: '#ff0080',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    border: '1px solid rgba(255, 0, 128, 0.3)'
                  }}>
                    Web Dev
                  </span>
                  <span style={{
                    background: 'rgba(0, 255, 65, 0.1)',
                    color: '#00ff41',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.7rem',
                    border: '1px solid rgba(0, 255, 65, 0.3)'
                  }}>
                    Artrap Finalist
                  </span>
                </div>
              </div>
              
            </div>
            
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '2rem',
              opacity: 0.9,
              lineHeight: '1.6',
              color: theme.accent
            }}>
              Специализируюсь в кибербезопасности, 3D моделировании и веб-разработке. 
              Финалист Startup Nation Кыргызстана, организатор DevClub и проджект-менеджер
            </p>

            {/* AI Dev Studio Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 2rem',
              background: `${theme.primary}20`,
              border: `2px solid ${theme.primary}40`,
              borderRadius: '15px',
              marginBottom: '3rem',
              backdropFilter: 'blur(10px)',
              boxShadow: `0 0 20px ${theme.primary}20`
            }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: theme.primary,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: '#fff'
              }}>
                AI
              </div>
              <div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#00f5ff',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  CYBERSECURITY SPECIALIST
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#b0b0b0',
                  opacity: 0.8
                }}>
                 Project Manager & Developer & Analyst
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '3rem' }}>
              <button style={{
                padding: '1.2rem 2.5rem',
                background: theme.primary,
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: '"Orbitron", monospace'
              }}>
                ПРОЕКТЫ
              </button>
              
              <a 
                href="/cv.pdf" 
                download="Developer_CV.pdf"
                style={{
                  padding: '1.2rem 2.5rem',
                  background: 'transparent',
                  color: theme.primary,
                  border: `2px solid ${theme.primary}`,
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  display: 'inline-block'
                }}
              >
                СКАЧАТЬ CV
              </a>
            </div>

            {/* Социальные сети */}
            <div style={{ display: 'flex', gap: '2rem' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '50px',
                    height: '50px',
                    border: `2px solid ${theme.primary}`,
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: theme.primary,
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    textDecoration: 'none',
                    position: 'relative'
                  }}
                  title={social.name}
                >
                  {social.icon}
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.7rem',
                    opacity: 0.7,
                    whiteSpace: 'nowrap'
                  }}>
                    {social.name}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              width: '450px',
              height: '450px',
              background: 'rgba(74, 158, 255, 0.1)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `2px solid ${theme.primary}40`,
              position: 'relative',
              overflow: 'hidden',
              zIndex: 3
            }}>
              <img 
                src="/images/photo_2025-09-29_19-18-24.jpg" 
                alt="Developer Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.1) saturate(1.2)',
                  transition: 'all 0.3s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(45deg, rgba(0, 245, 255, 0.1), rgba(255, 0, 128, 0.1))',
                mixBlendMode: 'overlay'
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Профиль */}
      <section id="профиль" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: theme.primary,
              marginBottom: '1rem'
            }}>
              Профиль
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: theme.primary,
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start'
          }}>
            <div>
              {/* Фото профиля */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '3rem'
              }}>
                <div style={{
                  width: '200px',
                  height: '200px',
                  position: 'relative'
                }}>
                  
                  {/* Основной контейнер */}
                  <div style={{
                    width: '200px',
                    height: '200px',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    border: `2px solid ${theme.primary}`,
                    boxShadow: `0 0 20px ${theme.primary}40`,
                    position: 'relative'
                  }}>
                    <img 
                      src="/images/photo_2025-09-29_19-18-24.jpg" 
                      alt="Profile" 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.9) contrast(1.3) saturate(0.9) hue-rotate(5deg)'
                      }}
                    />
                    
                    {/* Киберпанк overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `
                        linear-gradient(45deg, rgba(0, 245, 255, 0.15) 0%, transparent 50%, rgba(255, 0, 128, 0.1) 100%)
                      `,
                      mixBlendMode: 'overlay'
                    }}></div>
                    
                  </div>
                  
                </div>
              </div>

              <div style={{
                background: `${theme.primary}10`,
                border: `1px solid ${theme.primary}30`,
                borderRadius: '15px',
                padding: '3rem',
                marginBottom: '2rem'
              }}>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  color: theme.accent,
                  marginBottom: '2rem'
                }}>
                  ИНИЦИАЛИЗАЦИЯ ПРОФИЛЯ... ✓<br/>
                  ЗАГРУЗКА AI-МОДУЛЕЙ... ✓<br/>
                  АКТИВАЦИЯ ХАКАТОН-РЕЖИМА... ✓
                </p>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: theme.text
                }}>
                  Я — специалист по кибербезопасности, 3D моделированию и веб-разработке. 
                  Активно развиваюсь в области информационной безопасности и создаю инновационные решения.
                  <br/><br/>
                  Финалист Artrap Nation Кыргызстана, организатор DevClub в колледже и проджект-менеджер 
                  по разработке интранета для колледжа. Учусь на ходу и не боюсь новых вызовов.
                </p>
                
                {/* Информация о профессиональной деятельности */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                  marginTop: '2rem'
                }}>
                  
                  {/* AI Dev Studio */}
                  <div style={{
                    background: `${theme.primary}15`,
                    border: `2px solid ${theme.primary}40`,
                    borderRadius: '15px',
                    padding: '2rem',
                    position: 'relative',
                    boxShadow: `0 10px 30px ${theme.primary}20`
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        background: 'linear-gradient(45deg, #00f5ff, #ff0080)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: '#000'
                      }}>
                        AI
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1.2rem',
                          color: '#00f5ff',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          textShadow: '0 0 10px #00f5ff'
                        }}>
                          AI Dev Studio
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#b0b0b0',
                          opacity: 0.8
                        }}>
                          Lead Developer & Designer • 2.5+ лет • 50+ проектов
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: theme.accent,
                      marginBottom: '1rem'
                    }}>
                      Работаю в инновационной веб-студии, которая создает сайты за 4-12 часов вместо месяцев. 
                      Используем нейросети для ускорения разработки и создаем премиум-качество.
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.8rem',
                      flexWrap: 'wrap',
                      fontSize: '0.8rem',
                      marginBottom: '1rem'
                    }}>
                      <span style={{ color: '#00f5ff', background: 'rgba(0, 245, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>⚡ 4-12 часов</span>
                      <span style={{ color: '#ff0080', background: 'rgba(255, 0, 128, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>🧠 ИИ-разработка</span>
                      <span style={{ color: '#00ff41', background: 'rgba(0, 255, 65, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>💎 Премиум</span>
                    </div>
                    
                    <a 
                      href="https://portfolio-ai-dev-team.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '0.8rem',
                        color: '#00f5ff',
                        textDecoration: 'none',
                        opacity: 0.8,
                        transition: 'opacity 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.opacity = '1'}
                      onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                    >
                      🌐 portfolio-ai-dev-team.netlify.app ↗
                    </a>
                  </div>

                  {/* Artrap Nation */}
                  <div style={{
                    background: `${theme.secondary}15`,
                    border: `2px solid ${theme.secondary}40`,
                    borderRadius: '15px',
                    padding: '2rem',
                    position: 'relative'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        background: 'linear-gradient(45deg, #ff0080, #ff6b35)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: '#fff'
                      }}>
                        ST
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1.2rem',
                          color: '#ff0080',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          textShadow: '0 0 10px #ff0080'
                        }}>
                          STARTUP NATION
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#b0b0b0',
                          opacity: 0.8
                        }}>
                          Финалист • Кыргызстан
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: theme.accent,
                      marginBottom: '1rem'
                    }}>
                      Прошел в финал Startup Nation Кыргызстана - крупнейшего музыкального конкурса в стране. 
                      Демонстрирую таланты не только в IT, но и в творческих направлениях.
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.8rem',
                      flexWrap: 'wrap',
                      fontSize: '0.8rem'
                    }}>
                      <span style={{ color: '#ff0080', background: 'rgba(255, 0, 128, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>🎤 Музыка</span>
                      <span style={{ color: '#ff6b35', background: 'rgba(255, 107, 53, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>🏆 Финалист</span>
                      <span style={{ color: '#8a2be2', background: 'rgba(138, 43, 226, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>🇰🇬 Кыргызстан</span>
                    </div>
                  </div>

                  {/* DevClub */}
                  <div style={{
                    background: '#4fc08d20',
                    border: '2px solid #4fc08d40',
                    borderRadius: '15px',
                    padding: '2rem',
                    position: 'relative'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '1.5rem'
                    }}>
                      <div style={{
                        width: '45px',
                        height: '45px',
                        background: 'linear-gradient(45deg, #00ff41, #00f5ff)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: '#000'
                      }}>
                        DC
                      </div>
                      <div>
                        <div style={{
                          fontSize: '1.2rem',
                          color: '#00ff41',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          textShadow: '0 0 10px #00ff41'
                        }}>
                          DEVCLUB
                        </div>
                        <div style={{
                          fontSize: '0.85rem',
                          color: '#b0b0b0',
                          opacity: 0.8
                        }}>
                          Организатор • Проджект-менеджер
                        </div>
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      color: theme.accent,
                      marginBottom: '1rem'
                    }}>
                      Организую клуб разработки DevClub в колледже и руковожу проектом по созданию интранета 
                      для колледжа. Развиваю IT-сообщество и управляю техническими проектами.
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '0.8rem',
                      flexWrap: 'wrap',
                      fontSize: '0.8rem'
                    }}>
                      <span style={{ color: '#00ff41', background: 'rgba(0, 255, 65, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>👥 Лидерство</span>
                      <span style={{ color: '#00f5ff', background: 'rgba(0, 245, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>🌐 Интранет</span>
                      <span style={{ color: '#8a2be2', background: 'rgba(138, 43, 226, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '12px' }}>📚 Образование</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { title: 'ПРАКТИК', desc: 'Быстро собираю работающие прототипы' },
                { title: 'САМОУЧКА', desc: 'Изучаю стек по мере надобности' },
                { title: 'ЭКСПЕРИМЕНТАТОР', desc: 'Люблю новые технологии, особенно AI' },
                { title: 'ИНЖЕНЕР ПО ДУХУ', desc: 'Важно, чтобы проект работал и решал проблему' },
                { title: 'ХАКАТОН-БОЕЦ', desc: 'В условиях ограничений чувствую себя как дома' }
              ].map((item, index) => (
                <div key={index} style={{
                  background: `${theme.secondary}10`,
                  border: `1px solid ${theme.secondary}30`,
                  borderRadius: '15px',
                  padding: '2.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}>
                  <h3 style={{ 
                    fontSize: '1.4rem', 
                    fontWeight: '700', 
                    color: theme.secondary, 
                    marginBottom: '1rem',
                    letterSpacing: '0.1em'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#b0b0b0', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Навыки */}
      <section id="навыки" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: theme.secondary,
              marginBottom: '1rem'
            }}>
              Навыки
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: theme.secondary,
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}>
            {skills.map((skill, index) => (
              <div key={index} style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: `2px solid ${skill.color}40`,
                borderRadius: '15px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.5rem'
                }}>
                  <span style={{
                    fontSize: '1.3rem',
                    fontWeight: '700',
                    color: skill.color,
                    textShadow: `0 0 10px ${skill.color}`,
                    letterSpacing: '0.1em'
                  }}>
                    {skill.name.toUpperCase()}
                  </span>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: `linear-gradient(45deg, ${skill.color}, ${skill.color}80)`,
                    padding: '0.3rem 0.8rem',
                    clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
                  }}>
                    {skill.level}%
                  </span>
                </div>
                
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${skill.color}30`,
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${skill.level}%`,
                    height: '100%',
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                    transition: 'width 2s ease-out',
                    boxShadow: `0 0 15px ${skill.color}`,
                    animation: 'pulse 2s ease-in-out infinite alternate'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Проекты */}
      <section id="проекты" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#4fc08d',
              marginBottom: '1rem'
            }}>
              Проекты
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: '#4fc08d',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem'
          }}>
            {projects.map((project, index) => (
              <div key={index} style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: `2px solid #4fc08d40`,
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  height: '250px',
                  background: `${theme.primary}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.primary,
                  fontSize: '4rem',
                  fontWeight: 'bold',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '1.2rem',
                    textAlign: 'center',
                    letterSpacing: '0.1em'
                  }}>
                    HOLOGRAM<br/>PREVIEW
                  </div>
                </div>

                <div style={{ padding: '2.5rem' }}>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: '700',
                    color: '#00ff41',
                    marginBottom: '1.5rem',
                    textShadow: '0 0 10px #00ff41',
                    letterSpacing: '0.1em'
                  }}>
                    {project.title}
                  </h3>
                  
                  <p style={{
                    color: '#b0b0b0',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}>
                    {project.description}
                  </p>

                  {project.achievement && (
                    <div style={{
                      background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))',
                      border: '2px solid rgba(255, 215, 0, 0.5)',
                      padding: '1rem 1.5rem',
                      marginBottom: '1.5rem',
                      clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                      boxShadow: '0 0 20px rgba(255, 215, 0, 0.2)'
                    }}>
                      <div style={{
                        color: '#FFD700',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.1em',
                        textShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
                      }}>
                        🏆 ДОСТИЖЕНИЕ:
                      </div>
                      <div style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {project.achievement}
                      </div>
                    </div>
                  )}

                  {project.status && (
                    <div style={{
                      background: 'linear-gradient(45deg, rgba(0, 255, 65, 0.1), rgba(0, 245, 255, 0.1))',
                      border: '2px solid rgba(0, 255, 65, 0.5)',
                      padding: '1rem 1.5rem',
                      marginBottom: '1.5rem',
                      clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.2)'
                    }}>
                      <div style={{
                        color: '#00ff41',
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        letterSpacing: '0.1em',
                        textShadow: '0 0 10px rgba(0, 255, 65, 0.5)'
                      }}>
                        📊 СТАТУС:
                      </div>
                      <div style={{
                        color: '#ffffff',
                        fontSize: '1rem',
                        fontWeight: '600'
                      }}>
                        {project.status}
                      </div>
                    </div>
                  )}

                  {project.role && (
                    <div style={{
                      background: 'rgba(255, 0, 128, 0.1)',
                      border: '1px solid rgba(255, 0, 128, 0.3)',
                      padding: '0.8rem 1.2rem',
                      marginBottom: '1.5rem',
                      clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
                    }}>
                      <div style={{
                        color: '#ff0080',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        marginBottom: '0.3rem',
                        letterSpacing: '0.1em'
                      }}>
                        МОЯ РОЛЬ:
                      </div>
                      <div style={{
                        color: '#ffffff',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {project.role}
                      </div>
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    gap: '0.8rem',
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(0, 245, 255, 0.1)',
                        color: '#00f5ff',
                        border: '1px solid rgba(0, 245, 255, 0.3)',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {project.github && (
                      <button 
                        onClick={() => window.open(project.github, '_blank')}
                        style={{
                          padding: '1rem 2rem',
                          border: `2px solid ${theme.primary}`,
                          color: theme.primary,
                          background: 'transparent',
                          borderRadius: '8px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontFamily: 'inherit',
                          letterSpacing: '0.1em'
                        }}
                      >
                        GITHUB
                      </button>
                    )}
                    
                    {project.website && (
                      <button 
                        onClick={() => window.open(project.website, '_blank')}
                        style={{
                          padding: '1rem 2rem',
                          background: theme.primary,
                          color: '#fff',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          fontFamily: 'inherit',
                          letterSpacing: '0.1em'
                        }}
                      >
                        САЙТ
                      </button>
                    )}
                    
                    {!project.website && !project.github && (
                      <button style={{
                        padding: '1rem 2rem',
                        background: 'rgba(100, 100, 100, 0.3)',
                        color: '#666',
                        border: '2px solid rgba(100, 100, 100, 0.3)',
                        borderRadius: '8px',
                        fontWeight: '700',
                        cursor: 'not-allowed',
                        fontFamily: 'inherit',
                        letterSpacing: '0.1em'
                      }}
                      disabled
                    >
                      В РАЗРАБОТКЕ
                    </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
              </section>

      {/* Достижения */}
      <section style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: '#FFD700',
              marginBottom: '1rem'
            }}>
              Достижения
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: '#FFD700',
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{
                background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.1))',
                border: '2px solid rgba(255, 215, 0, 0.3)',
                padding: '3rem',
                clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                boxShadow: '0 0 30px rgba(255, 215, 0, 0.2)'
              }}>
                <h3 style={{
                  fontSize: '2.2rem',
                  color: '#FFD700',
                  marginBottom: '2rem',
                  textShadow: '0 0 15px #FFD700',
                  letterSpacing: '0.1em',
                  fontWeight: '700'
                }}>
                  ПОБЕДА НА ХАКАТОНЕ
                </h3>
                
                <div style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  padding: '2rem',
                  marginBottom: '2rem',
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  border: '1px solid rgba(255, 215, 0, 0.2)'
                }}>
                  <div style={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem' }}>
                    КГТУ им. И. Разакова, Бишкек
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.5rem' }}>
                    27-29 мая 2025
                  </div>
                  <div style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.5rem' }}>
                    Хакатон по цифровизации государственного управления
                  </div>
                  <div style={{ color: '#00ff41', fontSize: '1.2rem', fontWeight: '700', marginTop: '1rem' }}>
                    Призовой фонд: 100,000 сом
                  </div>
                </div>

                <p style={{
                  color: '#b0b0b0',
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  Наша команда заняла <strong style={{color: '#FFD700'}}>1-е место</strong> среди всех участников, 
                  разработав комплексную систему <strong style={{color: '#00f5ff'}}>InfraMap</strong> для оптимизации размещения государственных учреждений 
                  с использованием геопространственного анализа и машинного обучения.
                </p>

                <div style={{
                  background: 'rgba(0, 245, 255, 0.1)',
                  border: '1px solid rgba(0, 245, 255, 0.3)',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                }}>
                  <h4 style={{
                    color: '#00f5ff',
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    Ключевые особенности InfraMap:
                  </h4>
                  <ul style={{
                    color: '#ffffff',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    paddingLeft: '1.5rem'
                  }}>
                    <li>Интерактивная карта с многослойной визуализацией</li>
                    <li>Алгоритмы оптимизации размещения школ, больниц, пожарных станций</li>
                    <li>Анализ зон покрытия и недостаточного обслуживания</li>
                    <li>Интеграция с OpenStreetMap для города Бишкек</li>
                    <li>Fullstack решение на React + Django</li>
                  </ul>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {['Geospatial Analysis', 'Fullstack Development', 'Machine Learning', 'Data Visualization', 'Team Leadership'].map((skill, index) => (
                    <span key={index} style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 215, 0, 0.1)',
                      color: '#FFD700',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      clipPath: 'polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)'
                    }}>
                      {skill}
                                         </span>
                   ))}
                 </div>

                 <div style={{ marginTop: '2rem' }}>
                   <button 
                     onClick={() => window.open('https://github.com/Num1s/infra-map', '_blank')}
                     style={{
                       padding: '1.2rem 2.5rem',
                       background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                       color: '#000',
                       border: 'none',
                       fontSize: '1rem',
                       fontWeight: '700',
                       cursor: 'pointer',
                       fontFamily: 'inherit',
                       letterSpacing: '0.1em',
                       textTransform: 'uppercase',
                       clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)',
                       transition: 'all 0.3s ease',
                       boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                     }}
                   >
                     ПОСМОТРЕТЬ НА GITHUB
                   </button>
                 </div>
               </div>
             </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '500px',
                position: 'relative'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
                  clipPath: 'polygon(30px 0%, 100% 0%, calc(100% - 30px) 100%, 0% 100%)',
                  padding: '1.5rem',
                  border: '2px solid rgba(255, 215, 0, 0.3)',
                  boxShadow: '0 0 40px rgba(255, 215, 0, 0.2), inset 0 0 20px rgba(0, 245, 255, 0.1)',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Анимированная сетка на заднем плане */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `
                      linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px',
                    opacity: 0.3,
                    animation: 'gridMove 10s linear infinite'
                  }}></div>

                  {/* Неоновые углы */}
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    width: '30px',
                    height: '30px',
                    border: '2px solid #FFD700',
                    borderRight: 'none',
                    borderBottom: 'none',
                    boxShadow: '0 0 10px #FFD700'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    border: '2px solid #FFD700',
                    borderLeft: 'none',
                    borderBottom: 'none',
                    boxShadow: '0 0 10px #FFD700'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    width: '30px',
                    height: '30px',
                    border: '2px solid #FFD700',
                    borderRight: 'none',
                    borderTop: 'none',
                    boxShadow: '0 0 10px #FFD700'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    border: '2px solid #FFD700',
                    borderLeft: 'none',
                    borderTop: 'none',
                    boxShadow: '0 0 10px #FFD700'
                  }}></div>

                  <div style={{
                    position: 'relative',
                    clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 245, 255, 0.3)'
                  }}>
                    <img 
                      src="/images/hackathon-victory.jpg" 
                      alt="Победа на хакатоне КГТУ им. Разакова" 
                      style={{
                        width: '100%',
                        height: 'auto',
                        filter: 'brightness(0.8) contrast(1.3) saturate(0.8) hue-rotate(10deg)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    {/* Киберпанк overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `
                        linear-gradient(45deg, rgba(0, 245, 255, 0.15) 0%, transparent 50%, rgba(255, 215, 0, 0.1) 100%),
                        linear-gradient(135deg, rgba(255, 0, 128, 0.1) 0%, transparent 50%)
                      `,
                      mixBlendMode: 'overlay'
                    }}></div>
                    
                    {/* Сканирующие линии */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `
                        repeating-linear-gradient(
                          0deg,
                          transparent,
                          transparent 2px,
                          rgba(0, 245, 255, 0.1) 2px,
                          rgba(0, 245, 255, 0.1) 4px
                        )
                      `,
                      animation: 'scanlines 3s linear infinite'
                    }}></div>
                  </div>

                  {/* Футуристичная информационная панель */}
                  <div style={{
                    position: 'absolute',
                    bottom: '1.5rem',
                    left: '1.5rem',
                    right: '1.5rem',
                    background: 'rgba(0, 0, 0, 0.9)',
                    padding: '1rem',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                    border: '1px solid rgba(255, 215, 0, 0.5)',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.3)'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <div style={{
                        color: '#FFD700',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        textShadow: '0 0 10px #FFD700'
                      }}>
                        STATUS: VICTORY ACHIEVED
                      </div>
                      <div style={{
                        color: '#00ff41',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>
                        ●REC
                      </div>
                    </div>
                    <div style={{
                      color: '#00f5ff',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      textAlign: 'center',
                      marginBottom: '0.3rem',
                      textShadow: '0 0 5px #00f5ff'
                    }}>
                      🏆 TEAM INFRAMAP
                    </div>
                    <div style={{
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      textAlign: 'center',
                      opacity: 0.9
                    }}>
                      КГТУ ИМ. И. РАЗАКОВА • БИШКЕК • 2024
                    </div>
                  </div>

                  {/* Голографический эффект */}
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10px',
                    width: '3px',
                    height: '60%',
                    background: 'linear-gradient(to bottom, transparent, #00f5ff, transparent)',
                    boxShadow: '0 0 10px #00f5ff',
                    animation: 'hologramScan 4s ease-in-out infinite'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакт" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '700',
              color: theme.secondary,
              marginBottom: '1rem'
            }}>
              Контакты
            </h2>
            <div style={{
              width: '100px',
              height: '3px',
              background: theme.secondary,
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start'
          }}>
            <div>
              <div style={{
                background: 'rgba(255, 0, 128, 0.05)',
                border: '2px solid rgba(255, 0, 128, 0.2)',
                padding: '3rem',
                clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)',
                marginBottom: '3rem'
              }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  color: '#ff0080',
                  marginBottom: '2rem',
                  textShadow: '0 0 10px #ff0080',
                  letterSpacing: '0.1em'
                }}>
                  ИНИЦИИРОВАТЬ КОНТАКТ
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  color: '#b0b0b0',
                  lineHeight: '1.6',
                  marginBottom: '2rem'
                }}>
                  Готов к сотрудничеству в создании цифрового будущего. 
                  Передайте сигнал через любой из каналов связи.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[
                    { icon: 'EMAIL', label: 'EMAIL', value: 'nikita.cybersecurity@dev.com' },
                    { icon: 'TELEGRAM', label: 'TELEGRAM', value: '@MalfyRose' },
                    { icon: 'PHONE', label: 'PHONE', value: '+996 (XXX) XXX-XXX' }
                  ].map((contact, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1rem',
                      background: 'rgba(0, 245, 255, 0.05)',
                      border: '1px solid rgba(0, 245, 255, 0.2)',
                      clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                    }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#00f5ff' }}>{contact.icon}</span>
                      <div>
                        <div style={{ 
                          color: '#00f5ff', 
                          fontSize: '0.9rem', 
                          fontWeight: '600',
                          letterSpacing: '0.1em'
                        }}>
                          {contact.label}
                        </div>
                        <div style={{ color: '#ffffff', fontSize: '1rem' }}>
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(0, 245, 255, 0.05)',
              border: '2px solid rgba(0, 245, 255, 0.2)',
              padding: '3rem',
              clipPath: 'polygon(20px 0%, 100% 0%, calc(100% - 20px) 100%, 0% 100%)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#00f5ff',
                marginBottom: '2rem',
                textShadow: '0 0 10px #00f5ff',
                letterSpacing: '0.1em'
              }}>
                ОТПРАВИТЬ СООБЩЕНИЕ
              </h3>
              
              {formStatus && (
                <div style={{
                  padding: '1rem',
                  marginBottom: '2rem',
                  background: formStatus.includes('✅') ? 'rgba(0, 255, 0, 0.1)' : 'rgba(0, 245, 255, 0.1)',
                  border: '1px solid rgba(0, 245, 255, 0.3)',
                  color: '#00f5ff',
                  textAlign: 'center',
                  fontFamily: 'inherit',
                  letterSpacing: '0.1em',
                  clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                }}>
                  {formStatus}
                </div>
              )}
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="ИМЯ ПОЛЬЗОВАТЕЛЯ"
                  required
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(0, 245, 255, 0.3)',
                    color: '#ffffff',
                    padding: '1rem',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    letterSpacing: '0.05em',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="EMAIL АДРЕС"
                  required
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(0, 245, 255, 0.3)',
                    color: '#ffffff',
                    padding: '1rem',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    letterSpacing: '0.05em',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                  }}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="СООБЩЕНИЕ..."
                  rows="6"
                  required
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid rgba(0, 245, 255, 0.3)',
                    color: '#ffffff',
                    padding: '1rem',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    letterSpacing: '0.05em',
                    resize: 'vertical',
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)'
                  }}
                ></textarea>
                
                <button
                  type="submit"
                  disabled={formStatus === 'ОТПРАВКА...'}
                  style={{
                    padding: '1.2rem 2rem',
                    background: formStatus === 'ОТПРАВКА...' ? 'rgba(100, 100, 100, 0.5)' : 'linear-gradient(45deg, #00f5ff, #ff0080)',
                    color: formStatus === 'ОТПРАВКА...' ? '#666' : '#000',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '700',
                    cursor: formStatus === 'ОТПРАВКА...' ? 'not-allowed' : 'pointer',
                    fontFamily: 'inherit',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    clipPath: 'polygon(15px 0%, 100% 0%, calc(100% - 15px) 100%, 0% 100%)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {formStatus === 'ОТПРАВКА...' ? 'ОТПРАВКА...' : 'ПЕРЕДАТЬ СИГНАЛ'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer style={{
        padding: '3rem 0',
        background: 'linear-gradient(135deg, #16213e 0%, #0a0a0a 100%)',
        borderTop: '2px solid rgba(0, 245, 255, 0.2)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            fontSize: '1.5rem',
            color: '#00f5ff',
            marginBottom: '1rem',
            textShadow: '0 0 10px #00f5ff',
            letterSpacing: '0.1em'
          }}>
            &lt;DEV/&gt;
          </div>
          <p style={{
            color: '#b0b0b0',
            fontSize: '0.9rem',
            letterSpacing: '0.1em'
          }}>
            © 2024 CYBER DEVELOPER. ALL RIGHTS RESERVED.
          </p>
          <p style={{
            color: '#666',
            fontSize: '0.8rem',
            marginTop: '0.5rem'
          }}>
            POWERED BY QUANTUM TECHNOLOGY
          </p>
        </div>
      </footer>

      {/* Профессиональные CSS стили */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
         /* Hover эффекты */
         button:hover {
           transform: translateY(-2px);
           opacity: 0.9;
         }
         
         nav a:hover {
           background: rgba(74, 158, 255, 0.1) !important;
           color: #4a9eff !important;
         }
         
         div[style*="cursor: pointer"]:hover {
           transform: translateY(-4px);
           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
         }
         
         /* Эффекты для фото */
         img:hover {
           filter: brightness(1.1) contrast(1.1) !important;
           transform: scale(1.02);
         }
        
        /* Улучшенная адаптивность */
        @media (max-width: 1024px) {
          nav > div > div {
            gap: 1.5rem !important;
          }
          
          nav a {
            font-size: 0.8rem !important;
            padding: 0.4rem 0.8rem !important;
          }
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem !important;
          }
          
          nav > div > div {
            display: none !important;
          }
          
          section > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          
          h1 {
            font-size: 2.5rem !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
          
          div[style*="450px"] {
            width: 280px !important;
            height: 280px !important;
          }
          
          .App {
            overflow-x: hidden;
          }
          
          /* Мобильные кнопки */
          button, a[style*="padding"] {
            padding: 1rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
          
          /* Мобильная форма */
          form {
            padding: 2rem !important;
          }
          
          /* Мобильные навыки */
          div[style*="grid-template-columns: repeat(3"] {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          
          /* Мобильные проекты */
          div[style*="display: grid"][style*="gap: 3rem"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .container, section > div {
            padding: 0 1rem !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          div[style*="450px"] {
            width: 250px !important;
            height: 250px !important;
          }
          
          /* Очень маленькие экраны */
          nav h2 {
            font-size: 1.4rem !important;
          }
        }
        
        /* Скролл */
        html {
          scroll-behavior: smooth;
        }
        
        /* Кастомный скроллбар */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4a9eff;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #6c5ce7;
        }
      `}</style>

      {/* Индикатор прокрутки */}
      <div className="scroll-indicator">
        <div 
          className="scroll-progress" 
          style={{ 
            transform: `scaleX(${scrollY / (document.documentElement.scrollHeight - window.innerHeight) || 0})` 
          }}
        />
      </div>
    </div>
  );
}

export default App; 