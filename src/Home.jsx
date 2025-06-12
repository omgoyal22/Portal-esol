import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      {/* 🔥 Background video */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source
          src="https://res.cloudinary.com/daijmfcpa/video/upload/v1749720714/video_vowpqc.mp4"
          type="video/mp4"
        />
      </video>

      <header className="header">
        <div className="logo">Jeton</div>
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </header>

      {/* <div className="animated-coins">
        {[...Array(14)].map((_, i) => (
          <div
            key={i}
            className="coin"
            style={{
              animationDelay: `${i * 0.3}s`,
              transform: `translate3d(${(Math.random() - 0.5) * 600}px, ${(Math.random() - 0.5) * 600}px, 0)`,
            }}
          />
        ))}
      </div> */}

      <div className="content">
        <h1>One app for all needs</h1>
        <p>Single account for all your payments.</p>
        <div className="store-buttons">
          <button className="store apple"> App Store</button>
          <button className="store google">▶ Google Play</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
