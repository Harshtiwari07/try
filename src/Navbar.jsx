import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">e-library</div>
      <div className="actions">
        <button className="notification-button">Notification</button>
        <button className="profile-button">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
