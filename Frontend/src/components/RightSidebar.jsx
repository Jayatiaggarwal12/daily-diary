import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="calendar">
        <h3>Calendar</h3>
        {/* Embed a calendar here */}
      </div>
      <div className="task-list">
        <h3>Task List</h3>
        <ul>
          <li>Complete Assignment 1</li>
          <li>Attend Chemistry Class</li>
          <li>Submit Biology Project</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
