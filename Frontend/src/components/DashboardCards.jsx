// DashboardCards.jsx
import React from 'react';
import './DashboardCards.css';

const DashboardCards = ({ studentData }) => {
  // Assuming studentData contains some statistics
  const courseProgress = studentData.length > 0 ? studentData[0].courseProgress : 0; // Example value
  const assignmentsPending = studentData.length > 0 ? studentData[0].assignmentsPending : 0; // Example value
  const notifications = studentData.length > 0 ? studentData[0].notifications : 0; // Example value

  return (
    <div className="dashboard-cards-container">
      <div className="card">
        <h3>Course Progress</h3>
        <p>{courseProgress}% Completed</p>
      </div>
      <div className="card">
        <h3>Assignments</h3>
        <p>{assignmentsPending} Pending</p>
      </div>
      <div className="card">
        <h3>Notifications</h3>
        <p>{notifications} New Notification</p>
      </div>
    </div>
  );
};

export default DashboardCards;


