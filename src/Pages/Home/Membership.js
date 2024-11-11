import React, { useState, useEffect, useRef } from "react";
import { FaRocket, FaCheckCircle } from "react-icons/fa";

const Membership = () => {
  const [rocketPosition, setRocketPosition] = useState(0);
  const membershipRef = useRef(null);

  const handleScroll = () => {
    if (membershipRef.current) {
      const { top, bottom, height } =
        membershipRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate the percentage of the component that's currently visible
      if (top < viewportHeight && bottom > 0) {
        const visiblePart = Math.min(viewportHeight - top, height);
        const scrolledRatio =
          (viewportHeight - top) / (viewportHeight + height);
        setRocketPosition(scrolledRatio * height);
      } else if (bottom <= 0) {
        // When the component has scrolled out of view, set position to the end
        setRocketPosition(height);
      } else {
        // Before the component is fully in view, reset position to the start
        setRocketPosition(0);
      }
    }
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
    <div
      ref={membershipRef}
      className="relative bg-gray-900 text-white py-20 px-4 lg:px-16 overflow-hidden"
    >
      <h2
        style={{ color: "#66fcf1" }}
        className="text-3xl lg:text-4xl font-bold text-center mb-12 animate-fade-in"
      >
        Membership Plans & Perks
      </h2>

      {/* Rocket Animation */}
      <div
        className="absolute left-5 top-0 z-10"
        style={{
          transform: `translateY(${rocketPosition}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <FaRocket className="text-2xl text-red-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {memberships.map((membership, index) => (
          <div
            key={index}
            className="relative bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105"
          >
            <h3
              style={{ color: "#66fcf1" }}
              className="text-2xl font-bold  mb-4"
            >
              {membership.type}
            </h3>
            <p className="text-lg mb-4 text-gray-300">
              {membership.description}
            </p>
            <h4
              style={{ color: "#66fcf1" }}
              className="text-3xl font-bold mb-4"
            >
              {membership.price}
            </h4>
            <ul className="text-left text-gray-300 space-y-2 mb-6">
              {membership.perks.map((perk, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <FaCheckCircle style={{ color: "#66fcf1" }} />
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
