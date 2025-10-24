import React from "react";
import PropTypes from "prop-types";
import { FaCheckCircle, FaRegStar } from "react-icons/fa";

const SpottedRestaurantCard = ({
  name,
  location,
  rating,
  reviews,
  isSelected,
  onClick,
}) => {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onClick}
      className={`w-full text-left flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-800 ${
        isSelected ? "ring-2 ring-blue-800" : ""
      }`}
    >
      {/* Left Section: Restaurant Details */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-600">{location}</p>
        <div className="flex items-center mt-2 text-gray-700">
          <FaRegStar className="mr-1 text-gray-700" aria-hidden="true" />
          <span>
            {rating} ({reviews})
          </span>
        </div>
      </div>

      {/* Right Section: Checkmark */}
      <div
        className={`flex items-center justify-center w-8 h-8 rounded-full ${
          isSelected ? "bg-blue-800" : "bg-gray-100"
        }`}
      >
        <FaCheckCircle
          className={`text-lg ${isSelected ? "text-white" : "text-gray-300"}`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
};

SpottedRestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SpottedRestaurantCard;
