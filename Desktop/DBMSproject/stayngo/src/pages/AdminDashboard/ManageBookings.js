// src/pages/AdminDashboard/ManageBookings.js

import React from 'react';

const ManageBookings = () => {
  return (
    <div>
      <h3 className="text-lg font-medium text-gray-700">Manage Bookings</h3>
      <p className="text-sm text-gray-500">Here you can view and update booking statuses.</p>
      {/* Placeholder for booking controls */}
      <div className="mt-4 p-4 bg-white rounded shadow">
        <p>No bookings to display.</p>
      </div>
    </div>
  );
};

export default ManageBookings;
