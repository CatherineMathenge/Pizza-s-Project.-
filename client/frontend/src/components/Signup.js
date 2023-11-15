// src/components/Signup.js
import React, { useState } from 'react';

const Signup = ({ signupUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    try {
      // Form validation
      if (!name || !email || !password) {
        setError('Name, email, and password are required.');
        return;
      }

      setLoading(true);
      setError('');

      // Implement your signup logic here, e.g., make a request to the backend
      // Use the signupUser function to update the authentication status in App.js

      // Example using fetch API
      const response = await fetch('YOUR_BACKEND_SIGNUP_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Update authentication status in the parent component
        signupUser();
      } else {
        // Handle signup error
        const data = await response.json();
        setError(data.error || 'Signup failed.');
      }
    } catch (error) {
      // Handle network or other errors
      setError('Error during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Signup</h3>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleSignup} disabled={loading}>
        {loading ? 'Signing up...' : 'Signup'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Signup;
