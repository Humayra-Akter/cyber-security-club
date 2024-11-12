import React, { useState } from "react";
import { FiMail, FiPhone, FiEdit } from "react-icons/fi";
import profilePic from "../../images/image-1.png";

const ProfileEditPopup = ({ onClose }) => {
  const [editPic, setEditPic] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleUpload = () => {
    setShowSuccessModal(true);
    setTimeout(() => {
      setShowSuccessModal(false);
      setEditPic(false);
      onClose();
    }, 1500); // Auto-close after 1.5 seconds
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md p-4">
      <div
        className={`relative bg-gray-800 text-white rounded-lg p-8 transition-all duration-500 overflow-hidden w-full max-w-xl lg:max-w-2xl ${
          editPic ? "animate-expand" : "animate-shrink"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-300 hover:text-white px-1 rounded-full hover:bg-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Content wrapper */}
        <div
          className={`flex flex-col lg:flex-row lg:space-x-4 ${
            editPic ? "px-7" : "flex items-center justify-center"
          }`}
        >
          {/* Profile Edit Info */}
          <div
            className={`transition-transform duration-500 ${
              editPic ? "animate-slide-left opacity-80" : ""
            }`}
          >
            <div className="text-center relative">
              <img
                src={profilePic}
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-[#66fcf1] mb-4"
              />
              <button
                onClick={() => setEditPic(!editPic)}
                className="absolute bottom-0 right-0 p-2 bg-[#66fcf1] rounded-full text-gray-900 hover:bg-[#45a29e]"
              >
                <FiEdit />
              </button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2 border-b-2 border-[#66fcf1] p-2">
                <FiPhone className="text-xl text-[#66fcf1]" />
                <input
                  type="text"
                  defaultValue="+1 (123) 456-7890"
                  className="bg-transparent text-gray-300 w-full focus:outline-none"
                />
              </div>
              <div className="flex items-center space-x-2 border-b-2 border-[#66fcf1] p-2">
                <FiMail className="text-xl text-[#66fcf1]" />
                <input
                  type="email"
                  defaultValue="alex.johnson@example.com"
                  className="bg-transparent text-gray-300 w-full focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Profile Picture Upload */}
          {editPic && (
            <div className="w-2/3 bg-gray-700 p-6 rounded-md shadow-lg animate-fade-in mt-4 lg:mt-0">
              <h3 className="text-lg font-semibold text-[#66fcf1] mb-4">
                Update Profile Picture
              </h3>
              <input
                type="file"
                className="w-full hover:bg-slate-800 rounded-lg text-gray-300 mb-4 file:bg-[#66fcf1] file:text-black file:rounded file:py-2 file:px-4"
              />
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-500 py-2 px-4 rounded-md text-white hover:bg-gray-600"
                  onClick={() => setEditPic(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#66fcf1] py-2 px-4 rounded-md text-gray-900 hover:bg-[#45a29e]"
                  onClick={handleUpload}
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-gray-800 text-white rounded-lg p-6">
              <p className="text-lg text-center">Upload Successful!</p>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slide-left {
            from { transform: translateX(0); }
            to { transform: translateX(-20%); }
          }
          @keyframes expand {
            from { width: 32rem; }
            to { width: 48rem; }
          }
          @keyframes shrink {
            from { width: 48rem; }
            to { width: 32rem; }
          }
          .animate-fade-in {
            animation: fade-in 0.5s ease forwards;
          }
          .animate-slide-left {
            animation: slide-left 0.5s ease forwards;
          }
          .animate-expand {
            animation: expand 0.5s ease forwards;
          }
          .animate-shrink {
            animation: shrink 0.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default ProfileEditPopup;
