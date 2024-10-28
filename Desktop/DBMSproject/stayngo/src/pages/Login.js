// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock user data
    const adminUser = { email: 'admin@example.com', password: 'admin123', role: 'admin' };
    const normalUser = { email: 'user@example.com', password: 'user123', role: 'user' };

    if (email === adminUser.email && password === adminUser.password) {
      alert('Admin logged in successfully');
      setUserRole('admin'); // Set user role to admin
      navigate('/admin'); // Redirect to Admin Dashboard
    } else if (email === normalUser.email && password === normalUser.password) {
      alert('User logged in successfully');
      setUserRole('user'); // Set user role to user
      navigate('/'); // Redirect to Home
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container p-6 bg-gray-50 min-h-screen mt-16">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border border-gray-300 p-2 w-full rounded" 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border border-gray-300 p-2 w-full rounded" 
              required 
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
