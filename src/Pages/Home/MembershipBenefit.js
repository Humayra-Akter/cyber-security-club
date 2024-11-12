import React from "react";
import {
  FaShieldAlt,
  FaUserGraduate,
  FaRocket,
  FaHandsHelping,
  FaLaptopCode,
} from "react-icons/fa";

const MembershipBenefit = () => {
  const benefits = [
    {
      icon: <FaShieldAlt />,
      title: "Top-Notch Security",
      description:
        "Gain access to the latest security measures and best practices.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Exclusive Learning",
      description:
        "Enhance your skills with courses and workshops led by experts.",
    },
    {
      icon: <FaRocket />,
      title: "Career Growth",
      description:
        "Boost your career with exclusive job offers and certifications.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Community Support",
      description: "Join a supportive community of like-minded professionals.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Advanced Tools",
      description: "Use cutting-edge tools to stay ahead in the field.",
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 py-12 px-6 lg:px-16">
      <h2
        style={{
          color: "#66fcf1",
          marginTop: "40px",
          zIndex: 1,
        }}
        className="text-3xl lg:text-4xl text-center mb-12 animate-fade-in"
      >
        Membership Benefits
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col items-center text-center space-y-4 transform transition duration-300 hover:scale-105"
          >
            <div style={{ color: "#66fcf1" }} className="text-5xl">
              {benefit.icon}
            </div>
            <h3 style={{ color: "#66fcf1" }} className="text-xl font-semibold">
              {benefit.title}
            </h3>
            <p className="text-gray-300">{benefit.description}</p>
          </div>
        ))}
      </div>
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

export default MembershipBenefit;
