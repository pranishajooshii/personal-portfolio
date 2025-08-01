import React from "react";
import Introduction from "./Introduction";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";
import Footer from "./Footer";
import Experience from "./Experience";

const HomePage = () => {
  return (
    <div>
      {/* <section id="introduction">
        <Introduction />
      </section> */}
      
      <section id="projects">
        <ProjectCard />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

     
    </div>
  );
};

export default HomePage;
