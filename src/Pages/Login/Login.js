import React, { useState } from "react";
import bg from "../../images/banner.jpg";

const Login = () => {
  return (
    <div
      className="animate-flicker"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>
      {/* Animated Random Lines */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`line-${i}`}
          style={{
            position: "absolute",
            top: 0,
            left: `${i * 6}%`,
            width: "2px",
            height: "100%",
            backgroundColor: "#1c6f6a",
            opacity: 0.3,
            animation: "fade-in-out 3s ease-in-out infinite",
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* new card  */}
      <div
        className="shadow-2xl border-2 border-[#66fcf1]"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="animate-fade-in-up lg:max-w-2xl md:max-w-xl max-w-lg"
          style={{
            display: "flex",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#000",
          }}
        >
          {/* Left Section with Background Image and Text */}
          <div
            style={{
              flex: "1",
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              clipPath: "polygon(0 0, 95% 0, 65% 100%, 0% 100%)",
              width: 300,
            }}
          />

          {/* Right Section with Form */}
          <div
            style={{
              flex: "1",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#1f2833",
            }}
          >
            <h2
              style={{
                color: "#66fcf1",
                zIndex: 1,
              }}
              className="lg:text-3xl text-center mb-12 animate-fade-in"
            >
              Create your account
            </h2>
            {/* Spinning Lock Icon */}
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
                color: "#66fcf1",
                animation: "spin 5s linear infinite",
                display: "flex",
                justifyContent: "center",
              }}
            >
              🔒
            </div>
            {/* Input Fields */}
            <input
              type="text"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #c5c6c7",
                backgroundColor: "#1f2833",
                color: "#e0e0e0",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = "#0f0f0f";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = "#1f2833";
                e.target.style.transform = "scale(1)";
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "5px",
                border: "1px solid #c5c6c7",
                backgroundColor: "#1f2833",
                color: "#e0e0e0",
                transition: "transform 0.2s ease, background-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = "#0f0f0f";
                e.target.style.transform = "scale(1.02)";
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = "#1f2833";
                e.target.style.transform = "scale(1)";
              }}
            />

            {/* Checkbox */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <input
                type="checkbox"
                id="terms"
                style={{ marginRight: "10px" }}
              />
              <label htmlFor="terms" style={{ color: "#333" }}>
                By signing up, I agree with{" "}
                <span style={{ color: "#66fcf1", cursor: "pointer" }}>
                  Terms & Conditions
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
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
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.backgroundColor = "#45a29e";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "#66fcf1";
                }}
              >
                Sign Up
              </button>
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
                  transition: "transform 0.3s ease, background-color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.backgroundColor = "#45a29e";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.backgroundColor = "#66fcf1";
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }

          @keyframes fade-in-up {
            0% { transform: translateY(20px); opacity: 0.8; }
            100% { transform: translateY(0); opacity: 1; }
          }

          @keyframes fade-in-out {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }

          .animate-flicker {
            animation: flicker 3s infinite ease-in-out;
          }

          .animate-fade-in-up {
            animation: fade-in-up 1.5s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Login;
