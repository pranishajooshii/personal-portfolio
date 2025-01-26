import React from "react";
import { FiMail } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center">
      <div className="px-16 py-24 sm:py-32 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="font-bold text-3xl md:text-lg mb-4 md:text-start text-center">
              Contact
            </h2>
            <div className="flex flex-col">
              <ul className="flex flex-col gap-1 md:gap-3">
                <li className="flex items-center gap-5">
                  <FiMail />
                  <a
                    href="mailto:pranisha.joshi11@gmail.com"
                    className="hover:underline"
                  >
                    pranisha.joshi11@gmail.com
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pranisha-joshi-bb5714201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:underline"
                  >
                    <AiFillLinkedin className="text-lg" />
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
