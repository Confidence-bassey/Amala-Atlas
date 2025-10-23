import React from 'react';
import { FaUsers, FaMapPin, FaHeart } from 'react-icons/fa';

const stats = [
  {
    title: "Contributors",
    value: "1,200+",
    icon: <FaUsers className="text-blue-700" />,
    bg: "bg-gradient-to-br from-white to-blue-100",
  },
  {
    title: "Spots Mapped",
    value: "247",
    icon: <FaMapPin className="text-purple-700" />,
    bg: "bg-gradient-to-br from-white to-purple-100",
  },
  {
    title: "Countries",
    value: "43",
    icon: <FaHeart className="text-gray-700" />,
    bg: "bg-gradient-to-br from-white to-yellow-100",
  },
];

export default function StatsCards() {
  return (
    <section className="w-full py-16 px-4 md:px-12 bg-gradient-to-r from-[#e8eff8] via-[#fdf5cc] to-[#e8eff8] text-center">
      {/* <section className="w-full py-16 px-4 md:px-12 bg-gradient-to-br from-[#fdf7f9] to-[#f0f4fb] text-center"> */}
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-2">Our Number</h2>
      <p className="text-gray-600 mb-10">
        Here’s how we have been doing across the globe
      </p>

      {/* Stat Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-5xl mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative rounded-xl shadow-sm p-6 flex-1 ${stat.bg}`}
          >
            {/* Icon */}
            <div className="absolute top-4 right-4 text-xl">
              {stat.icon}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
            <h3 className="text-2xl font-semibold">{stat.value}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
