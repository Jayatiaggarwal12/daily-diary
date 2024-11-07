import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <h1 className="institute-name">Insight</h1>
        </div>
        <div className="header-right">
          <nav>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="#courses" className="nav-link">Courses</a>
            <a href="role-selection" className="nav-link">Login/Register</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2>Unlock Your Potential</h2>
          <p>Join our world-class courses and pave the way for your success.</p>
          <a href="#courses" className="cta-button">Enroll Now</a>
        </div>
        <div className="hero-image">
          <img src="doctor-engg.png" alt="Hero" />
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline-section">
        <div className="tagline-container">
          <div className="text-content">
            <h2>Empowering Students for a Bright Future</h2>
            <p>
              Unlock your potential with world-class education and guidance from industry experts. 
              We're here to help you succeed in your academic and career journey.
            </p>
            <a href="#courses" className="cta-button">Explore Courses</a>
          </div>
          <div className="tagline-image-container">
            <img src="fs.png" alt="Inspiration" className="tagline-image" />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="courses-section">
        <h2>Featured Courses</h2>
        <div className="course-cards">
          {/* Replace with dynamic course data */}
          <div className="course-card">
            <h3>11th Medical</h3>
            <p>Prepare for your future in medicine.</p>
            <a href="/course/11-medical" className="cta-button">Learn More</a>
          </div>
          <div className="course-card">
            <h3>12th Medical</h3>
            <p>Advance your knowledge and skills.</p>
            <a href="/course/12-medical" className="cta-button">Learn More</a>
          </div>
          <div className="course-card">
            <h3>11th Non-Medical</h3>
            <p>Explore diverse career paths.</p>
            <a href="/course/11-non-medical" className="cta-button">Learn More</a>
          </div>
          <div className="course-card">
            <h3>12th Non-Medical</h3>
            <p>Excel in your academic pursuits.</p>
            <a href="/course/12-non-medical" className="cta-button">Learn More</a>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="events-section">
        <h2>Upcoming Events</h2>
        <div className="events-calendar">
          {/* Replace with dynamic event data */}
          <div className="event">
            <h3>Open House - October 30, 2024</h3>
            <p>Join us for an open house to learn more about our programs.</p>
          </div>
          <div className="event">
            <h3>Webinar: Career Opportunities - November 5, 2024</h3>
            <p>Explore various career options available after graduation.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          We are committed to providing high-quality education to students aspiring to excel in medical 
          and non-medical fields. Our experienced faculty and modern teaching methods ensure that every 
          student gets the best learning experience.
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Connect with us on social media or drop us a message.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>"This institute helped me achieve my dreams. The teachers are amazing and the courses are well-structured."</p>
          <h4>- Student A</h4>
        </div>
        <div className="testimonial">
          <p>"The environment is so positive and motivating. I highly recommend this institute to anyone serious about their career."</p>
          <h4>- Student B</h4>
        </div>
        <div className="testimonial">
          <p>"I couldn't have asked for a better experience. The guidance I received here was invaluable."</p>
          <h4>- Student C</h4>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>What courses do you offer?</h4>
          <p>We offer a range of courses in medical and non-medical fields for grades 11 and 12.</p>
        </div>
        <div className="faq-item">
          <h4>How can I enroll?</h4>
          <p>You can enroll by visiting the Courses section and clicking on the respective course.</p>
        </div>
        <div className="faq-item">
          <h4>Do you offer online classes?</h4>
          <p>Yes, we provide online classes for all our courses. Please check the course details for more information.</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Institute Name. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
