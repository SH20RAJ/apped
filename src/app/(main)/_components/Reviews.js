import React from "react";

export default function Reviews() {
  return (
    <div>
      {/* User Reviews */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        {appDetails.reviews.map((review, index) => (
          <div
            key={index}
            className="mb-4 p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <p className="font-semibold">{review.user}</p>
            <p className="text-yellow-800">⭐ {review.rating}</p>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
