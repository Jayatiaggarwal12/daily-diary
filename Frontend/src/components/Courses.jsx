import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { name: 'Physics', description: 'Understanding the fundamentals of Physics.' },
    { name: 'Chemistry', description: 'Introduction to organic and inorganic chemistry.' },
    { name: 'Mathematics', description: 'Advanced mathematical concepts.' },
  ];

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
