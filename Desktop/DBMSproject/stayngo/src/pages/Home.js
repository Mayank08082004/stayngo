// src/pages/Home.js

import React from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="home-page bg-gray-100 min-h-screen p-6 mt-16">
      <header className="text-center my-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to StayNGo</h1>
        <p className="text-lg text-gray-600 mt-4">
          Find the best and affordable rentals for healthcare travelers and students.
        </p>
      </header>
      <SearchBar />
    </div>
  );
};

export default Home;
