import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import profilePic from "../../images/image-1.png";
import Achievements from "./Achievements";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";

const Profile = () => {
  return (
    <div className="py-20 bg-gray-900 text-white px-6">
      {/* Profile Header */}
      <div className="text-center">
        <img
          src={profilePic}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-[#66fcf1] mb-4 transition-transform duration-300 hover:scale-105"
        />
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

      {/* Social Media Links */}
     <SocialMedia/>
    </div>
  );
};

export default Profile;
