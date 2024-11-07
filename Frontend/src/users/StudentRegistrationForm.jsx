import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import studentImage from '/graduated.png';

const StudentRegistrationForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (student.password !== student.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const response = await axios.post('http://localhost:5002/api/students', student);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-content">
        <div className="registration-form-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Student Registration</h2>
            <input
              type="text"
              name="name"
              value={student.name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={student.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              value={student.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={student.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <button type="submit">Register</button>
            <div className="form-footer">
              <p>
                Already registered? <Link to="/login" className="login-link">Login here</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="student-image-container">
          <img src={studentImage} alt="Student" className="student-image" />
        </div>
      </div>
    </div>
  );
};

export default StudentRegistrationForm;
