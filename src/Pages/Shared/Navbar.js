import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-green-500 font-bold text-xl">CyberSec Club</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <a
            href="#home"
            className="hover:text-green-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#resources"
            className="hover:text-green-500 transition duration-300"
          >
            Resources
          </a>
          <a
            href="#events"
            className="hover:text-green-500 transition duration-300"
          >
            Events
          </a>
          <a
            href="#contact"
            className="hover:text-green-500 transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Dropdown and Icons */}
        <div className="flex items-center space-x-4">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white hover:text-green-500 transition duration-300 focus:outline-none"
            >
              <FaUser className="text-lg" />
              <span>Profile</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-md w-40">
                <li>
                  <a
                    href="#profile"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-500 transition duration-300"
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    href="#settings"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-500 transition duration-300"
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href="#logout"
                    className="block px-4 py-2 hover:bg-gray-700 hover:text-green-500 transition duration-300"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Icons */}
          <a
            href="#home"
            className="text-white hover:text-green-500 transition duration-300"
          >
            <FaHome className="text-xl" />
          </a>
          <a
            href="#settings"
            className="text-white hover:text-green-500 transition duration-300"
          >
            <FaCog className="text-xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
