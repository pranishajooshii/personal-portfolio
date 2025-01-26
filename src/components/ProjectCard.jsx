"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import projects from "../data/projects.json";

const ProjectCard = () => {
  const handleCardClick = (githubUrl) => {
    if (githubUrl) {
      window.open(githubUrl, "_blank"); // Opens the GitHub URL in a new tab
    } else {
      alert("GitHub URL not available for this project.");
    }
  };

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="">
        <div className="flex justify-center items-center">
          <h1 className="mt-20 text-3xl font-semibold">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20 md:gap-y-5 px-5  mt-8">
          {projects.map((item, index) => (
            <div key={index}>
              <Card className="xl:w-[350px] pb-4 group lg:shadow-none border-none shadow-xl  relative  transform transition-transform duration-300 hover:scale-105 hover:shadow-lg ">
                <div
                  style={{
                    backgroundImage: `url(${item.image || "/placeholder.jpg"})`, // Replace with an actual image path or placeholder
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="flex items-end h-[200px] md:h-[300px] rounded-t-xl"
                ></div>

                <div className="absolute top-0 bg-black bg-opacity-50 text-white text-lg md:text-sm px-2 py-1 rounded">
                  {item.language.join(", ")}
                </div>
                <CardHeader className="p-0 pl-2 py-2">
                  <CardTitle className="tracking-normal text-xl  line-clamp-2">
                    {item.title || "Untitled Project"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 px-2">
                  <p className="text-base md:text-sm text-gray-600 line-clamp-3">
                    {item.description || "No description available."}
                  </p>

                  <div className="my-2">
                    <button
                      className="bg-black opacity-45 text-white rounded px-4 md:px-2 py-1 md text-lg"
                      onClick={() => handleCardClick(item.github)}
                    >
                      View
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
