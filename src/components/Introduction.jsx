import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <div className=" flex  items-center justify-center  mt-36  bg-gray-50     ">
        <div className=" max-w-4xl px-5">
          <p className="text-3xl md:text-5xl mt-5 md:mt-0 mb-4 md:mb-8  font-semibold text-left md:text-center ">
            Hi, I am Pranisha{" "}
          </p>
          <p className="text-sm md:text-lg   ">
            an aspiring Web Developer with a keen interest in creating
            user-friendly and visually appealing websites. Currently pursuing
            BSc. CSIT at SOCH College of IT, Pokhara.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
