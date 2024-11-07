import React, { useState, useEffect } from 'react';
import './MyCourses.css';

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    // Fetch courses from backend (API)
    fetch('/api/teacher/courses')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setCourses(data))
      .catch(error => {
        console.error('Error fetching courses:', error);
        setError('Failed to fetch courses'); // Set error message
      });
  }, []);

  return (
    <div className="my-courses">
      <h1>My Courses</h1>
      {error && <p>{error}</p>} {/* Show error if exists */}
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCourses;
