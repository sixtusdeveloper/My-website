"use client";

import React, { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ScrollIndicator = () => {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down");
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const sectionHeight = 600; // Adjust based on your sections' average height

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollTop === 0) {
        setAtTop(true);
        setAtBottom(false);
        setScrollDirection("down");
      } else if (scrollTop + clientHeight >= scrollHeight - 10) {
        setAtTop(false);
        setAtBottom(true);
        setScrollDirection("up");
      } else {
        setAtTop(false);
        setAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollStep = (direction: "down" | "up") => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const targetScroll =
      direction === "down"
        ? currentScroll + sectionHeight
        : currentScroll - sectionHeight;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });

    // Continue scrolling until reaching the top or bottom
    setTimeout(() => {
      const newScroll = window.scrollY || document.documentElement.scrollTop;
      if (
        direction === "down" &&
        newScroll < document.documentElement.scrollHeight - window.innerHeight
      ) {
        scrollStep(direction);
      } else if (direction === "up" && newScroll > 0) {
        scrollStep(direction);
      }
    }, 500); // Adjust delay for smoother experience
  };

  const handleClick = () => {
    scrollStep(scrollDirection);
  };

  return (
    <div
      onClick={handleClick}
      className={`fixed ${
        atTop ? "top-24" : "bottom-24"
      } right-2 lg:right-10 z-50 cursor-pointer p-3 rounded-full bg-secondary border shadow-lg transition-colors duration-300`}
      style={{ transition: "top 0.3s, bottom 0.3s" }}
    >
      {scrollDirection === "down" ? (
        <FaArrowDown className="text-xl" />
      ) : (
        <FaArrowUp className="text-xl" />
      )}
    </div>
  );
};

export default ScrollIndicator;
