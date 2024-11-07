// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/progress">Progress</Link></li>
        <li><Link to="/assignments">Assignments</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
