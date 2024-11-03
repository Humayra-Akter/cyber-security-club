import React from "react";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary pl-5 pt-16 lg:flex md:flex">
      <img
        src="https://cdn-icons-png.flaticon.com/512/6463/6463383.png"
        alt=""
      />
      <p className="text-black animate-pulse font-extrabold text-5xl text-center pt-44 pl-8">
        MIST CYBER SECURITY CLUB
      </p>
    </div>
  );
};

export default Banner;
