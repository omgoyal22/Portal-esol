import React from 'react';
import './Home.css';

const Home = ({ animate }) => {
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
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
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
