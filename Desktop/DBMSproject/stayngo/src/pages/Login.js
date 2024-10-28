// src/pages/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUserRole, setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState(''); // State to track user type
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock user data for demonstration
    const admin = {
      email: 'admin@example.com',
      password: 'admin123',
    };

    const user = {
      email: 'user@example.com',
      password: 'user123',
    };

    // Check credentials based on user type
    if (userType === 'admin' && email === admin.email && password === admin.password) {
      alert('Admin logged in successfully');
      setUserRole('admin'); // Set user role to admin
      setIsLoggedIn(true); // Set login status to true
      navigate('/admin'); // Redirect to Admin Dashboard
    } else if (userType === 'user' && email === user.email && password === user.password) {
      alert('User logged in successfully');
      setUserRole('user'); // Set user role to user
      setIsLoggedIn(true); // Set login status to true
      navigate('/user-account'); // Redirect to Home or User Dashboard
    } else {
      alert('Invalid email or password');
    }
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setEmail(''); // Reset email and password fields
    setPassword('');
  };

  return (
    <div className="login-container p-6 bg-gray-50 min-h-screen mt-16">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>

        {/* User Type Selection */}
        {!userType ? (
          <div className="mb-4">
            <h2 className="text-lg font-semibold mb-2">Select User Type:</h2>
            <button 
              onClick={() => handleUserTypeChange({ target: { value: 'admin' } })} 
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600"
            >
              Admin
            </button>
            <button 
              onClick={() => handleUserTypeChange({ target: { value: 'user' } })} 
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              User
            </button>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Login;
