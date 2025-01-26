import React from "react";
import { usePathname } from "next/navigation";

const LinkList = ({ isMobile }) => {
  const pathname = usePathname();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80; // Adjust this offset based on your navbar height
      const elementPosition = section.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      

<div className={`${isMobile ? "text-left" : "text-center"}`}>
  <ul className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-10`}>
    <li
      className={`hover:text-gray-500 ${
        pathname === "/#projects" ? "underline" : ""
      } ${isMobile ? "mt-10" : ""}`}
    >
      <button
        onClick={() => scrollToSection("projects")}
        className="text-sm md:text-lg xl:text-xl"
      >
        Projects
      </button>
    </li>

    <li
      className={`hover:text-gray-500 ${
        pathname === "/#skills" ? "underline" : ""
      }`}
    >
      <button
        onClick={() => scrollToSection("skills")}
        className="text-sm md:text-lg xl:text-xl"
      >
        Skills
      </button>
    </li>

    <li
      className={`hover:text-gray-500 ${
        pathname === "/#experience" ? "underline" : ""
      }`}
    >
      <button
        onClick={() => scrollToSection("experience")}
        className="text-sm md:text-lg xl:text-xl"
      >
        Experience
      </button>
    </li>
    <li
      className={`hover:text-gray-500 ${
        pathname === "/#contact" ? "underline" : ""
      }`}
    >
      <button
        onClick={() => scrollToSection("contact")}
        className="text-sm md:text-lg xl:text-xl"
      >
        Contact
      </button>
    </li>
  </ul>
</div>
     
    </>
  );
};

export default LinkList;
