import React from 'react';
import './Sidebar.css';
import noti from './images/bell.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button"> <img className='noti-button' src={noti} alt="Notification" />Dashboard</button>
      <button className="sidebar-button"> <img className='noti-button' src={noti} alt="Notification" />Surf e-Book</button>
      <button className="sidebar-button"> <img className='noti-button' src={noti} alt="Notification" />Take Quiz</button>
    </div>
  );
};

export default Sidebar;
