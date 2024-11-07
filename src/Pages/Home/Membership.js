import React, { useState, useEffect } from "react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Membership = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const memberships = [
    {
      type: "Free Resource Access",
      description: "Get access to curated cybersecurity resources.",
      price: "Free",
      perks: ["E-books", "Articles", "Research Papers", "Community Access"],
    },
    {
      type: "3-Month Course",
      description: "Comprehensive learning for beginners.",
      price: "2000 BDT",
      perks: ["Hands-on Projects", "One-on-One Mentoring", "Community Access"],
    },
    {
      type: "6-Month Course",
      description: "Advanced course with certifications.",
      price: "5000 BDT",
      perks: [
        "Capstone Project",
        "Mentorship",
        "Advanced Resources",
        "Certifications",
      ],
    },
  ];

  return (
    <div className="relative bg-gray-900 text-white py-20 px-4 lg:px-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-green-400 animate-fade-in">
        Membership Plans & Perks
      </h2>

      {/* Rocket Animation */}
      <div className="fixed left-5 top-1/2 transform -translate-y-1/2 z-10">
        <FaRocket
          style={{
            fontSize: "2rem",
            color: "#FF5722",
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: "transform 0.1s ease-in-out",
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-green-300 mb-4">
              {membership.type}
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              {membership.description}
            </p>
            <h4 className="text-3xl font-bold text-green-400 mb-4">
              {membership.price}
            </h4>
            <ul className="text-left text-gray-300 space-y-2 mb-6">
              {membership.perks.map((perk, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-400" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Animated Rocket Line */}
      <div className="absolute left-10 top-0 h-full w-1 bg-gray-700 z-0" />

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Membership;
