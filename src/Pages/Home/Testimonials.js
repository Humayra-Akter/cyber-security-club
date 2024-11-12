import React, { useState } from "react";
import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    text: "This service is absolutely fantastic! It has made my workflow so much easier.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    text: "Amazing experience! Their attention to detail and support is unparalleled.",
    rating: 4,
  },
  {
    name: "Alex Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    text: "Couldn't have asked for a better product. Highly recommended!",
    rating: 5,
  },
  {
    name: "Samantha Brown",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "A game-changer in the industry. The team's support has been phenomenal!",
    rating: 5,
  },
  {
    name: "Michael Lee",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    text: "I would highly recommend this service to anyone. Excellent results every time!",
    rating: 4,
  },
  {
    name: "Sarah Wilson",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "Professional and efficient. Truly top-notch service.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative flex flex-col items-center py-20 bg-gray-900 text-white overflow-hidden">
      <h2
        style={{
          color: "#66fcf1",
          marginTop: "40px",
          zIndex: 1,
        }}
        className="text-3xl text-center mb-12"
      >
        What Our Clients Say
      </h2>

      {/* Arrow Controls - Outside the Card */}
      <div className="flex justify-between w-full max-w-5xl">
        <button
          onClick={handlePrev}
          style={{ color: "#66fcf1" }}
          className="text-3xl hover:text-green-200 focus:outline-none"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-3xl text-green-400 hover:text-green-200 focus:outline-none"
        >
          <FaChevronRight />
        </button>
      </div>

      <div
        className="relative w-full max-w-4xl mx-auto p-8 bg-gradient-to-br from-gray-800 to-[#66fcf1] rounded-lg shadow-lg overflow-hidden transform transition duration-500 ease-in-out scale-95 hover:scale-100"
        style={{ animation: "fadeIn 1s ease-in-out" }}
      >
        {/* Background Glow Effect */}
        <div className="absolute -inset-3 rounded-lg bg-gradient-to-r from-green-500 via-blue-500 to-blue-500 opacity-30 blur-lg"></div>

        {/* Quote Icon */}
        <FaQuoteLeft className="absolute top-4 left-4 text-5xl text-green-400 opacity-50" />

        {/* Avatar */}
        <img
          src={testimonials[current].avatar}
          alt={testimonials[current].name}
          className="absolute top-6 right-6 w-16 h-16 rounded-full border-4 border-white shadow-lg"
        />

        {/* Testimonial Content */}
        <div className="relative">
          {/* Testimonial Text */}
          <p className="mt-10 text-lg font-medium text-center transition-opacity duration-500 opacity-100">
            {testimonials[current].text}
          </p>

          {/* Star Rating */}
          <div className="flex justify-center mt-6 space-x-1">
            {Array.from({ length: testimonials[current].rating }).map(
              (_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              )
            )}
          </div>
        </div>
      </div>

      {/* Inline CSS for background animation */}
      <style jsx>{`
        @keyframes glow {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-glow {
          animation: glow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
