import React from 'react';
import studentIcon from "/graduated.png";
import teacherIcon from "/teacher.png";
import adminIcon from "/admin.png";
import './RoleSelectionPage.css';

const RoleSelectionPage = () => {
  const handleCardClick = (role) => {
    if (role === 'student') {
      window.location.href = '/register';
    } else if (role === 'teacher') {
      window.location.href = '/register-teacher';
    } else if (role === 'admin') {
      window.location.href = '/register-admin';
    }
  };

  return (
    <div className="role-selection-container">
      <h1>Select Your Role</h1>
      <div className="cards-container">
        <div className="role-card" onClick={() => handleCardClick('student')}>
          <img src={studentIcon} alt="Student" className="role-icon" />
          <h2>Student</h2>
          <p>Register as a student to access your courses and assignments.</p>
        </div>

        <div className="role-card" onClick={() => handleCardClick('teacher')}>
          <img src={teacherIcon} alt="Teacher" className="role-icon" />
          <h2>Teacher</h2>
          <p>Register as a teacher to manage your courses and students.</p>
        </div>

        <div className="role-card" onClick={() => handleCardClick('admin')}>
          <img src={adminIcon} alt="Admin" className="role-icon" />
          <h2>Admin</h2>
          <p>Register as an admin to manage the entire system.</p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
