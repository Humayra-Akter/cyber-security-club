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
            backgroundColor: "#66fcf1",
            opacity: 0.3,
            animation: "fade-in-out 3s ease-in-out infinite",
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          backdropFilter: "blur(5px)",
          zIndex: 1,
        }}
      />

      {/* Login Card with Torn Border */}
      <div
        className="animate-fade-in-up"
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#1f2833",
          color: "#e0e0e0",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
          width: "90%",
          maxWidth: "400px",
          clipPath:
            "polygon(0% 10%, 4% 0%, 96% 0%, 100% 10%, 100% 90%, 96% 100%, 4% 100%, 0% 90%)",
          transition: "clip-path 0.5s ease",
        }}
      >
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

        <h2 style={{ marginBottom: "15px", color: "#66fcf1" }}>Login</h2>

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

        {/* Login Button */}
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
            0% { transform: translateY(20px); opacity: 0; }
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
