import React, { useState } from "react";

export default function AddNewSpot() {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-600">Add New Spot</h2>
          {/* <button className="text-gray-500 hover:text-gray-800">&times;</button> */}
        </div>
        <p className="text-sm text-gray-500 mb-4">Input spot details</p>

        {/* Basic Information */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-700">Basic Information</h3>

          <input
            type="text"
            placeholder="eg: Mrs Massey kitchen"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="eg: Nigeria"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="eg: Lagos"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="eg: Lekki"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="eg: no 10, bendel close"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            placeholder="what makes this amala spot very special"
            rows={3}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Rating */}
        <div className="mt-5">
          <h3 className="font-medium text-gray-700 mb-2">Your Rating</h3>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Photo Upload */}
        <div className="mt-5">
          <h3 className="font-medium text-gray-700 mb-2">Photos (Optional)</h3>
          <label className="w-full flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-400">
            <span className="text-gray-500 text-sm mb-2">
              Click to upload photos of the Amala spot
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
              Choose a photo
            </span>
            <input type="file" className="hidden" />
          </label>
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 border rounded-3xl text-gray-700 hover:bg-gray-100">
            Cancel
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-3xl hover:bg-blue-700">
            Submit Spot
          </button>
        </div>
      </div>
    </div>
  );
}
