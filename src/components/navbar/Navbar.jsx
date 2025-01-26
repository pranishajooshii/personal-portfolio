"use client";
import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import LinkList from "./LinkList";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
      <nav
        className={`flex md:hidden container max-w-[1600px] bg-white w-full px-6 py-6 fixed top-0 left-0 z-50  transition-all  ${
          scrolled ? "border-b border-gray-200" : ""
        }`}
      >
        <Sheet>
          <SheetTrigger className="flex justify-end items-end w-full bg-transparent">
            <div className="flex items-center">
              <RxHamburgerMenu size={30} />
            </div>
          </SheetTrigger>

          <SheetContent>
            <SheetHeader>
              <SheetTitle> </SheetTitle>
              <SheetDescription>
                <LinkList isMobile={true} />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>

      {/* Laptop screen */}
      <div>
        <div>
          <nav
            className={`hidden  md:flex justify-center items-center   p-6 fixed top-0 left-0 w-full bg-white z-50 shadow-md border-b border-gray-200 transition-all  ${
              scrolled ? "border-b border-gray-200" : ""
            }`}
          >
            <div className="flex">
              <LinkList isMobile={false} />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
