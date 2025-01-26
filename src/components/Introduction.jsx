import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <div className="flex  flex-col-reverse md:flex-row mt-36 justify-center items-center md:justify-between bg-gray-50     ">
        <div className=" flex flex-col items-center justify-center w-full md:w-[60%]  ">
          <div className="w-full md:w-[500px] px-6">
            <p className="text-3xl md:text-5xl mt-5 md:mt-0 mb-4 md:mb-8 text-center font-semibold ">
              Hi, I am Pranisha{" "}
            </p>
            <p className="text-sm md:text-lg  text-justify">
              an aspiring Web Developer with a keen interest in creating
              user-friendly and visually appealing websites. Currently pursuing
              BSc. CSIT at SOCH College of IT, Pokhara
            </p>
          </div>
        </div>

        <div className=" h-full flex justify-center items-center px-5 ">
          <Image
            src="/photo.jpeg"
            width={500}
            height={600}
            alt="Profile photo"
            className="w-full md:w-[350px] h-[400px] rounded-3xl md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
