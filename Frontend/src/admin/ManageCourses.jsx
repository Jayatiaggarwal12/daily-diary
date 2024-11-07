import React from 'react';
import './ManageCourses.css';

const ManageCourses = () => {
  return (
    <div className="manage-courses">
      <h2>Manage Courses</h2>
      <button className="add-course-btn">Add New Course</button>
      <table className="course-table">
        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example rows */}
          <tr>
            <td>101</td>
            <td>Physics 11th Grade</td>
            <td>Science</td>
            <td>
              <button className="edit-btn">Edit</button>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageCourses;
