import React from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

const Skills = () => {
    return (
      <div className="flex flex-wrap justify-center items-center gap-6">
        <div className="bg-gray-800 p-4 rounded-md text-center w-24 transition-transform duration-300 hover:scale-105 hover:border-[#66fcf1] hover:border">
          <FaJs className="text-[#66fcf1] text-3xl mb-2" />
          <p className="text-gray-300">JavaScript</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center w-24 transition-transform duration-300 hover:scale-105 hover:border-[#66fcf1] hover:border">
          <FaReact className="text-[#66fcf1] text-3xl mb-2" />
          <p className="text-gray-300">React</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center w-24 transition-transform duration-300 hover:scale-105 hover:border-[#66fcf1] hover:border">
          <FaNodeJs className="text-[#66fcf1] text-3xl mb-2" />
          <p className="text-gray-300">Node.js</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-md text-center w-24 transition-transform duration-300 hover:scale-105 hover:border-[#66fcf1] hover:border">
          <FaPython className="text-[#66fcf1] text-3xl mb-2" />
          <p className="text-gray-300">Python</p>
        </div>
      </div>
    );
};

export default Skills;