import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await axios.post('/auth/login', credentials);
    localStorage.setItem('token', response.data.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Username' onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
      <input type='password' placeholder='Password' onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
      <button type='submit'>Login</button>
    </form>
  );
};

export default Login;
