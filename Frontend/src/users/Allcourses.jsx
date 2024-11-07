import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicroscope, FaUserMd, FaAtom, FaBook } from 'react-icons/fa';
import './Allcourses.css';

const Allcourses = () => {
  const courses = [
    { id: '11th-medical', title: '11th Medical', description: 'Dive into the foundational medical syllabus for Class 11.', icon: <FaMicroscope /> },
    { id: '12th-medical', title: '12th Medical', description: 'Advanced medical topics for Class 12 students.', icon: <FaUserMd /> },
    { id: '11th-non-medical', title: '11th Non-Medical', description: 'Core concepts in science for Class 11 non-medical students.', icon: <FaAtom /> },
    { id: '12th-non-medical', title: '12th Non-Medical', description: 'Prepare for higher studies with Class 12 science topics.', icon: <FaBook /> },
  ];

  return (
    <div className="courses-container">
      <h1 className="courses-heading">Courses We Offer</h1>
      <div className="courses-wrapper">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <div className="icon">{course.icon}</div>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-description">{course.description}</p>
            <Link to={`/courses/${course.id}`}>
              <button className="learn-more-btn">Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcourses;




