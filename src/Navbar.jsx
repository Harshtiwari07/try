import React from 'react';
import './Navbar.css';
import noti from './images/bell.png';
import profile from './images/profile.png';


const Navbar = () => {
  // Replace this with your actual notification count
  const notificationCount = 1;

  return (
    <nav className="navbar">
      <div className="logo">
      <p className="library-text">E-library</p>
        <p className="powered-text">Powered by Capgemini</p>
      </div>
      
      <div className="actions">
        <button className="notification-button">
          <img className='noti-button' src={noti} alt="Notification" />
          {notificationCount > 0 && (
            <span className="notification-count">{notificationCount}</span>
          )}
        </button>
        <button className="profile-button"> <img className='noti-button' src={profile} alt="Notification" /></button>
      </div>
    </nav>
  );
};

export default Navbar;
