import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import './TeacherDashboard.css';

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [newCourse, setNewCourse] = useState('');
  const [newAssignment, setNewAssignment] = useState({ title: '', dueDate: '', details: '' });
  
  // Handle Course Creation
  const handleCreateCourse = () => {
    if (newCourse) {
      setCourses([...courses, newCourse]);
      alert(`Course "${newCourse}" created successfully!`);
      setNewCourse(''); // Reset input field
    } else {
      alert("Course name cannot be empty.");
    }
  };

  // Handle Assignment Creation
  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (newAssignment.title && newAssignment.dueDate && newAssignment.details) {
      setAssignments([...assignments, newAssignment]);
      alert(`Assignment "${newAssignment.title}" created successfully!`);
      setNewAssignment({ title: '', dueDate: '', details: '' }); // Reset form
    } else {
      alert("All fields must be filled out.");
    }
  };

  // Handle Grade Submission
  const handleGradeSubmit = (e) => {
    e.preventDefault();
    alert("Grades submitted successfully!");
  };

  // Handle Attendance Marking
  const handleMarkAttendance = () => {
    alert("Attendance marked successfully!");
  };

  // Handle Sending Notification
  const handleSendNotification = () => {
    alert("Notification sent!");
  };

  // Handle opening the forum
  const handleOpenForum = () => {
    navigate('/forum'); // Update this path to match your routing configuration
  };

  return (
    <div className="teacher-dashboard-container">
      <TeacherSidebar />
      <div className="dashboard-content">
        <h2>Welcome to the Teacher Dashboard</h2>

        {/* Create and Manage Courses */}
        <section className="course-management">
          <h3>Create and Manage Courses</h3>
          <input 
            type="text" 
            value={newCourse} 
            onChange={(e) => setNewCourse(e.target.value)} 
            placeholder="Course Name" 
          />
          <button onClick={handleCreateCourse}>Create New Course</button>
          <button>Edit Existing Course</button>
          <button>Delete Course</button>
        </section>

        {/* Assignment Creation */}
        <section className="assignment-creation">
          <h3>Assignment Creation</h3>
          <form onSubmit={handleCreateAssignment}>
            <input 
              type="text" 
              value={newAssignment.title} 
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })} 
              placeholder="Assignment Title" 
            />
            <input 
              type="date" 
              value={newAssignment.dueDate} 
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })} 
            />
            <textarea 
              value={newAssignment.details} 
              onChange={(e) => setNewAssignment({ ...newAssignment, details: e.target.value })} 
              placeholder="Assignment Details" 
            ></textarea>
            <button type="button">Attach Resource</button>
            <button type="submit">Create Assignment</button>
          </form>
        </section>

        {/* Grading Section */}
        <section className="grading-section">
          <h3>Grading</h3>
          <form onSubmit={handleGradeSubmit}>
            <table>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Assignment</th>
                  <th>Submission</th>
                  <th>Grade</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Student 1</td>
                  <td>Assignment 1</td>
                  <td>View</td>
                  <td><input type="number" placeholder="Grade" /></td>
                  <td><textarea placeholder="Feedback"></textarea></td>
                </tr>
                {/* Repeat for more students */}
              </tbody>
            </table>
            <button type="submit">Submit Grades</button>
          </form>
        </section>

        {/* Attendance Section */}
        <section className="attendance-section">
          <h3>Take Attendance</h3>
          <button onClick={handleMarkAttendance}>Mark Attendance for Class</button>
        </section>

        {/* Communication Section */}
        <section className="communication-section">
          <h3>Send Announcements</h3>
          <textarea placeholder="Write your message here"></textarea>
          <button onClick={handleSendNotification}>Send Notification</button>
        </section>

        {/* Performance Monitoring */}
        <section className="performance-monitoring">
          <h3>Performance Monitoring</h3>
          <p>Track student progress and view reports.</p>
          <button>View Reports</button>
        </section>

        {/* Resource Sharing */}
        <section className="resource-sharing">
          <h3>Resource Sharing</h3>
          <button>Upload Lecture Notes</button>
          <button>Upload Videos</button>
        </section>

        {/* Interaction with Students */}
        <section className="interaction-with-students">
          <h3>Student Interaction</h3>
          <button onClick={handleOpenForum}>Open Forum</button>
        </section>
      </div>
    </div>
  );
};

export default TeacherDashboard;

