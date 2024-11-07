import React from 'react';
import './TeacherSidebar.css';
import { Link } from 'react-router-dom';


const TeacherSidebar = () => {
  return (
    <div className="teacher-sidebar">
      <ul>
      <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/mycourses">My Courses</Link></li>
        <li><Link to="/StudentAssignments">Assignments</Link></li>
        <li><Link to="/grading">Grading</Link></li>
        <li><Link to="/Attendance">Attendance</Link></li>
        <li><Link to="/messages">Messages</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/performance">Performance</Link></li>
      </ul>
    </div>
  );
};

export default TeacherSidebar;
