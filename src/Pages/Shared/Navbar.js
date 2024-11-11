import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div style={{ color: "#66fcf1" }} className="font-bold text-xl">
          CyberSec Club
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {["Home", "Resources", "Events", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="hover:text-gray-200 transition transform duration-300 hover:scale-105"
              style={{ color: "#66fcf1" }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Dropdown and Icons */}
        <div className="flex items-center space-x-4">
          {/* Dropdown Menu */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white transition transform duration-300 hover:scale-105"
              style={{ color: "#66fcf1" }}
            >
              <FaUser className="text-lg" />
              <span>Profile</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <ul
                className="fixed right-4 mt-2 bg-gray-800 text-white shadow-lg rounded-md w-40 transition-transform transform duration-500 ease-out"
                style={{
                  transform: isDropdownOpen
                    ? "translateY(0)"
                    : "translateY(-10px)",
                  opacity: isDropdownOpen ? 1 : 0,
                }}
              >
                <li>
                  <Link
                    to="/profile"
                    style={{ color: "#66fcf1" }}
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    style={{ color: "#66fcf1" }}
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    style={{ color: "#66fcf1" }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Icons */}
          <Link
            to="/home"
            style={{ color: "#66fcf1" }}
            className="text-white transition transform duration-300 hover:scale-105"
          >
            <FaHome className="text-xl" />
          </Link>
          <Link
            to="/settings"
            style={{ color: "#66fcf1" }}
            className="text-white transition transform duration-300 hover:scale-105"
          >
            <FaCog className="text-xl" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
