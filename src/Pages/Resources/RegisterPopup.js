import React, { useState } from "react";

const RegisterPopup = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegisterClick = () => {
    setIsExpanded(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#1f2833",
        color: "#e0e0e0",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 255, 255, 0.2)",
        overflow: "hidden",
        width: isExpanded ? "500px" : "300px", 
        transition: "width 0.5s ease",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#66fcf1" }}>Exclusive Cybersecurity Resources</h2>
        <p
          style={{ color: "#c5c6c7", fontSize: "0.9rem", marginBottom: "20px" }}
        >
          Register to access more information.
        </p>

        {/* Initial Register Button */}
        {!isExpanded && (
          <button
            onClick={handleRegisterClick}
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
            Register Now
          </button>
        )}

        {/* Expanded Register Section */}
        {isExpanded && (
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "opacity 0.3s ease",
            }}
          >
            <p style={{ color: "#c5c6c7", fontSize: "0.9rem" }}>
              Choose a method to continue
            </p>

            <button
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#66fcf1",
                color: "#0f0f0f",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              Register with Google
            </button>

            <button
              style={{
                marginTop: "10px",
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
              Register with Email
            </button>
          </div>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "none",
          border: "none",
          color: "#e0e0e0",
          cursor: "pointer",
          fontSize: "1.5rem",
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default RegisterPopup;
