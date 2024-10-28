// src/pages/UserDashboard.js
import React from 'react';

const UserDashboard = () => {
  // Sample data for demonstration; in a real app, this would come from an API
  const bookings = [
    { id: 1, propertyName: "Elegant Apartment", checkIn: "2023-11-01", checkOut: "2023-11-07", status: "Confirmed" },
    { id: 2, propertyName: "Cozy Studio", checkIn: "2023-12-01", checkOut: "2023-12-05", status: "Pending" },
  ];

  const reviews = [
    { id: 1, propertyName: "Elegant Apartment", rating: 5, comment: "Fantastic place, highly recommended!" },
    { id: 2, propertyName: "Cozy Studio", rating: 4, comment: "Nice stay, very comfortable." },
  ];

  const messages = [
    { id: 1, from: "Host", content: "Hello! Looking forward to your stay.", date: "2023-10-01" },
    { id: 2, from: "Support", content: "Your booking is confirmed.", date: "2023-10-02" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">User Dashboard</h1>

      {/* Bookings Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
        <ul className="bg-white shadow rounded-lg p-4">
          {bookings.map(booking => (
            <li key={booking.id} className="border-b pb-2 mb-2 last:border-b-0">
              <p className="font-semibold">{booking.propertyName}</p>
              <p>Check-in: {booking.checkIn}</p>
              <p>Check-out: {booking.checkOut}</p>
              <p>Status: <span className="text-blue-500">{booking.status}</span></p>
            </li>
          ))}
        </ul>
      </section>

      {/* Reviews Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">My Reviews</h2>
        <ul className="bg-white shadow rounded-lg p-4">
          {reviews.map(review => (
            <li key={review.id} className="border-b pb-2 mb-2 last:border-b-0">
              <p className="font-semibold">{review.propertyName}</p>
              <p>Rating: {review.rating} / 5</p>
              <p>Comment: {review.comment}</p>
              <button className="text-blue-500 mt-1">Edit</button>
              <button className="text-red-500 ml-4 mt-1">Delete</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Messages Section */}
      <section>
        <h2 className="text-xl font-semibold mb-2">My Messages</h2>
        <ul className="bg-white shadow rounded-lg p-4">
          {messages.map(message => (
            <li key={message.id} className="border-b pb-2 mb-2 last:border-b-0">
              <p><span className="font-semibold">{message.from}:</span> {message.content}</p>
              <p className="text-gray-500 text-sm">Date: {message.date}</p>
              <button className="text-blue-500 mt-1">Reply</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default UserDashboard;
