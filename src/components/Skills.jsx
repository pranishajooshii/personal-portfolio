"use client";

import React from "react";
import skillsData from "../data/skills.json"; // Assuming skills.json is in the /data directory

const Skills = () => {
  return (
    <div className="justify-center flex">
      <div className="hidden lg:flex">
        <div className="flex-col flex justify-center items-center mb-9">
          <div className="flex justify-center items-center">
            <h1 className="mt-20 text-3xl font-semibold">My Skills</h1>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 px-5 gap-4 mt-10">
            {skillsData.skills.slice(0, 7).map((skill, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-4 py-2 border  border-gray-500  rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
              >
                <span className="text-lg ">{skill}</span>
              </div>
            ))}
          </div>

          {/* Remaining 3 Skills with gap between them */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 mt-5 hidden lg:block">
            {skillsData.skills.slice(7).map((skill, index) => (
              <div
                key={index}
                className="flex justify-center items-center px-4 py-2  border-gray-500  border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105"
              >
                <span className="text-lg ">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex lg:hidden">
        <div className="flex-col flex justify-center items-center mb-9">
          <div className="flex justify-center items-center">
            <h1 className="mt-20 text-3xl font-semibold">My Skills</h1>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 px-5 gap-4 mt-10">
            {skillsData.skills.map((skill, index) => (
              <div
                key={index}
                className={`flex justify-center items-center px-4 py-2  border border-gray-500 rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105 ${
                  index >= 7 && index < 10 ? "lg:col-span-1" : ""
                }`}
              >
                <span className="text-lg">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
