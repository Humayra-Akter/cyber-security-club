import React from "react";

const Resources = () => {
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
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          color: "#66fcf1",
          marginBottom: "30px",
          position: "relative",
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
          position: "relative",
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
              position: "relative",
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
                backgroundColor: "#45a29e",
                color: "#0f0f0f",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              Register to Access
            </button>

            {/* Cyber Animation Effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(135deg, transparent, rgba(0, 255, 255, 0.2), transparent)",
                opacity: 0.3,
                animation: "cyber-glow 6s linear infinite",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Background Grid Animation */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "radial-gradient(circle, rgba(0,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          zIndex: 0,
        }}
      ></div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        @keyframes cyber-glow {
          0% {
            transform: translateX(-100%) skewX(-20deg);
          }
          50% {
            transform: translateX(100%) skewX(20deg);
          }
          100% {
            transform: translateX(-100%) skewX(-20deg);
          }
        }

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
