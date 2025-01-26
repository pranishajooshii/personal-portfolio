"use client";

import React from "react";
import skillsData from "../data/skills.json"; // Assuming skills.json is in the /data directory

const Skills = () => {
  return (
    <div className="flex-col flex justify-center items-center mb-9">
      <div className="flex justify-center items-center">
        <h1 className="mt-20 text-3xl font-semibold">My Skills</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        {skillsData.skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-4 py-2 bg-black opacity-50 text-white border rounded-lg shadow hover:shadow-md transition-transform transform hover:scale-105 hover:bg-black hover:opacity-30"
          >
            <span className="text-lg ">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
