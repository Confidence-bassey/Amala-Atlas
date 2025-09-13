import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 border-b border-gray-700 pb-10">
        {/* Left section */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="text-blue-700 text-2xl font-bold">🅰</div>
            <span className="text-2xl font-bold text-blue-700">Amala</span>
            <span className="text-2xl font-bold text-white">Atlas</span>
          </div>
          <p className="text-gray-300 mb-6">
            Mapping the world's hidden Amala spots, one community contribution at a time.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-[#1877F2] p-3 rounded-full text-white hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-[#0077B5] p-3 rounded-full text-white hover:scale-110 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-[#1DA1F2] p-3 rounded-full text-white hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-[#FF0000] p-3 rounded-full text-white hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Center - Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Right - Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contacts</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>Support@amalaatlas.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-500" />
              <span>+234 800 CALL AMALAATLAS</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>20 Bendel Close, Lagos, Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="max-w-7xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 AMALAATLAS. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
