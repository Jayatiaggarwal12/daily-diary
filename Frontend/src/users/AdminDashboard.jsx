import React from 'react';
import '../users/AdminDashboard.css'; // Styling for the admin dashboard
import AdminSidebar from '../users/AdminSidebar.jsx'; // Sidebar for admin
import AdminDashboardCards from '../users/AdminDashboardCards.jsx'; // Reuse the existing dashboard cards component
import ProgressChart from '../components/ProgressChart.jsx'; // Adjust the path if needed


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-overview">
          <AdminDashboardCards /> {/* Display dashboard cards here */}
        </div>
        <div className="admin-statistics">
          <div className="stats-section">
            <h2>Visitors Overview</h2>
            {/* You can use your existing chart component or create a new one */}
            <ProgressChart />
          </div>
          <div className="global-sales">
            <h2>Global Sales by Top Locations</h2>
            {/* Sales data table */}
            <table>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Sales</th>
                  <th>Average</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>India</td>
                  <td>3,562</td>
                  <td>56.23%</td>
                </tr>
                <tr>
                  <td>USA</td>
                  <td>1,462</td>
                  <td>26.13%</td>
                </tr>
                <tr>
                  <td>Russia</td>
                  <td>2,341</td>
                  <td>36.3%</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
