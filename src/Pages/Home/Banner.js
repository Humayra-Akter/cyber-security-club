import React from "react";
import banner from "../../images/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden text-white"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Distorted Animated Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className={`absolute bg-[#66fcf1] opacity-60 w-[2px] h-full animate-flicker line-${index}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`,
            }}
          ></div>
        ))}
      </div>
      {/* Main Text */}
      <div className="relative z-10 text-center px-4">
        <h1
          style={{ color: "#66fcf1" }}
          className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up"
        >
          Welcome to CyberSec Club
        </h1>
        <p className="text-lg md:text-2xl max-w-lg mx-auto animate-fade-in">
          Dive into the world of cyber security, where knowledge meets power.
        </p>
      </div>

      {/* Additional Description */}
      <div className="absolute bottom-8 z-10 text-center">
        <p className="text-gray-300 text-sm md:text-base lg:text-lg animate-fade-in-delay">
          Join us to learn, innovate, and secure a safer digital world.
        </p>
      </div>

      {/* Inline Styles for Animations */}
      <style jsx>{`
        @keyframes flicker {
          0%,
          100% {
            opacity: 0.2;
            transform: scaleY(1) translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: scaleY(1.5) translateY(-20px);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-flicker {
          animation: flicker 3s infinite ease-in-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .animate-fade-in-delay {
          animation: fade-in 3s ease-out forwards;
        }

        /* Randomized line animation delays */
        ${[...Array(15)].map(
          (_, i) => `.line-${i} { animation-delay: ${Math.random() * 2}s; }`
        )}
      `}</style>
    </div>
  );
};

export default Banner;
