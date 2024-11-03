import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-700 font-bold text-xl">CyberSec Club</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="#home"
            className="hover:text-green-700 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="#resources"
            className="hover:text-green-700 transition duration-300"
          >
            Resources
          </Link>
          <Link
            to="#events"
            className="hover:text-green-700 transition duration-300"
          >
            Events
          </Link>
          <Link
            to="#contact"
            className="hover:text-green-700 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Dropdown and Icons */}
        <div className="flex items-center space-x-4">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white hover:text-green-700 transition duration-300 focus:outline-none"
            >
              <FaUser className="text-lg" />
              <span>Profile</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-md w-40">
                <li>
                  <Link
                    to="#profile"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-700 transition duration-300"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="#settings"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-700 transition duration-300"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="#logout"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-700 transition duration-300"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Icons */}
          <Link
            to="#home"
            className="text-white hover:text-green-700 transition duration-300"
          >
            <FaHome className="text-xl" />
          </Link>
          <Link
            to="#settings"
            className="text-white hover:text-green-700 transition duration-300"
          >
            <FaCog className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
