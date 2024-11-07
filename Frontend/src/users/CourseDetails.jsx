import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();

  const courseData = {
    '11th-medical': {
      title: 'Class 11 Medical',
      description: 'This course covers the foundational syllabus for Class 11 Medical students, providing an in-depth understanding of Biology, Physics, and Chemistry.',
      topics: ['Biology', 'Physics', 'Chemistry'],
      duration: '1 Year',
      eligibility: 'Class 10 pass with a focus on science subjects.',
      resources: [
        { name: 'NCERT Biology Book', link: 'https://ncert.nic.in/' },
        { name: 'Physics Notes', link: 'https://example.com/physics-notes' },
      ],
      bannerImage: 'https://via.placeholder.com/1200x300',
      highlights: [
        'Interactive lectures and lab sessions',
        'Personalized mentoring and doubt-clearing sessions',
        'Comprehensive study material and test series',
      ],
      testimonials: [
        { name: 'Aditi Sharma', feedback: 'An excellent foundation course. The teachers are supportive and the materials are very helpful!' },
        { name: 'Rahul Verma', feedback: 'Great experience. I felt well-prepared for my exams.' },
      ],
    },
    // ... (other courses)
  };

  const course = courseData[id];

  return (
    <div className="course-details">
      {course ? (
        <>
          {/* Banner Image */}
          <div className="course-banner">
            <img src={course.bannerImage} alt={`${course.title} Banner`} />
          </div>

          {/* Course Title and Description */}
          <h1>{course.title}</h1>
          <p className="course-description">{course.description}</p>

          {/* Highlights Section */}
          <div className="highlights">
            <h3>Course Highlights</h3>
            <ul>
              {course.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>

          {/* Topics Covered */}
          <h3>Topics Covered</h3>
          <ul className="topics-list">
            {course.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>

          {/* Additional Course Info */}
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Eligibility:</strong> {course.eligibility}</p>

          {/* Resources */}
          <h3>Resources</h3>
          <ul className="resources-list">
            {course.resources.map((resource, index) => (
              <li key={index}>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.name}</a>
              </li>
            ))}
          </ul>

          {/* Testimonials */}
          <div className="testimonials">
            <h3>What Our Students Say</h3>
            {course.testimonials.map((testimonial, index) => (
              <blockquote key={index}>
                <p>"{testimonial.feedback}"</p>
                <footer>- {testimonial.name}</footer>
              </blockquote>
            ))}
          </div>

          {/* Enroll Button */}
          <div className="enroll-button">
            <button>Enroll Now</button>
          </div>
        </>
      ) : (
        <p>Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetails;

