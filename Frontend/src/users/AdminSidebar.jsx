import React from 'react';
import './AdminSidebar.css'; // Styling for the admin sidebar
import { Link } from 'react-router-dom'; // Import Link for navigation

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/manage-users">Manage Users</Link>
        </li>
        <li>
          <Link to="/manage-courses">Manage Courses</Link>
        </li>
        <li>
          <Link to="/admin-reports">Reports</Link>
        </li>
        <li>
          <Link to="/admin-settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
