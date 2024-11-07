import React from 'react';
import './Reports.css';

const Reports = () => {
  return (
    <div className="reports">
      <h2>Reports</h2>
      <div className="report-summary">
        <h3>Overview</h3>
        <p>Total Users: 150</p>
        <p>Total Courses: 10</p>
        <p>Active Users: 120</p>
      </div>
      <div className="report-details">
        <h3>Detailed Reports</h3>
        <ul>
          <li>Course Performance Report</li>
          <li>User Activity Report</li>
          <li>Attendance Report</li>
        </ul>
      </div>
    </div>
  );
};

export default Reports;
