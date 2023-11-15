// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ loginUser, goToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // For demonstration purposes, use a predefined email and password
    const demoEmail = 'demo@example.com';
    const demoPassword = 'demo123';

    if (email === demoEmail && password === demoPassword) {
      // Call the loginUser function with the logic to set authentication status
      loginUser();
    } else {
      // If entered credentials are not the demo credentials, navigate to signup
      goToSignup();
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
