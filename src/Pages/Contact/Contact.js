import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import map from "../../images/map.jpg";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-900 text-white px-6">
      {/* Header */}
      <h2
        className="text-center mb-12"
        style={{
          fontSize: "2.5rem",
          color: "#66fcf1",
          marginTop: "10px",
          position: "relative",
          zIndex: 1,
        }}
      >
        Contact Us
      </h2>

      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#66fcf1]">
            Get in Touch
          </h3>
          <p className="text-gray-400">
            We'd love to hear from you! Whether you have a question about
            events, volunteering, or anything else, our team is ready to answer
            all your inquiries.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <FiPhone className="text-xl text-[#66fcf1] mr-4" />
              <span className="text-lg text-gray-300">+1 (234) 567-8901</span>
            </div>
            <div className="flex items-center">
              <FiMail className="text-xl text-[#66fcf1] mr-4" />
              <span className="text-lg text-gray-300">info@clubname.org</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-xl text-[#66fcf1] mr-4" />
              <span className="text-lg text-gray-300">
                1234 Club St, City, Country
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-[#66fcf1] hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-[#66fcf1] hover:text-white text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#66fcf1] hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#66fcf1] hover:text-white text-2xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-gray-800 to-[#1c6f6a] p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-200 text-sm mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              />
            </div>
            <div>
              <label
                className="block text-gray-200 text-sm mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              />
            </div>
            <div>
              <label
                className="block text-gray-200 text-sm mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 bg-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#66fcf1]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-[#66fcf1] text-black font-semibold rounded-md hover:bg-[#1c6f6a] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map or Location Section */}
      <div className="mt-20 text-center">
        <h3 className="text-xl font-semibold text-[#66fcf1] mb-4">
          Our Location
        </h3>
        <p className="text-gray-400 mb-4">
          Find us at our main office for any in-person inquiries.
        </p>
        <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
          {/* Replace this with an embedded Google Map iframe or a placeholder image */}
          <img
            src={map}
            alt="Map Location"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
