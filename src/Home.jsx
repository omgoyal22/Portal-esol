import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className={`homepage ${animate ? '' : ''}`}>
      <video autoPlay muted loop playsInline className={`bg-video ${animate ? 'video-fade-in' : ''}`}>
        <source
          src="https://jetonbucket.fra1.cdn.digitaloceanspaces.com/jeton/2024-08-08T10-52-53.656Z-jeton-homepage-mobile2.mp4#t=0.01"
          type="video/mp4"
        />
      </video>

      <header className="header">
        <div className="logo">Jeton</div>
        <div className="auth-buttons">
          <div className="auth-dropdown-container">
            <button 
              className="login" 
              onClick={() => toggleAuthDropdown('login')}
            >
              Log in
            </button>
            {showAuthDropdown === 'login' && (
              <div className="auth-dropdown">
                <button className="dropdown-option">Client</button>
                <button className="dropdown-option">Developer</button>
              </div>
            )}
          </div>
          
          <div className="auth-dropdown-container">
            <button 
              className="signup" 
              onClick={() => toggleAuthDropdown('signup')}
            >
              Sign up
            </button>
            {showAuthDropdown === 'signup' && (
              <div className="auth-dropdown">
                <button className="dropdown-option">Client</button>
                <button className="dropdown-option">Developer</button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className={`content ${animate ? 'text-fade-in' : ''}`}>
        <h1>Next-Gen Hiring. Today</h1>
        <p>One solution From upskilling to hiring.</p>
      </div>
    </div>
  );
};

export default Home;