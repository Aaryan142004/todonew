import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'; 
import { motion } from 'framer-motion';
import './register.css';

function Register() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [redirectToLogin, setRedirectToLogin] = useState(false); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.post('http://localhost:5000/users/register', {
        username,

        email,
        password
      });
      
      setSuccessMessage(response.data.message);

      
      setUsername('');
      setEmail('');
      setPassword('');
      
    } catch (error) {
      
      setError('Registration Failed');
      console.error('Error:', error);
    }
  };

  const reference = { left: 0, top: 0, right: 0, bottom: 0 }; 
  return (
    <div className="register-container">
      <div className="background-overlay"></div>
      <motion.div
        drag
        dragConstraints={reference}
        dragElastic={0.1}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
        className="register-form"
      >
        <h2>Register</h2>
        <div >
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="button" onClick = {handleSubmit} className="btn">Register</button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
        {!redirectToLogin && <button onClick={() => setRedirectToLogin(true)} className="btn">Login</button>}
        {redirectToLogin && <Navigate to="/login" replace={true} />}
      </motion.div>
    </div>
  );
}

export default Register;
