import React from 'react';
import './Home.css'; // We'll create this CSS file

const Home = () => {
  return (
    <>
      <div className="space-tunnel">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="cube-frame"></div>
        ))}
      </div>

      <div className="description-container">
        <div className="title"></div>
        <div className="subtitle"></div>
      </div>

      <div className="author-container">
        <div className="picture"></div>
        <div className="title"></div>
      </div>
    </>
  );
};

export default Home;
