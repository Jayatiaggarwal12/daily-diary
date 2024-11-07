// Assignments.jsx
import React from 'react';
import './Assignments.css';

const Assignments = () => {
  const assignments = [
    { title: 'Assignment 1', dueDate: '2024-10-20', status: 'Pending' },
    { title: 'Assignment 2', dueDate: '2024-10-25', status: 'Completed' },
  ];

  return (
    <div className="assignments-container">
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment, index) => (
          <li key={index} className="assignment-item">
            <h3>{assignment.title}</h3>
            <p>Due Date: {assignment.dueDate}</p>
            <p>Status: {assignment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
