import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const RegisterPopup = ({ onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleRegisterClick = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(5px)",
          zIndex: 999,
        }}
      />

      {/* Popup Container */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          backgroundColor: "#1f2833",
          color: "#e0e0e0",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 255, 255, 0.2)",
          overflow: "hidden",
          width: isExpanded ? "700px" : "400px",
          transition: "width 0.5s ease",
          zIndex: 1000,
          height: isExpanded ? "350px" : "200px",
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Left Side: Benefits Card */}
        <div
          style={{
            padding: "30px",
            textAlign: "center",
            width: isExpanded ? "50%" : "100%",
            transition: "width 0.5s ease",
          }}
        >
          <h2 style={{ color: "#66fcf1" }}>
            Exclusive Cybersecurity Resources
          </h2>
          <p
            style={{
              color: "#c5c6c7",
              fontSize: "0.9rem",
              marginBottom: "20px",
            }}
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
                backgroundColor: "#66fcf1",
                color: "#0f0f0f",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
            >
              Register Now
            </button>
          )}
        </div>

        {/* Right Side: Registration Form */}
        {isExpanded && (
          <div
            style={{
              padding: "20px",
              textAlign: "center",
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "opacity 0.5s ease",
            }}
          >
            <h3 style={{ color: "#66fcf1", marginBottom: "15px" }}>Register</h3>

            <button
              style={{
                marginBottom: "15px",
                padding: "10px 20px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#66fcf1",
                color: "#0f0f0f",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <FontAwesomeIcon icon={faGoogle} />
              Register with Google
            </button>

            <div style={{ width: "100%" }}>
              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #c5c6c7",
                  backgroundColor: "#1f2833",
                  color: "#e0e0e0",
                }}
              />
              <input
                type="password"
                placeholder="Password"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #c5c6c7",
                  backgroundColor: "#1f2833",
                  color: "#e0e0e0",
                }}
              />
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "#66fcf1",
                  color: "#0f0f0f",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Register
              </button>{" "}
              <p
                style={{
                  color: "#c5c6c7",
                  fontSize: "0.9rem",
                  marginBottom: "20px",
                  marginTop: 20,
                }}
              >
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#66fcf1" }}>
                  Login
                </Link>
              </p>
            </div>
          </div>
        )}

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

      {/* Media Query for Small Screen */}
      <style jsx>{`
        @media (max-width: 768px) {
          .popup-container {
            width: 90vw;
            height: auto;
            padding: 20px;
          }

          .benefits-card,
          .registration-form {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPopup;
