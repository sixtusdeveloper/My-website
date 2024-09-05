'use client';

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add state for loader

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2000); // Loader duration
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLeave = () => {
    window.open('https://vercel.com/sixtus-projects/portfolio-update-notice/', '_blank'); // Redirect to portfolio
  };

  return (
    <section id="portfolio" className="relative py-10 flex items-center justify-center bg-secondary">
      <div className="relative p-4 lg:p-8 mt-20 max-w-3xl lg:max-w-3xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
          {isSignedIn && user ? (
            <>
              👋 Hi <span className="text-purple">{user.firstName}</span>
            </>
          ) : (
            "👋 Hi there!"
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl tracking-wide font-bold">
          I&apos;m Sixtus, a Passionate Software Engineer Crafting Innovative Solutions
        </h1>
        <p className="py-8 tracking-wide leading-6 text-[16px]">
          Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
          Welcome to my personal space where technology meets creativity.
        </p>

        <div className="mt-6">
          <a 
            onClick={openModal} 
            className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-base font-semibold tracking-wider rounded-full py-3 px-8 text-center"
          >
            View My Work
          </a>
        </div>
      </div>

      {isLoading && <Loader />} {/* Show loader */}

      <HeroModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Are you sure you want to leave the site? You will be redirected to my portfolio."
      >
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleLeave}
            className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-8 rounded-full"
          >
            Leave
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </HeroModal>
    </section>
  );
};

export default Home;
