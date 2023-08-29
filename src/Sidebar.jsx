import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <button className="sidebar-button">Dashboard</button>
      <button className="sidebar-button">Surf E-Book</button>
      <button className="sidebar-button">Take Quiz</button>
    </div>
  );
};

export default Sidebar;
