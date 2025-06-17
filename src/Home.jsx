import React, { useState } from 'react';
import './Home.css';
import "@fontsource/poppins/600.css";

const Home = ({ animate }) => {
  const [showAuthDropdown, setShowAuthDropdown] = useState(null);

  const toggleAuthDropdown = (type) => {
    setShowAuthDropdown(showAuthDropdown === type ? null : type);
  };

  return (
    <div className={`homepage ${animate ? '' : ''}`}>
      <video autoPlay muted loop playsInline className={`bg-video ${animate ? 'video-fade-in' : ''}`}>
        <source
          src="https://res.cloudinary.com/daijmfcpa/video/upload/v1749807349/videoplayback_xiykaz.mp4"
          type="video/mp4"
        />
      </video>

      <header className={`header ${animate ? 'header-fade-in' : ''}`}>
        <div className="logo">Alchemy.AI</div>
        
        {/* <nav className="main-nav">
          <button className="nav-button">Interview</button>
          <button className="nav-button">Candidates</button>          
          <button className="nav-button">Clients</button>
          <button className="nav-button">Resources</button>
          <button className="nav-button"></button>
        </nav> */}

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