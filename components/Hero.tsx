'use client';

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import MagicButton from "@/components/ui/MagicButton";
import Loader from "@/components/ui/Loader"; 
import { Button } from '@/components/ui/button';

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add state for loader
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(false); // State for blog loading

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
    window.location.href = 'https://www.sixtusdev.net/pages/portfolio'; // Redirect to portfolio
  };

  // Logic for "Visit my Blog" button
  const handleBlogClick = () => {
    setIsBlogLoading(true); // Start loading

    setTimeout(() => {
      setIsBlogLoading(false); // Stop loading
      setIsModalOpen(true); // Open the modal
    }, 1000); // 1 second delay for demonstration
  };

  const handleBlogRedirect = () => {
    window.open('https://project-update-notice.vercel.app/', '_blank'); // Open the URL in a new tab
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="portfolio" className="relative py-8 md:py-10 flex items-center justify-center bg-secondary">
      <div className="relative p-4 lg:py-8 mt-20 max-w-3xl lg:max-w-4xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wide sm:text-[1.2rem]">
          {isSignedIn && user ? (
            <>
              👋 Hi <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">{user.firstName}</span>
            </>
          ) : (
            "👋 Hi there!"
          )}
        </h3>
        <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
        <strong>I&apos;m <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">Sixtus</span>, a Passionate <strong className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">Software Engineer</strong> Crafting Innovative Solutions</strong>
        </h1>
        <p className="p-4 lg:px-8 lg:pt-8 leading-6 text-[1rem]">
          Here is my space, where technology, creativity, and innovation converge. 
          I craft elegant solutions through clean code, innovative design, and engaging tech content.
           Whether building applications or sharing insights, this is where ideas come to life.
        </p>

        <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
          <a 
            onClick={openModal} 
          >
            <Button className="h-12 px-4 py-3 cursor-pointer text-base rounded-md hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
              View My Work
            </Button>
          </a>

          <a onClick={handleBlogClick} >
            <MagicButton
              title={isBlogLoading ? "Loading..." : "Visit my Blog"}
              otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base mt-4 text-center"
            />
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
