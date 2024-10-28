// src/pages/Search.js

import React, { useState } from 'react';

// Mock data for properties (same as in Listing.js)
const properties = [
  { id: 1, name: 'Cozy Apartment', location: 'Mumbai', price: '₹2000/night' },
  { id: 2, name: 'Luxury Studio', location: 'Mumbai', price: '₹5000/night' },
  { id: 3, name: 'Budget Room', location: 'Mumbai', price: '₹1500/night' },
  // Add more properties as needed
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProperties = properties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page bg-gray-100 min-h-screen p-6 mt-16">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Search Properties</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={handleChange} 
        className="w-full p-3 mb-4 rounded-md border border-gray-300" 
        placeholder="Search by property name..." 
      />
      <p className="text-gray-600 text-center mb-8">Filter your search results for the best match.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mt-2">{property.name}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-lg font-bold">{property.price}</p>
          </div>
        ))}
        {filteredProperties.length === 0 && (
          <p className="text-gray-600 text-center col-span-3">No properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
