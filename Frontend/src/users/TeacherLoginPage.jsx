import React, { useState } from 'react';
import './TeacherLoginPage.css';
import teacherImage from '/teacher.png'; // Adjust the path as necessary

const TeacherLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // API call for teacher login
    fetch('/api/teacher/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Login failed. Please check your credentials.');
        }
        return res.json();
      })
      .then(data => {
        console.log('Teacher login successful:', data);
        // Redirect or perform actions after successful login
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className="teacher-login-page">
      <div className="login-content">
        <h1>Teacher Login</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="form-footer">
          <p>Forgot your password? <a href="/reset-password">Reset it here</a></p>
        </div>
      </div>
      <div className="teacher-image-container">
        <img src={teacherImage} alt="Teacher" className="teacher-image" />
      </div>
    </div>
  );
};

export default TeacherLoginPage;

