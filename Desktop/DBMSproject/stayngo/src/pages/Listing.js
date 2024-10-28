// src/pages/Listing.js

import React from 'react';

// Mock data for properties
const properties = [
  { id: 1, name: 'Cozy Apartment', location: 'Mumbai', price: '₹2000/night', image: 'https://via.placeholder.com/300' },
  { id: 2, name: 'Luxury Studio', location: 'Mumbai', price: '₹5000/night', image: 'https://via.placeholder.com/300' },
  { id: 3, name: 'Budget Room', location: 'Mumbai', price: '₹1500/night', image: 'https://via.placeholder.com/300' },
  // Add more properties as needed
];

const Listing = () => {
  return (
    <div className="listing-page bg-gray-100 min-h-screen p-6 mt-16">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Property Listings</h1>
      <p className="text-gray-600 text-center mb-8">Explore the best rentals available in Mumbai, India.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white p-4 rounded-lg shadow">
            <img src={property.image} alt={property.name} className="w-full h-32 object-cover rounded" />
            <h2 className="text-xl font-semibold mt-2">{property.name}</h2>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-lg font-bold">{property.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
