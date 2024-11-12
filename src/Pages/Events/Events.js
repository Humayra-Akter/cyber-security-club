import React from "react";
import { FaEye } from "react-icons/fa";
import img1 from "../../images/TechConference.jpg";
import img2 from "../../images/TechConference2.jpg";
import img3 from "../../images/WebDevelopmentWorkshop.jpg";
import img4 from "../../images/WebDevelopmentWorkshop2.jpg";
import img5 from "../../images/MachineLearningSummit.jpg";
import img6 from "../../images/MachineLearningSummit2.jpg";

const events = [
  {
    title: "Tech Conference 2024",
    date: "March 14, 2024",
    image: img1,
    hoverImage: img2,
    description:
      "Join industry leaders and innovators for an exciting tech conference to discuss the future of technology.",
  },
  {
    title: "Web Development Workshop",
    date: "April 10, 2024",
    image: img3,
    hoverImage: img4,
    description:
      "A hands-on workshop where you will learn the latest in web development tools and techniques.",
  },
  {
    title: "AI & Machine Learning Summit",
    date: "May 25, 2024",
    image: img5,
    hoverImage: img6,
    description:
      "Dive deep into AI and machine learning with experts from around the world.",
  },
];

const Events = () => {
  return (
    <div className="py-20 bg-gray-900 text-white">
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#66fcf1",
          marginTop: "10px",
          zIndex: 1,
        }}
        className="text-center mb-12"
      >
        Upcoming Events
      </h2>

      <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative p-6 bg-gradient-to-br from-gray-800 to-[#1c6f6a] rounded-lg shadow-lg hover:scale-105 transform transition duration-500 ease-in-out h-[480px] flex flex-col"
          >
            {/* Image Container with Hover Effect */}
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md group">
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
              />
              <img
                src={event.hoverImage}
                alt={`${event.title} - Hover`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
              />
              {/* Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaEye className="text-3xl text-white" />
              </div>
            </div>

            {/* Event Details */}
            <h3 className="text-2xl font-semibold text-[#66fcf1] mb-2">
              {event.title}
            </h3>
            <p className="text-sm text-gray-400 mb-2">{event.date}</p>
            <p className="text-base text-white flex-grow">
              {event.description}
            </p>

            {/* Read More Button (fixed at the bottom of each card) */}
            <div className="justify-end items-end flex">
              <button
                className="mt-4 w-1/2 py-1 bg-[#66fcf1] text-black font-semibold rounded-md hover:bg-[#1c6f6a] transition duration-300"
                onClick={() => alert(`Read more about ${event.title}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
