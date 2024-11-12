import React from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaUserShield,
  FaRedoAlt,
  FaThumbsUp,
} from "react-icons/fa";
import CountUp from "react-countup";

const Tokens = () => {
  const stats = [
    {
      end: 3000,
      suffix: "K+",
      label: "Cyber Security Projects",
      icon: <FaProjectDiagram />,
    },
    { end: 151, suffix: "+", label: "Customers Globally", icon: <FaUsers /> },
    {
      end: 300,
      suffix: "+",
      label: "Cyber Security Experts",
      icon: <FaUserShield />,
    },
    {
      end: 150,
      suffix: "%",
      label: "Client Retention Rate",
      icon: <FaRedoAlt />,
    },
    { end: 15, suffix: "%", label: "Success Rate", icon: <FaThumbsUp /> },
  ];

  return (
    <div className="lg:flex bg-gray-900 p-8 rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-10">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-8 text-center bg-gray-800 rounded-lg shadow-md flex-1 flex flex-col items-center space-y-4"
        >
          <div style={{ color: "#66fcf1" }} className="text-5xl animate-pulse">
            {stat.icon}
          </div>
          <h1
            style={{
              color: "#66fcf1",
              zIndex: 1,
            }}
            className="lg:text-4xl"
          >
            <CountUp
              start={0}
              end={stat.end}
              duration={2.5}
              suffix={stat.suffix}
            />
          </h1>
          <p className="text-gray-300 text-sm font-semibold mt-2">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Tokens;
