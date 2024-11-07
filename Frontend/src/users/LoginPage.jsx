import React, { useState } from 'react';
import '../App.css';
import studentImage from '/student.png'; // Update with the correct path to your PNG image

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Basic validation
        if (validateEmail(email) && password.length >= 6) {
            alert(`Login successful!\nEmail: ${email}\nRemember Me: ${rememberMe}`);
        } else {
            alert('Please enter a valid email and a password with at least 6 characters.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className="login-container">
            <div className="form-container">
                <h2>Student Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="password-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label>
                            <input
                                type="checkbox"
                                onChange={() => setShowPassword(!showPassword)}
                            /> Show
                        </label>
                    </div>
                    <div className="remember-me">
                        <label>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            /> Remember Me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </form>
            </div>
            <div className="image-container">
                <img src={studentImage} alt="Student" />
            </div>
        </div>
    );
};

export default LoginPage;
