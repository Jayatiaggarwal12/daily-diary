import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <form className="settings-form">
        <div className="form-group">
          <label>Site Name:</label>
          <input type="text" placeholder="Enter site name" />
        </div>
        <div className="form-group">
          <label>Admin Email:</label>
          <input type="email" placeholder="Enter admin email" />
        </div>
        <div className="form-group">
          <label>Change Password:</label>
          <input type="password" placeholder="Enter new password" />
        </div>
        <button type="submit" className="save-btn">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
