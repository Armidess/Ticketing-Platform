import React, { useState} from 'react';
import './LoginUi.css';
import {Mail,Lock,User,Phone,Eye,EyeOff,Ticket} from "./Widgets";
import axios from 'axios';
import { useNavigate} from "react-router-dom";



export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try{
      console.log('Login attempt:', { email: formData.email, password: formData.password });
      const response = await axios.post('/auth/login/',formData);
      console.log("Login Response", response);
      navigate("/home");
      }
      catch{
        alert("Login Failed");
      }
    } else {
      try{
        console.log('Signup attempt:', {...formData,phone_humber:formData.phone});
        const response = await axios.post('/auth/signup/',formData);
        console.log("Signup Response", response);
        navigate("/home");
      }
      catch{
        alert("Signup Failed");
      }
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '', phone: '' });
  };

  return (
    <div className="auth-container">
      <div className="background-overlay"></div>
      
      {/* Animated background elements */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>

      <div className="auth-wrapper">
        {/* Glassmorphism card */}
        <div className="auth-card">
          
          {/* Header */}
          <div className="auth-header">
            <div className="logo-container">
              <Ticket />
            </div>
            <h1 className="auth-title">
              {isLogin ? 'Welcome Back' : 'Join TicketPro'}
            </h1>
            <p className="auth-subtitle">
              {isLogin ? 'Sign in to your account' : 'Create your account today'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* Name field - only for signup */}
            {!isLogin && (
              <div className="input-group">
                <div className="input-icon">
                  <User />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required={!isLogin}
                  className="form-input"
                />
              </div>
            )}

            {/* Email field */}
            <div className="input-group">
              <div className="input-icon">
                <Mail />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                required
                className="form-input"
              />
            </div>

            {/* Phone field - only for signup */}
            {!isLogin && (
              <div className="input-group">
                <div className="input-icon">
                  <Phone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required={!isLogin}
                  className="form-input"
                />
              </div>
            )}

            {/* Password field */}
            <div className="input-group">
              <div className="input-icon">
                <Lock />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
                className="form-input password-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Forgot Password - only for login */}
            {isLogin && (
              <div className="forgot-password">
                <button type="button" className="forgot-link">
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">or</span>
            <div className="divider-line"></div>
          </div>

          {/* Toggle between login/signup */}
          <div className="toggle-section">
            <p className="toggle-text">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
            </p>
            <button type="button" onClick={toggleMode} className="toggle-btn">
              {isLogin ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p>© 2025 TicketPro. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
