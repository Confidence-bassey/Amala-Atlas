import React from "react";
import logoaa from "../assets/logoaa.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-white to-gray-50 shadow-sm">

      <div className="flex items-center space-x-2">
        <img
          src={logoaa}
          alt="AmalaAtlas Logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-semibold text-[#0C2E8A]">AmalaAtlas</span>
      </div>

      <div className="hidden md:flex items-center space-x-8">
        <Link to="/explore" className="text-gray-800 hover:text-[#0C2E8A]">
          Explore
        </Link>
        <Link to="/submit" className="text-gray-800 hover:text-[#0C2E8A]">
          Submit
        </Link>
        <a
          href="https://github.com/your-repo" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-[#0C2E8A]"
        >
          GitHub
        </a>
         <Link
          to="/agent"
          className="bg-[#0C2E8A] text-white px-5 py-2 rounded-full hover:bg-[#0A256E] transition"
        >
          Try Agent
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

