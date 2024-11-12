import React from "react";

const Important = () => {
  return (
    <div className="relative h-[600px] flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      {/* Background Overlay for Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c6f6a] to-transparent opacity-90"></div>

      {/* Animated Heading */}
      <h1
        style={{
          color: "#66fcf1",
          zIndex: 1,
        }}
        className="relative text-5xl lg:text-6xl mb-6 z-50 animate-glow"
      >
        Why Cyber Security Is Important?
      </h1>

      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-green-700 via-transparent to-transparent animate-expand"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-green-800 animate-expand-reverse"></div>

      {/* Paragraph Section */}
      <div
        className="relative z-10 text-center max-w-4xl"
      >
        <p className="text-lg md:text-2xl mb-6 opacity-0 animate-fade-in">
          Cybersecurity plays a crucial role in today's interconnected world.
          With the surge in digital activities, it protects sensitive data from
          cyberattacks, breaches, and theft.
        </p>
        <p className="text-lg md:text-2xl mb-6 opacity-0 animate-fade-in-delay">
          Without adequate security, personal data, intellectual property, and
          financial assets are vulnerable. Cybersecurity ensures the safety of
          our systems, preventing unauthorized access, data manipulation, and
          digital attacks.
        </p>
        <p className="text-lg md:text-2xl opacity-0 animate-fade-in-late">
          In a world where cybercrime is on the rise, being secure online is
          more important than ever. Secure your future, secure your data.
        </p>
      </div>

      {/* Style for Animations */}
      <style jsx>{`
        @keyframes glow {
          0% {
            text-shadow: 0 0 10px rgba(0, 200, 0, 0.7),
              0 0 20px rgba(0, 200, 0, 0.7), 0 0 30px rgba(0, 200, 0, 0.7);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 200, 0, 1),
              0 0 40px rgba(0, 200, 0, 1), 0 0 60px rgba(0, 200, 0, 1);
          }
          100% {
            text-shadow: 0 0 10px rgba(0, 200, 0, 0.7),
              0 0 20px rgba(0, 200, 0, 0.7), 0 0 30px rgba(0, 200, 0, 0.7);
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        .animate-glow {
          animation: glow 2.5s infinite ease-in-out;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 1s;
        }

        .animate-fade-in-late {
          animation: fadeIn 1.5s ease-out forwards;
          animation-delay: 1.5s;
        }

        .animate-expand {
          animation: expand 2s ease-out forwards;
        }

        .animate-expand-reverse {
          animation: expand 2s ease-out forwards;
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Important;
