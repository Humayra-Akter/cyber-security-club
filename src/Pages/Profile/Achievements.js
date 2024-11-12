import React from 'react';

const Achievements = () => {
    return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <h4 className="text-xl font-semibold text-[#66fcf1]">
            Hackathon Winner
          </h4>
          <p className="text-gray-400 mt-2">
            Won first place in a regional hackathon with a team project on
            AI-based data analysis.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <h4 className="text-xl font-semibold text-[#66fcf1]">
            Open Source Contributor
          </h4>
          <p className="text-gray-400 mt-2">
            Contributed to several open-source projects, focusing on frontend
            and API development.
          </p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <h4 className="text-xl font-semibold text-[#66fcf1]">
            Tech Workshop Organizer
          </h4>
          <p className="text-gray-400 mt-2">
            Organized workshops on web development for club members, fostering
            learning and collaboration.
          </p>
        </div>
      </div>
    );
};

export default Achievements;