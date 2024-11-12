import React, { useState } from "react";
import { FiMail, FiPhone, FiEdit } from "react-icons/fi";
import profilePic from "../../images/image-1.png";
import Achievements from "./Achievements";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
import ProfileEditPopup from "./ProfileEditPopup";
import { FaRocket } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="py-20 bg-gray-900 text-white px-6 relative">
      {/* Profile Header */}
      <div className="text-center relative">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-[#66fcf1] mb-4 transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={toggleEditing}
          className="absolute top-2 right-2 p-2 bg-[#66fcf1] rounded-full text-gray-900 hover:bg-[#45a29e]"
        >
          <FiEdit />
        </button>
        <h2 className="text-3xl font-bold" style={{ color: "#66fcf1" }}>
          Alex Johnson
        </h2>
        <p className="text-gray-400 text-lg">
          Software Engineer & Club Volunteer
        </p>
      </div>

      {/* Contact Information */}
      <div className="flex justify-center mt-6 space-x-4">
        <div className="flex items-center space-x-2">
          <FiPhone className="text-xl text-[#66fcf1]" />
          <span className="text-gray-300">+1 (123) 456-7890</span>
        </div>
        <div className="flex items-center space-x-2">
          <FiMail className="text-xl text-[#66fcf1]" />
          <span className="text-gray-300">alex.johnson@example.com</span>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#66fcf1]">About Me</h3>
        <p className="text-gray-400 mt-4">
          Enthusiastic software engineer with a passion for developing
          innovative programs. Experienced in both frontend and backend
          development, I love contributing to the tech community through club
          activities and mentorship.
        </p>
      </div>

      {/* Skills Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-[#66fcf1] mb-6">
          Skills & Expertise
        </h3>
        <Skills />
      </div>

      {/* Achievements Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold text-center text-[#66fcf1] mb-6">
          Achievements & Projects
        </h3>
        <Achievements />
      </div>

      {/* Experience Timeline */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-center text-[#66fcf1] mb-6">
          Experience Timeline
        </h3>
        <div className="relative mt-4 flex items-center justify-center space-x-8 px-4 py-2">
          <FaRocket className="absolute left-0 text-[#66fcf1] text-4xl animate-bounce" />
          <ul className="flex space-x-8">
            <li className="flex flex-col items-center text-gray-300">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#66fcf1]">
                <span>2023 - Present</span>
              </div>
              <p className="mt-2">Software Engineer at XYZ Corp</p>
            </li>
            <li className="flex flex-col items-center text-gray-300">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#66fcf1]">
                <span>2021 - 2023</span>
              </div>
              <p className="mt-2">Frontend Developer at ABC Inc.</p>
            </li>
            <li className="flex flex-col items-center text-gray-300">
              <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[#66fcf1]">
                <span>2019 - 2021</span>
              </div>
              <p className="mt-2">Volunteer, Tech Community Programs</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-[#66fcf1] mb-4">
          Testimonials
        </h3>
        <p className="text-gray-400">
          "Alex has been a fantastic addition to our team, bringing both skill
          and energy to every project." - Jane Smith, Project Manager
        </p>
      </div>

      {/* Social Media Links */}
      <SocialMedia />

      {/* Edit Profile Popup */}
      {isEditing && <ProfileEditPopup onClose={toggleEditing} />}
    </div>
  );
};

export default Profile;
