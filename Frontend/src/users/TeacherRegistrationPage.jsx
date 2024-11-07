import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './TeacherRegistrationPage.css';

const TeacherRegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleRegistration = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    fetch('/api/teacher/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Registration failed');
        }
        return res.json();
      })
      .then(data => {
        console.log('Teacher registration successful:', data);
        // Redirect or perform actions after successful registration
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className="registration-page">
      <div className="registration-content">
        <div className="registration-form-container">
          <h2>Teacher Registration</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleRegistration} className="registration-form">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
          <div className="form-footer">
            <p>
              Already registered?{' '}
              <a onClick={() => navigate('/login-teacher')} className="login-here">Login here</a>
            </p>
          </div>
        </div>
        <div className="student-image-container">
          <img src="teacher.png" alt="Teacher" className="student-image" />
        </div>
      </div>
    </div>
  );
};

export default TeacherRegistrationPage;

