import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from "../src/users/LoginPage.jsx";
import StudentRegistrationForm from "../src/users/StudentRegistrationForm.jsx";
import Dashboard from "../src/users/Dashboard.jsx";
import Allcourses from "../src/users/Allcourses.jsx";
import CourseDetails from "../src/users/CourseDetails.jsx";
import HomePage from "../src/users/HomePage.jsx";
import TeacherDashboard from "../src/users/TeacherDashboard.jsx";
import TeacherSidebar from '../src/users/TeacherSidebar.jsx';
import MyCourses from "../src/users/MyCourses.jsx";
import StudentAssignments from '../src/users/StudentAssignments.jsx'; // Ensure this is imported correctly
import Grading from '../src/users/Grading.jsx';
import Attendance from '../src/users/Attendance.jsx';
import Resources from '../src/users/Resources.jsx';
import Performance from '../src/users/Performance.jsx';
import Messages from "../src/users/Messages.jsx";
import AdminDashboard from '../src/users/AdminDashboard.jsx';
import AdminSidebar from '../src/users/AdminSidebar.jsx';
import ManageUsers from "../src/admin/ManageUsers.jsx";
import ManageCourses from "../src/admin/ManageCourses.jsx";
import Reports from "../src/admin/Reports.jsx";
import Settings from "../src/admin/Settings.jsx";
import TeacherLoginPage from '../src/users/TeacherLoginPage';
import AdminLoginPage from '../src/users/AdminLoginPage';
import TeacherRegistrationPage from '../src/users/TeacherRegistrationPage';
import AdminRegistrationPage from '../src/users/AdminRegistrationPage';
import RoleSelectionPage from '../src/users/RoleSelectionPage.jsx';
import Forum from '../src/users/Forum.jsx';
function Layout() {
  return (
    <div className='grid-container'>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<StudentRegistrationForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/allcourses" element={<Allcourses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/studentassignments" element={<StudentAssignments />} /> {/* Updated to correct component */}
          <Route path="/grading" element={<Grading />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/mycourses" element={<MyCourses />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-courses" element={<ManageCourses />} />
          <Route path="/admin-reports" element={<Reports />} />
          <Route path="/admin-settings" element={<Settings />} />
          <Route path="/login-teacher" element={<TeacherLoginPage />} />
          <Route path="/login-admin" element={<AdminLoginPage />} />
          <Route path="/register-teacher" element={<TeacherRegistrationPage />} />
          <Route path="/register-admin" element={<AdminRegistrationPage />} />
          <Route path="/role-selection" element={<RoleSelectionPage />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
