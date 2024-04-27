  import React, { useState } from 'react';
  import axios from 'axios';
  import { Navigate, useNavigate } from 'react-router-dom'; 
  import { motion } from 'framer-motion';
  import './login.css';

  function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [redirectToRegister, setRedirectToRegister] = useState(false); 

    const handleSubmit = async (e) => {
      

      try {
        
        const response = await axios.post('http://localhost:5000/users/login', {
          username,
          email,
          password
        });

      
     
        
      if(response.status === 200){
        navigate('/main')
      }
         
        
        
      } catch (error) {
        setError('Authentication Failed'); 
        console.error('Error:', error);
      }
    };

    

    

    const reference = { left: 0, top: 0, right: 0, bottom: 0 }; 
    return (
      <div className="login-container">
        <div className="background-overlay"></div>
        <motion.div
          drag
          dragConstraints={reference}
          dragElastic={0.1}
          whileDrag={{ scale: 1.2 }}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 20 }}
          className="login-form"
        >
          <h2>Login</h2>
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
            <button type="submit" className="btn" onClick = {handleSubmit}>Login</button>
            {error && <p className="error-message">{error}</p>}
          </div>
          <button onClick={() => navigate('/register')} className="btn">Register</button>
        </motion.div>
      </div>
    );
  }

  export default Login;
