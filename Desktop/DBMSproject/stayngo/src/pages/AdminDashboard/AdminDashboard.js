// src/pages/AdminDashboard/AdminDashboard.js

import React from 'react';
import ManageProperties from './ManageProperties';
import ManageRooms from './ ManageRooms';
import ManageBookings from './ManageBookings';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard p-6 bg-gray-50 min-h-screen mt-16">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">
          Welcome to the admin dashboard. Use the links below to manage properties, rooms, and bookings.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition duration-200 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">Manage Properties</h2>
            <ManageProperties />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition duration-200 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">Manage Rooms</h2>
            <ManageRooms />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow hover:bg-gray-200 transition duration-200 ease-in-out">
            <h2 className="text-xl font-semibold mb-2">Manage Bookings</h2>
            <ManageBookings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
