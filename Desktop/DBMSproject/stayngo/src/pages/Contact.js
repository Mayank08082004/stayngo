// src/pages/Contact.js

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this alert with an actual API call
    alert(`Message sent!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="contact-page bg-gray-100 min-h-screen p-6 mt-16">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h1>
      <p className="text-gray-600 text-center mb-8">We'd love to hear from you! Feel free to reach out with any questions or feedback.</p>
      
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Your Name"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Your Email"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Message</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </label>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition duration-150">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
