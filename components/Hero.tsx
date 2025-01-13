"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import MagicButton from "@/components/ui/MagicButton";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import BlogModal from "@/components/ui/BlogModal"; // Import the BlogModal component

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false); // Separate state for HeroModal
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false); // Separate state for BlogModal
  const [isLoading, setIsLoading] = useState(false); // Loader state for HeroModal
  const [isBlogLoading, setIsBlogLoading] = useState(false); // Loader state for BlogModal

  // Logic for "View My Work" button
  const openHeroModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsHeroModalOpen(true);
    }, 2000); // Loader duration
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const handleHeroRedirect = () => {
    window.location.href = "https://www.sixtusdev.net/pages/portfolio"; // Redirect to portfolio
  };

  // Logic for "Visit My Blog" button
  const openBlogModal = () => {
    setIsBlogLoading(true); // Start blog loading
    setTimeout(() => {
      setIsBlogLoading(false);
      setIsBlogModalOpen(true); // Open the BlogModal
    }, 1000); // Loader duration
  };

  const handleBlogRedirect = () => {
    window.open("https://devjourney-blog-khaki.vercel.app/", "_blank"); // Open the URL in a new tab
    setIsBlogModalOpen(false); // Close the BlogModal
  };

  return (
    <section
      id="portfolio"
      className="relative py-8 md:py-10 flex items-center justify-center bg-secondary"
    >
      <div className="relative p-4 lg:py-8 mt-20 max-w-3xl lg:max-w-4xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wide sm:text-[1.2rem]">
          {isSignedIn && user ? (
            <>
              👋 Hi{" "}
              <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
              </span>
            </>
          ) : (
            "👋 Hi there!"
          )}
        </h3>
        <h1 className="text-[2rem] lg:text-[3rem] font-extrabold">
          <strong>
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Sixtus
            </span>
            , a Passionate{" "}
            <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            Crafting Innovative Solutions
          </strong>
        </h1>
        <p className="p-2 lg:px-8 lg:pt-8 leading-6 text-[1rem]">
          Here is my space, where technology, creativity, and innovation
          converge. I craft elegant solutions through clean code, innovative
          design, and engaging tech content. Whether building applications or
          sharing insights, this is where ideas come to life.
        </p>

        <div className="flex flex-row justify-center items-center my-3 space-x-4 md:space-y-0 md:space-x-4">
          <a onClick={openHeroModal}>
            <Button className="h-12 px-4 py-3 cursor-pointer text-base rounded-md hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
              Visit My Portfolio
            </Button>
          </a>

          <a onClick={openBlogModal}>
            <MagicButton
              title={isBlogLoading ? "Loading..." : "Visit My Blog"}
              otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base text-center"
            />
          </a>
        </div>
      </div>
      {/* Loader for Blog Modal */}
      {isBlogLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}
      {/* Blog Modal */}
      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        message="You are about to visit my full blog website. Do you want to continue?"
      >
        <div className="flex justify-center gap-4 p-4 mt-4">
          <button
            onClick={handleBlogRedirect}
            className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full"
          >
            Yes, Visit Blog
          </button>
          <button
            onClick={() => setIsBlogModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </BlogModal>
      {isLoading && <Loader />} {/* Show loader */}
      {/* Hero Modal */}
      <HeroModal
        isOpen={isHeroModalOpen}
        onClose={closeHeroModal}
        message="Are you sure you want to leave the site? You will be redirected to my portfolio."
      >
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleHeroRedirect}
            className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full"
          >
            Leave
          </button>
          <button
            onClick={closeHeroModal}
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
