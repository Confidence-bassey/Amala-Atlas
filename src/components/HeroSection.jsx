import React from 'react';
import { FaSearch, FaStar } from 'react-icons/fa';
import MapPreview from './MapPreview'

export default function HeroMapSection() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pt-16 pb-24 px-4 md:px-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Map the World’s Hidden <br />
          <span className="text-blue-700">Amala Spots</span>
        </h1>
        <p className="text-gray-600 mb-8">
          A global, community-powered atlas of Amala joints — from Lagos to London
        </p>

        {/* Search Input */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for a spot"
            className="w-full py-3 px-4 pl-5 pr-24 rounded-full shadow-md text-sm border border-gray-200 focus:outline-none"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-blue-700 text-white px-6 rounded-full text-sm font-medium hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Discover Amala Worldwide</h2>
        <p className="text-gray-600 mb-8">Verified by the community, mapped for everyone.</p>

        {/* <div className="relative bg-blue-900 rounded-3xl h-[300px] md:h-[360px] max-w-6xl mx-auto overflow-hidden">
          {[
            [20, 40], [35, 20], [55, 60], [70, 30], [25, 70],
            [50, 50], [80, 20], [15, 50], [60, 80], [75, 60],
          ].map(([x, y], i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-red-600 rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}

          <div className="absolute left-[40%] top-[40%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-64">
            <div className="font-semibold text-sm">Heritage Bowl</div>
            <div className="text-gray-500 text-sm mb-2">Paris, France</div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-500" />
                <span className="font-semibold">4.8</span>
                <span>(24)</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                Verified
              </span>
            </div>
          </div>
        </div> */}

        <div className="relative bg-blue-900 rounded-3xl h-[300px] md:h-[360px] max-w-6xl mx-auto overflow-hidden">
          <MapPreview />
        </div>    

        {/* Link Below Map */}
        <p className="text-sm text-blue-600 mt-4 hover:underline cursor-pointer">
          Click the map to explore all 27 verified locations
        </p>
      </div>
    </div>
  );
}
