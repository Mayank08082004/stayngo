// src/pages/PropertyDetails.js
import React from 'react';

const PropertyDetails = () => {
  // Sample data for now; ideally, data would be fetched from an API
  const property = {
    name: "Elegant Apartment in Mumbai",
    description: "A spacious 2-bedroom apartment with all modern amenities located in the heart of Mumbai.",
    address: "123 Marine Drive, Mumbai, Maharashtra",
    price: "₹5000/night",
    images: [
      "/images/property1.jpg",
      "/images/property2.jpg",
      "/images/property3.jpg"
    ],
    amenities: ["WiFi", "Air Conditioning", "Gym", "Swimming Pool"],
    availability: [
      { date: "2023-11-01", isAvailable: true },
      { date: "2023-11-02", isAvailable: false },
      // More dates
    ],
    reviews: [
      { user: "Alice", rating: 4, comment: "Great place, loved it!" },
      { user: "Bob", rating: 5, comment: "Excellent service and location." }
    ],
    nearbyFacilities: [
      { name: "Tata Memorial Hospital", type: "Hospital", distance: "2 km" },
      { name: "St. Xavier's College", type: "Education Center", distance: "3 km" }
    ]
  };

  return (
    <div className="container mx-auto p-4">
      {/* Property Images */}
      <div className="flex overflow-x-scroll space-x-4 mb-6">
        {property.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Property ${index + 1}`}
            className="w-1/3 rounded-lg shadow-md"
          />
        ))}
      </div>

      {/* Property Info */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">{property.name}</h1>
        <p className="text-gray-600 mt-2">{property.description}</p>
        <p className="mt-4 font-semibold">{property.address}</p>
        <p className="text-blue-500 mt-2">{property.price}</p>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Amenities</h2>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {property.amenities.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Availability</h2>
        <ul className="mt-2">
          {property.availability.map((day, index) => (
            <li key={index} className="text-gray-600">
              {day.date}: {day.isAvailable ? "Available" : "Booked"}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        {property.reviews.length > 0 ? (
          property.reviews.map((review, index) => (
            <div key={index} className="border-b pb-4 mt-4">
              <p className="font-semibold">{review.user}</p>
              <p className="text-yellow-500">Rating: {review.rating} / 5</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-2">No reviews yet.</p>
        )}
      </div>

      {/* Nearby Facilities */}
      <div>
        <h2 className="text-xl font-semibold">Nearby Hospitals/Education Centers</h2>
        <ul className="mt-2">
          {property.nearbyFacilities.map((facility, index) => (
            <li key={index} className="text-gray-600">
              {facility.name} ({facility.type}) - {facility.distance}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetails;
