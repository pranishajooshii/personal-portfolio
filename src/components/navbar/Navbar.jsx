"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn and Gmail icons
import LinkList from "./LinkList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiLogoGmail } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center">
      {/* Mobile Navbar */}
      <nav
        className={`flex md:hidden container max-w-[1600px] bg-white w-full px-6 py-6 fixed top-0 left-0 z-50 transition-all ${
          scrolled ? "border-b border-gray-200" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full">
          {/* Left Side - Name */}
          <div className="font-semibold text-lg">Pranisha Joshi</div>

          {/* Right Side - Hamburger Menu */}
          <Sheet>
            <SheetTrigger className="flex items-center bg-transparent">
              <RxHamburgerMenu size={30} />
            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                  <LinkList isMobile={true} />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex justify-between items-center p-6 fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b border-gray-200 transition-all ${
          scrolled ? "border-b border-gray-200" : ""
        }`}
      >
        {/* Left Side - Name */}
        <div className="font-semibold text-xl">Pranisha Joshi</div>

        {/* Center - LinkList */}
        <div className="flex mx-auto">
          <LinkList isMobile={false} />
        </div>

        {/* Right Side - Icons */}
        <div className="flex space-x-6">
          {/* LinkedIn Icon */}
          <Link
            href="https://www.linkedin.com/in/pranisha-joshi-bb5714201/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </Link>

          {/* Gmail Icon */}
          <Link href="mailto:pranisha.joshi11@gmail.com">
            <BiLogoGmail size={24} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
