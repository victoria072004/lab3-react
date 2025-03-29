import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="Phone number" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button className="signup-button" onClick={() => navigate('/home')}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
