// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Listing from './pages/Listing';
import Contact from './pages/Contact';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UserAccount from './pages/UserAccount';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/listings" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
    </Router>
  );
};

export default App;
