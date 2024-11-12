import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const location = useLocation();

  // Get the index of the currently active link based on the route
  const activeIndex = ["home", "resources", "events", "contact"].indexOf(
    location.pathname.split("/")[1]
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "Resources", path: "/resources" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/home"
          style={{ color: "#66fcf1" }}
          className="font-bold text-xl"
        >
          CyberSec Club
        </Link>

        {/* Navigation Links (Visible on large screens) */}
        <div className="relative hidden md:flex space-x-6 items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-2 py-1 transition duration-300 ${
                index === activeIndex || index === hoveredIndex
                  ? "text-white"
                  : "text-gray-400"
              }`}
              style={{ color: index === activeIndex ? "#66fcf1" : undefined }}
            >
              {item.name}
              {/* Underline bar */}
              {(hoveredIndex === index || activeIndex === index) && (
                <span
                  className="absolute left-0 bottom-0 h-0.5 bg-[#66fcf1] transition-all duration-300 ease-in-out"
                  style={{
                    width: "100%",
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Dropdown Menu and Icons */}
        <div className="flex items-center space-x-4">
          {/* Dropdown for small/medium screens */}
          <div className="relative md:hidden">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 transition transform duration-300 hover:scale-105 hover:text-[#66fcf1]"
              style={{ color: "#66fcf1" }}
            >
              <FaUser className="text-lg" />
              <span>Profile</span>
              <FaChevronDown className="text-sm" />
            </button>
            {isDropdownOpen && (
              <ul
                className="absolute right-0 mt-2 bg-gray-800 text-white shadow-lg rounded-md w-40 transition-opacity duration-300 ease-out"
                style={{
                  opacity: isDropdownOpen ? 1 : 0,
                }}
              >
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                      style={{ color: "#66fcf1" }}
                      onClick={closeDropdown} // Close dropdown after selecting an option
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    style={{ color: "#66fcf1" }}
                    onClick={closeDropdown} // Close dropdown after selecting an option
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 hover:bg-gray-700 transition duration-300"
                    style={{ color: "#66fcf1" }}
                    onClick={closeDropdown} // Close dropdown after selecting an option
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* Visible on large screens only */}
          <div className="hidden md:flex items-center space-x-4">
            
            <Link
              to="/settings"
              className="text-white transition transform duration-300 hover:scale-105 hover:text-[#66fcf1]"
            >
              <FaCog className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
