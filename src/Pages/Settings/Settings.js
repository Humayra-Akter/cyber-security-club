import React, { useState } from "react";
import {
  FiMoon,
  FiSun,
  FiUser,
  FiLock,
  FiBell,
  FiChevronRight,
} from "react-icons/fi";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotifications(!notifications);
  const openPasswordModal = () => setIsPasswordModalOpen(true);
  const closePasswordModal = () => setIsPasswordModalOpen(false);

  return (
    <div className="p-6 min-h-screen text-gray-900 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-semibold mb-8 text-center">Settings</h1>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg mb-4 shadow">
          <div className="flex items-center space-x-2">
            {darkMode ? (
              <FiMoon
                style={{
                  color: "#66fcf1",
                  zIndex: 1,
                }}
              />
            ) : (
              <FiSun
                style={{
                  color: "#66fcf1",
                  zIndex: 1,
                }}
              />
            )}
            <span
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            >
              Dark Mode
            </span>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg font-medium ${
              darkMode ? "bg-[#66fcf1] text-black" : "bg-gray-300 text-white"
            }`}
          >
            {darkMode ? "On" : "Off"}
          </button>
        </div>

        {/* Notifications Toggle */}
        <div className="flex items-center justify-between p-4 bg-slate-600 rounded-lg mb-4 shadow">
          <div className="flex items-center space-x-2">
            <FiBell
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            />
            <span
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            >
              Notifications
            </span>
          </div>
          <button
            onClick={toggleNotifications}
            className={`px-4 py-2 rounded-lg font-medium ${
              notifications
                ? "bg-[#66fcf1] text-gray-900"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {notifications ? "On" : "Off"}
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Account Information */}
        <div className="relative p-4 bg-slate-600 rounded-lg mb-4 shadow">
          <div className="flex items-center space-x-2 mb-2">
            <FiUser
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            />
            <h2
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
              className="font-semibold text-lg"
            >
              Account Information
            </h2>
          </div>
          <button
            onClick={() => (window.location.href = "/profile")}
            className="absolute top-4 right-4 bg-[#66fcf1] text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-[#45a29e]"
          >
            Edit Profile
          </button>
          <p className="text-white dark:text-gray-400 mb-2">
            Username: Alex Johnson
          </p>
          <p className="text-white dark:text-gray-400">
            Email: alex.johnson@example.com
          </p>
        </div>

        {/* Change Password */}
        <div className="relative p-4 mb-4 bg-slate-600 rounded-lg shadow">
          <div className="flex items-center space-x-2 mb-2">
            <FiLock
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            />
            <h2
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
              className="font-semibold text-lg"
            >
              Change Password
            </h2>
          </div>
          <button
            onClick={openPasswordModal}
            className="absolute top-4 right-4 bg-[#66fcf1] text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-[#45a29e]"
          >
            Update Password
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-5">
        {/* Additional Settings */}
        <div className="p-4 bg-slate-600 rounded-lg mb-4 shadow">
          <div className="flex items-center space-x-2">
            <FiChevronRight
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            />
            <span
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            >
              Language
            </span>
          </div>
          <select className="mt-2 w-full bg-slate-300 px-3 py-2 border rounded-lg">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        <div className="p-4 bg-slate-600 rounded-lg mb-4 shadow">
          <div className="flex items-center space-x-2">
            <FiChevronRight
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            />
            <span
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
            >
              Privacy Settings
            </span>
          </div>
          <p className="mt-2 text-white dark:text-gray-400">
            Manage your data and activity settings.
          </p>
        </div>
      </div>

      {/* Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-1/3 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <input
              type="password"
              placeholder="New Password"
              className="w-full mb-3 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mb-3 px-3 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
            />
            <div className="flex justify-end">
              <button
                onClick={closePasswordModal}
                className="bg-red-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-red-600"
              >
                Cancel
              </button>
              <button className="bg-[#66fcf1] text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-[#45a29e]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
