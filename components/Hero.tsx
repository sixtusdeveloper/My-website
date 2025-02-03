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
      className="relative py-8 lg:px-10 px-0 md:px-4 md:py-10 text-white flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/blog03.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative p-4 lg:py-8 mt-16 max-w-3xl lg:max-w-4xl">
        <h3 className="text-[1rem] py-4 font-bold font-sans tracking-wide sm:text-[1.2rem]">
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
        <h1 className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans">
          <strong>
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-yellow-500 bg-clip-text text-transparent">
              Sixtus
            </span>
            , a Passionate{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            Crafting Innovative Solutions
          </strong>
        </h1>
        <p className="lg:pt-4 pt-2 font-sans leading-6 text-base">
          As a software engineer, I specialize in creating tailored software
          solutions to meet your specific business needs. This includes
          developing applications, managing databases, and ensuring seamless
          integration across various platforms. My goal is to deliver efficient
          and scalable solutions that enhance your operations and drive success.
        </p>

        <div className="my-6 space-x-4 md:space-y-0 md:space-x-4">
          <a onClick={openHeroModal}>
            <Button className="h-12 px-4 py-3 cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white font-sans">
              Visit My Portfolio
            </Button>
          </a>

          <a onClick={openBlogModal}>
            <MagicButton
              title={isBlogLoading ? "Loading..." : "Visit My Blog"}
              otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base font-sans text-center"
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
