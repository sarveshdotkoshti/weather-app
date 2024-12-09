import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [message, setMessage] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/auth/signup', credentials);
        setMessage('Signup successful! You can now log in.');
      } catch (error) {
        setMessage('Signup failed: ' + error.response.data);
      }
    };
  
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          />
          <button type="submit">Signup</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  };
  
  export default Signup;