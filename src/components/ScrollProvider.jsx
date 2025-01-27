"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();

export const useScroll = () => useContext(ScrollContext);

const ScrollProvider = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
