import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { FaGithub, FaLinkedin, FaCode, FaRobot, FaPaintBrush, FaLaptopCode } from "react-icons/fa";

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);
  
  const typingTexts = [
    "AI/ML Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "Creative Thinker"
  ];

  // Typing effect
  useEffect(() => {
    if (activeSection !== 'home') return;
    
    const currentText = typingTexts[currentIndex];
    if (typedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.substring(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, currentIndex, activeSection]);

  // Movie-like spotlight effect on cursor move
  useEffect(() => {
    const handleMouseMove = (e) => {
      const spotlight = document.querySelector('.spotlight');
      if (spotlight) {
        spotlight.style.left = `${e.clientX}px`;
        spotlight.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Smooth scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sections data
  const sections = [
    { id: 'home', title: 'HOME' },
    { id: 'about', title: 'ABOUT' },
    { id: 'projects', title: 'PROJECTS' },
    { id: 'skills', title: 'SKILLS' },
    { id: 'contact', title: 'CONTACT' }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Hostel Management System',
      role: 'Frontend Developer',
      description: 'A comprehensive hostel management platform with real-time booking, room allocation, and administrative features.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      rating: '★★★★★',
      year: '2025',
      liveLink: '#',
      githubLink: 'https://github.com/AllenSunilMathew'
    },
    {
      id: 2,
      title: 'Skin Cancer Detection System',
      role: 'AI/ML Engineer & Full Stack Developer',
      description: 'AI-powered skin cancer detection with CNN models, real-time analysis, and personalized medication recommendations.',
      tags: ['React', 'Python', 'TensorFlow', 'OpenCV', 'scikit-learn', 'Node.js'],
      rating: '★★★★☆',
      year: '2024',
      liveLink: '#',
      githubLink: 'https://github.com/AllenSunilMathew'
    },
    {
      id: 3,
      title: 'Hospital Management System',
      role: 'Full Stack Developer',
      description: 'Complete hospital management solution with patient records, appointment scheduling, lab booking, and billing system.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      rating: '★★★★★',
      year: '2025',
      liveLink: '#',
      githubLink: 'https://github.com/AllenSunilMathew'
    },
  ];

  // Skills data with simpler icon representation
  const skills = [
    { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
    { name: 'Node.js', level: 88, category: 'Backend', icon: '🟢' },
    { name: 'JavaScript', level: 90, category: 'Full Stack', icon: '📜' },
    { name: 'MongoDB', level: 80, category: 'Database', icon: '🍃' },
    { name: 'Express', level: 75, category: 'Backend', icon: '🚀' },
    { name: 'TypeScript', level: 85, category: 'Frontend', icon: '📘' },
    { name: 'TensorFlow', level: 70, category: 'AI/ML', icon: '🧠' },
    { name: 'OpenCV', level: 65, category: 'AI/ML', icon: '👁️' },
    { name: 'Figma', level: 92, category: 'Design', icon: '🎨' },
    { name: 'Python', level: 85, category: 'AI/ML', icon: '🐍' },
    { name: 'Redux', level: 90, category: 'Frontend', icon: '🔄' },
    { name: 'scikit-learn', level: 70, category: 'AI/ML', icon: '🤖' },
  ];

  // Stats data
  const stats = [
    { value: '3+', label: 'Projects Completed', icon: '🚀' },
    { value: '100%', label: 'Client Satisfaction', icon: '😊' },
    { value: '6mos+', label: 'Internship Exp', icon: '💼' },
    { value: '∞', label: 'Learning Capacity', icon: '🧠' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="hollywood-portfolio">
      {/* Animated background */}
      <div className="cinema-background">
        <div className="film-grain"></div>
        <div className="light-rays"></div>
        <div className="floating-particles">
          {[...Array(25)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>
        <div className="grid-overlay"></div>
      </div>

      {/* Hollywood-style spotlight */}
      <div className={`spotlight ${showSpotlight ? 'active' : ''}`}></div>

      {/* Header with navigation */}
      <header className="portfolio-header">
        <div className="header-content">
          <div className="logo" onClick={() => scrollToSection('home')}>
            <span className="logo-text">ASM</span>
            <div className="logo-subtitle">AI/ML & Full Stack Developer</div>
            <div className="logo-glow"></div>
          </div>
          
          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {sections.map(section => (
                <li key={section.id} className="nav-item">
                  <button
                    className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    <span className="nav-number">0{sections.findIndex(s => s.id === section.id) + 1}</span>
                    <span className="nav-text">{section.title}</span>
                    <span className="nav-underline"></span>
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mobile-social">
              <a href="https://github.com/AllenSunilMathew" target="_blank" rel="noreferrer" className="mobile-social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/allen-sunil-mathew" target="_blank" rel="noreferrer" className="mobile-social-link">
                <FaLinkedin />
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="portfolio-content">
        {/* Home/Hero Section */}
        <section id="home" className="section hero-section">
          <div className="hero-content">
            <div className="hero-intro">
              <div className="premiere-badge">
                <span className="badge-text">WELCOME TO MY PORTFOLIO</span>
                <div className="badge-glow"></div>
              </div>
              
              <div className="hero-titles">
                <h1 className="hero-title">
                  <span className="title-line">HEY, I'M</span>
                  <span className="title-line highlight">
                    ALLEN<span className="title-accent-glow"> SUNIL MATHEW</span>
                  </span>
                </h1>
                
                <div className="typing-container">
                  <div className="typing-text">
                    <span className="typing-cursor">|</span>
                    {typedText}
                  </div>
                  <div className="typing-subtitle">
                    Transforming ideas into intelligent digital solutions
                  </div>
                </div>
              </div>
              
              <div className="hero-description">
                <p>
                  Passionate <span className="highlight-text">AI/ML Engineer</span> and{' '}
                  <span className="highlight-text">Full Stack Developer</span> specializing in creating 
                  intelligent web applications with cutting-edge technologies. Currently enhancing 
                  my skills through OJT at Inker Robotics.
                </p>
              </div>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div className="hero-stat" key={index}>
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="hero-actions">
                <button 
                  className="btn btn-primary"
                  onClick={() => scrollToSection('projects')}
                >
                  <span className="btn-icon">🎬</span>
                  VIEW PROJECTS
                  <span className="btn-glow"></span>
                </button>
                <button 
                  className="btn btn-secondary"
                  onClick={() => scrollToSection('contact')}
                >
                  <span className="btn-icon">📞</span>
                  GET IN TOUCH
                </button>
                <div className="hero-social">
                  <a href="https://github.com/AllenSunilMathew" target="_blank" rel="noreferrer" className="social-icon">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/allen-sunil-mathew" target="_blank" rel="noreferrer" className="social-icon">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hero-visual">
              <div className="code-matrix">
                {[...Array(50)].map((_, i) => (
                  <div key={i} className="code-digit">{Math.random() > 0.5 ? '1' : '0'}</div>
                ))}
              </div>
              <div className="hero-image-container">
                <div className="image-frame">
                  <div className="image-glow"></div>
                  <div className="main-image">
                    <div className="image-content">
                      <div className="tech-stack">
                        <div className="tech-icon react">⚛️</div>
                        <div className="tech-icon tensorflow">🧠</div>
                        <div className="tech-icon node">🟢</div>
                        <div className="tech-icon mongo">🍃</div>
                      </div>
                    </div>
                  </div>
                  <div className="image-badge">
                    <span className="badge-text">ACTIVE DEVELOPER</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <div className="scroll-text">EXPLORE MY WORK</div>
            <div className="scroll-line">
              <div className="scroll-dot"></div>
            </div>
          </div>
          
          <div className="hero-background-elements">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="section-header">
            <div className="section-label">
              <span className="label-number">01</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              ABOUT <span className="title-accent">ME</span>
            </h2>
            <div className="section-subtitle">The Developer Behind The Code</div>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="about-intro">
                <h3 className="about-name">ALLEN SUNIL MATHEW</h3>
                <div className="about-tagline">
                  Building <span className="highlight">digital experiences</span> that blend{' '}
                  <span className="highlight">intelligence</span> with{' '}
                  <span className="highlight">elegance</span>
                </div>
              </div>
              
              <div className="about-description">
                <p>
                  I'm a passionate developer with 6 months of internship experience and currently 
                  undergoing On-the-Job Training at Inker Robotics. My journey in tech is driven by 
                  curiosity and a desire to create solutions that make a difference.
                </p>
                <p>
                  I specialize in the <strong>MERN stack</strong> and <strong>AI/ML technologies</strong>, 
                  combining robust backend systems with intuitive frontends and intelligent features. 
                  Every project is an opportunity to learn, innovate, and deliver excellence.
                </p>
              </div>
              
              <div className="about-highlights">
                <div className="highlight-card">
                  <div className="highlight-icon">🎯</div>
                  <h4>Mission Driven</h4>
                  <p>Creating solutions that solve real-world problems</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">🚀</div>
                  <h4>Fast Learner</h4>
                  <p>Quickly adapt to new technologies and frameworks</p>
                </div>
                <div className="highlight-card">
                  <div className="highlight-icon">💡</div>
                  <h4>Innovative Mindset</h4>
                  <p>Always exploring creative approaches to challenges</p>
                </div>
              </div>
            </div>
            
            <div className="about-image">
              <div className="experience-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2025</div>
                  <div className="timeline-content">
                    <h4>Full Stack Development</h4>
                    <p>Hospital & Hostel Management Systems</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h4>AI/ML Engineering</h4>
                    <p>Skin Cancer Detection System</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">Present</div>
                  <div className="timeline-content">
                    <h4>OJT at Inker Robotics</h4>
                    <p>Enhancing skills in real-world projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="section-header">
            <div className="section-label">
              <span className="label-number">02</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              FEATURED <span className="title-accent">PROJECTS</span>
            </h2>
            <div className="section-subtitle">Innovative Solutions That Make An Impact</div>
          </div>
          
          <div className="projects-grid">
            {projects.map(project => (
              <div className="project-card" key={project.id}>
                <div className="project-card-inner">
                  <div className="project-header">
                    <div className="project-year">{project.year}</div>
                    <div className="project-rating">{project.rating}</div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-role">
                      <span className="role-icon">🎭</span>
                      {project.role}
                    </div>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-tags">
                      {project.tags.map((tag, index) => (
                        <span className="project-tag" key={index}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-footer">
                    <div className="project-links">
                      <a href={project.liveLink} className="project-link" target="_blank" rel="noreferrer">
                        <span className="link-icon">🌐</span>
                        Live Demo
                      </a>
                      <a href={project.githubLink} className="project-link" target="_blank" rel="noreferrer">
                        <span className="link-icon">💻</span>
                        View Code
                      </a>
                    </div>
                  </div>
                  
                  <div className="project-glow"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="section-header">
            <div className="section-label">
              <span className="label-number">03</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              TECHNICAL <span className="title-accent">SKILLS</span>
            </h2>
            <div className="section-subtitle">Technologies I Work With</div>
          </div>
          
          <div className="skills-container">
            <div className="skills-categories">
              <div className="category-card">
                <h3 className="category-title">
                  <span className="category-icon">🤖</span>
                  AI/ML
                </h3>
                <div className="category-skills">
                  {skills.filter(skill => skill.category === 'AI/ML').map(skill => (
                    <div className="skill-chip" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="category-card">
                <h3 className="category-title">
                  <span className="category-icon">💻</span>
                  Full Stack
                </h3>
                <div className="category-skills">
                  {skills.filter(skill => skill.category.includes('Stack') || skill.category === 'Frontend' || skill.category === 'Backend').map(skill => (
                    <div className="skill-chip" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="category-card">
                <h3 className="category-title">
                  <span className="category-icon">🎨</span>
                  Design & Tools
                </h3>
                <div className="category-skills">
                  {skills.filter(skill => skill.category === 'Design' || skill.category === 'Database').map(skill => (
                    <div className="skill-chip" key={skill.name}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="skills-progress">
              {skills.map(skill => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-header">
                    <div className="skill-info">
                      <span className="skill-icon-emoji">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-category">{skill.category}</span>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    >
                      <div className="progress-glow"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="section-header">
            <div className="section-label">
              <span className="label-number">04</span>
              <span className="label-line"></span>
            </div>
            <h2 className="section-title">
              GET IN <span className="title-accent">TOUCH</span>
            </h2>
            <div className="section-subtitle">Let's Build Something Amazing Together</div>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-card-header">
                  <div className="contact-card-title">CONTACT INFO</div>
                  <div className="contact-card-subtitle">Always Available For Opportunities</div>
                </div>
                
                <div className="contact-details">
                  <div className="contact-detail">
                    <div className="detail-icon">📧</div>
                    <div className="detail-content">
                      <div className="detail-label">EMAIL</div>
                      <div className="detail-value">allensunilmathew@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="detail-icon">📱</div>
                    <div className="detail-content">
                      <div className="detail-label">PHONE</div>
                      <div className="detail-value">+91 7907328522</div>
                    </div>
                  </div>
                  
                  <div className="contact-detail">
                    <div className="detail-icon">📍</div>
                    <div className="detail-content">
                      <div className="detail-label">LOCATION</div>
                      <div className="detail-value">Kollam, Kerala, India</div>
                    </div>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="https://github.com/AllenSunilMathew" target="_blank" rel="noreferrer" className="social-link">
                    <FaGithub />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/allen-sunil-mathew" target="_blank" rel="noreferrer" className="social-link">
                    <FaLinkedin />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <form className="hollywood-form">
                <div className="form-group">
                  <input type="text" placeholder="YOUR NAME" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="EMAIL ADDRESS" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <input type="text" placeholder="SUBJECT" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <textarea placeholder="YOUR MESSAGE" className="form-textarea" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary submit-btn">
                  SEND MESSAGE
                  <span className="btn-icon">✈️</span>
                </button>
              </form>
            </div>
          </div>
          
          <div className="blockbuster-footer">
            <div className="footer-text">BUILT WITH REACT & PASSION</div>
            <div className="footer-copyright">© 2025 ALLEN SUNIL MATHEW. ALL RIGHTS RESERVED.</div>
          </div>
        </section>
      </main>

      {/* Interactive spotlight toggle */}
      <button
        className="spotlight-toggle"
        onClick={() => setShowSpotlight(!showSpotlight)}
        aria-label="Toggle spotlight"
      >
        <span className="toggle-text">{showSpotlight ? 'SPOTLIGHT ON' : 'SPOTLIGHT OFF'}</span>
        <div className={`toggle-indicator ${showSpotlight ? 'active' : ''}`}></div>
      </button>

      {/* Back to top button */}
      <button 
        className="back-to-top"
        onClick={() => scrollToSection('home')}
        aria-label="Back to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Home;