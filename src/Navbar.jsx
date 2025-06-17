import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-m">M</span>
        </div>
       
        <nav className="navbar-links">
          <button className="nav-button">Clients</button>
          <button className="nav-button">Candidates</button>
          <button className="nav-button">Interviews</button>
          <button className="nav-button">Products</button>
        </nav>
       
        <div className="navbar-auth">
          <button className="auth-button login">Login</button>
          <button className="auth-button signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

