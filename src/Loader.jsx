import React from 'react';
import './Loader.css'; // We'll create this CSS file next

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;