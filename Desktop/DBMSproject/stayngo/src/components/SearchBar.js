// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [roomType, setRoomType] = useState('');

  const handleSearch = () => {
    // Implement your search logic here
    console.log({
      searchTerm,
      location,
      priceRange,
      roomType,
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md mt-6 space-y-4 md:space-y-0 md:space-x-4">
      {/* Main Search Input */}
      <input
        type="text"
        placeholder="Search properties"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/3"
      />

      {/* Location Filter */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/4"
      >
        <option value="">Select Location</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
      </select>

      {/* Price Range Filter */}
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/4"
      >
        <option value="">Select Price Range</option>
        <option value="0-1000">₹0 - ₹1000</option>
        <option value="1000-5000">₹1000 - ₹5000</option>
        <option value="5000+">₹5000+</option>
      </select>

      {/* Room Type Filter */}
      <select
        value={roomType}
        onChange={(e) => setRoomType(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/4"
      >
        <option value="">Select Room Type</option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Suite">Suite</option>
      </select>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
