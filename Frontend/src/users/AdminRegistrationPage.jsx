import React from 'react';
import './AdminRegistrationPage.css'; // Make sure to import the CSS file
import adminImage from '/admin.png'; // Update the path to your image

const AdminRegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="registration-content">
        <div className="registration-form-container">
          <h2>Admin Registration</h2>
          <form className="registration-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
          <div className="form-footer">
            <p>Already registered? <a href="/login-admin">Login here</a></p>
          </div>
        </div>
        <div className="admin-image-container">
          <img src={adminImage} alt="Admin" className="admin-image" />
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrationPage;
