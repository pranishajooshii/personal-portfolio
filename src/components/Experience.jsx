import React from "react";
import experienceData from "../data/experience.json"; // Import JSON data

const Experience = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-50">
      <h2 className="text-3xl font-bold text-gray-800 mt-20 mb-6">My Experience</h2>
      <div className="relative w-full max-w-4xl ">
        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gray-300 "></div>
        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } items-center justify-start gap-6`}
            >
              {/* Marker */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

              {/* Content */}
              <div
                className={`w-full md:w-1/2 p-4 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "text-right" : "text-left"
                } bg-white`}
              >
                <h3 className="text-lg font-semibold text-blue-600">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-500 italic">{exp.date}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
