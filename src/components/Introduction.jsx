import Image from "next/image";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <div className=" flex  items-center justify-center mt-14  md:mt-36        ">
        <div className=" max-w-4xl p-5">
          <p className="text-3xl md:text-5xl mt-5 md:mt-0 mb-4 md:mb-8  font-semibold text-left md:text-center ">    
            Hi, I am Pranisha{" "}
          </p>

          <div className="flex md:hidden">
            <p className="text-sm  text-justify  ">
              an aspiring Web Developer with a keen interest in creating
              user-friendly and visually appealing websites.Currently pursuing
              BSc. CSIT at SOCH College of IT, Pokhara.
            </p>
          </div>

          <div className="hidden lg:flex">
            <div className="text-lg  ">
              an aspiring Web Developer with a keen interest in creating
              user-friendly and visually appealing
              <div className="pl-24 ">
                websites.Currently pursuing BSc. CSIT at SOCH College of IT,
                Pokhara.
              </div>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden">
            <div className="text-lg  ">
              an aspiring Web Developer with a keen interest in creating
              user-friendly and visually 
              <div className="pl-5 ">
              appealing websites.Currently pursuing BSc. CSIT at SOCH College of IT,
                Pokhara.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
