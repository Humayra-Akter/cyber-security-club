// Resources.js
import React, { useState } from "react";
import RegisterPopup from "./RegisterPopup";

const Resources = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const resources = [
    {
      id: 1,
      title: "Cybersecurity Basics",
      description:
        "Learn the fundamentals of cybersecurity and why it matters.",
    },
    {
      id: 2,
      title: "Network Security",
      description:
        "An introduction to securing networks from unauthorized access.",
    },
    {
      id: 3,
      title: "Threat Analysis",
      description: "Understand how to identify and assess security threats.",
    },
    {
      id: 4,
      title: "Cryptography Essentials",
      description: "Explore encryption techniques to secure data.",
    },
    {
      id: 5,
      title: "Ethical Hacking",
      description:
        "Learn about ethical hacking techniques to find vulnerabilities.",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "#e0e0e0",
        backgroundColor: "#0f0f0f",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#66fcf1",
          marginBottom: "20px",
          marginTop: "40px",
          zIndex: 1,
        }}
      >
        Cybersecurity Resources
      </h1>
      <p
        style={{
          color: "#c5c6c7",
          fontSize: "1.1rem",
          marginBottom: "40px",
        }}
      >
        Register to access exclusive resources on cybersecurity.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          zIndex: 1,
        }}
      >
        {resources.map((resource) => (
          <div
            key={resource.id}
            style={{
              padding: "20px",
              borderRadius: "10px",
              backgroundColor: "#1f2833",
              boxShadow: "0 8px 16px rgba(0, 255, 255, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              overflow: "hidden",
            }}
            className="resource-card"
          >
            <h2
              style={{
                fontSize: "1.5rem",
                color: "#66fcf1",
                marginBottom: "10px",
              }}
            >
              {resource.title}
            </h2>
            <p
              style={{
                color: "#c5c6c7",
                fontSize: "1rem",
                marginBottom: "20px",
              }}
            >
              {resource.description}
            </p>
            <button
              style={{
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#0f0f0f",
                color: "#66fcf1",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => setIsPopupVisible(true)}
            >
              Register to Access
            </button>
          </div>
        ))}
      </div>

      {isPopupVisible && (
        <RegisterPopup onClose={() => setIsPopupVisible(false)} />
      )}

      <style jsx>{`
        .resource-card:hover {
          transform: scale(1.05);
          box-shadow: 0 12px 24px rgba(0, 255, 255, 0.2);
        }
        button:hover {
          transform: translateY(-3px);
        }
      `}</style>
    </div>
  );
};

export default Resources;
