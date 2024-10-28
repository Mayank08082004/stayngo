// src/pages/UserAccount.js

import React from 'react';

const UserAccount = () => {
  return (
    <div className="user-account p-6 bg-gray-50 min-h-screen mt-16">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">User Account</h1>
        <p className="text-gray-600 mb-8">Welcome to your account. Here you can view your bookings, messages, and payment history.</p>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Bookings</h2>
            {/* This section will display user's bookings */}
            <p>Your bookings will be displayed here.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Messages</h2>
            {/* This section will display user's messages */}
            <p>Your messages will be displayed here.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Payment History</h2>
            {/* This section will display user's payment history */}
            <p>Your payment history will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
