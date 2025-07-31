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
              an aspiring Backend Developer  with a strong interest in building scalable and efficient server-side applications.
            </p>
          </div>

          <div className="hidden lg:flex">
            <div className="text-lg  ">
             an aspiring Backend Developer  with a strong interest in building scalable and efficient server-side 
              <div className="pl-24 ">
                applications.
              </div>
            </div>
          </div>

          <div className="hidden md:flex lg:hidden">
            <div className="text-lg  ">
              an aspiring Backend Developer  with a strong interest in building scalable and efficient server-side  
              <div className="pl-5 ">
              applications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
