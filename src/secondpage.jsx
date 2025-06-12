import React, { useEffect, useState, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const containerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      
      setScrollY(currentScrollY);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jobCategories = [
    { title: 'Frontend Developer', count: '120+ Jobs', color: '#6366f1' },
    { title: 'Backend Engineer', count: '85+ Jobs', color: '#8b5cf6' },
    { title: 'UI/UX Designer', count: '95+ Jobs', color: '#ec4899' },
    { title: 'Data Scientist', count: '70+ Jobs', color: '#06b6d4' },
    { title: 'DevOps Engineer', count: '60+ Jobs', color: '#10b981' },
    { title: 'Product Manager', count: '45+ Jobs', color: '#f59e0b' },
    { title: 'Mobile Developer', count: '80+ Jobs', color: '#ef4444' },
    { title: 'Full Stack Developer', count: '150+ Jobs', color: '#3b82f6' },
  ];

  const features = [
    { title: 'AI-Powered Matching', desc: 'Smart algorithms find perfect job matches' },
    { title: 'Real-time Updates', desc: 'Get notified instantly for new opportunities' },
    { title: 'Skills Assessment', desc: 'Comprehensive evaluation of your abilities' },
    { title: 'Career Guidance', desc: 'Expert advice for career progression' },
  ];

  return (
    <div className="scroll-container" ref={containerRef}>
      {/* Dynamic Background */}
      <div 
        className={`background-animation ${scrollDirection}`}
        style={{
          '--scroll-progress': Math.min(scrollY / 1000, 1),
        }}
      >
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        <div className="bg-gradient"></div>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className={`hero-content ${scrollDirection === 'down' ? 'slide-in' : 'slide-out'}`}>
          <h1 className="hero-title">
            Find Your Dream Job
            <span className="gradient-text">Today</span>
          </h1>
          <p className="hero-subtitle">
            Connect with top companies and unlock your career potential
          </p>
        </div>
      </section>

      {/* Job Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className={`section-title ${scrollDirection === 'down' ? 'fade-in' : 'fade-out'}`}>
            Popular Job Categories
          </h2>
        </div>
        <div className="categories-grid">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${scrollDirection === 'down' ? 'slide-in-left' : 'slide-out-left'}`}
              style={{
                '--delay': `${index * 0.1}s`,
                '--color': category.color
              }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <h3>{category.title}</h3>
                <p>{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className={`features-text ${scrollDirection === 'down' ? 'slide-in-right' : 'slide-out-right'}`}>
            <h2>Why Choose Our Platform?</h2>
            <p>Experience the future of job searching with our innovative features</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${scrollDirection === 'down' ? 'slide-in-bottom' : 'slide-out-bottom'}`}
                style={{ '--delay': `${index * 0.15}s` }}
              >
                <div className="feature-icon">
                  <div className="icon-pulse"></div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className={`stat-item ${scrollDirection === 'down' ? 'count-up' : 'count-down'}`}>
            <div className="stat-number">10K+</div>
            <div className="stat-label">Active Jobs</div>
          </div>
          <div className={`stat-item ${scrollDirection === 'down' ? 'count-up' : 'count-down'}`}>
            <div className="stat-number">5K+</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className={`stat-item ${scrollDirection === 'down' ? 'count-up' : 'count-down'}`}>
            <div className="stat-number">50K+</div>
            <div className="stat-label">Success Stories</div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="footer-spacer"></div>
    </div>
  );
};

export default ScrollAnimation;