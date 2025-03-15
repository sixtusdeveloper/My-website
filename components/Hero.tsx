"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import Loader from "@/components/ui/Loader";
import BlogModal from "@/components/ui/BlogModal";
import { motion } from "framer-motion";
import Link from "next/link";
import { backgroundImages } from "@/data";
import AnimatedLaptop from "@/components/ui/AnimatedLaptop";
import { useRouter } from "next/navigation";

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(true); // Controls fade-in & fade-out effect
  const [isPaused, setIsPaused] = useState(false);

  const router = useRouter(); // ✅ Hook inside function body

  // Auto-change background every 10 seconds with fade effect
  useEffect(() => {
    if (isHeroModalOpen || isBlogModalOpen) {
      setIsPaused(true);
      return;
    }

    setIsPaused(false);
    setFade(false); // Start fade-out effect

    const transitionTimeout = setTimeout(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
      setFade(true); // Start fade-in effect
    }, 2000); // Wait 2 seconds for fade effect before changing image

    const interval = setInterval(() => {
      if (!isPaused) {
        setFade(false); // Start fade-out
        setTimeout(() => {
          setBackgroundIndex(
            (prevIndex) => (prevIndex + 1) % backgroundImages.length
          );
          setFade(true); // Start fade-in
        }, 2000);
      }
    }, 6000); // Change background every 10 seconds

    return () => {
      clearTimeout(transitionTimeout);
      clearInterval(interval);
    };
  }, [isHeroModalOpen, isBlogModalOpen, isPaused]);

  const openHeroModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsHeroModalOpen(true);
    }, 2000);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const handleHeroRedirect = () => {
    router.push("/pages/portfolio");
  };

  const openBlogModal = () => {
    setIsBlogLoading(true);
    setTimeout(() => {
      setIsBlogLoading(false);
      setIsBlogModalOpen(true);
    }, 2000);
  };

  const handleBlogRedirect = () => {
    window.open("https://devjourney-blog-khaki.vercel.app/", "_blank");
    setIsBlogModalOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="relative pt-8 lg:px-0 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-[85vh] lg:min-h-[520px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        opacity: fade ? 1 : 1, // Smooth fade-in & fade-out effect
        transition: isPaused ? "none" : "opacity 3s ease-in-out", // Stop transition when paused
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative flex flex-row lg:flex-row items-center justify-start lg:justify-center w-full gap-8 px-4 lg:px-14">
        {/* Left: Text Section */}
        <motion.div
          className="text-white max-w-3xl p-0 lg:py-8 mt-16 text-start lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.h3
            className="text-sm py-2 tracking-wide sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 Welcome{" "}
                <span className="font-sans font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </motion.h3>

          {/* Heading */}
          <motion.h1
            className="text-[2.5rem] leading-tight lg:text-[3rem] font-extrabold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <strong>
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-yellow-300 to-white bg-clip-text text-transparent">
                Sixtus
              </span>
              , a Passionate{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Software Engineer
              </span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Crafting Innovative Solutions
              </span>
            </strong>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="lg:pt-4 pt-2 font-sans leading-6 text-base"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            As a software engineer, I specialize in creating tailored software
            solutions to meet your specific business needs. This includes
            developing applications, managing databases, and ensuring seamless
            integration across various platforms.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="my-6 space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openHeroModal();
              }}
            >
              <button className="h-12 px-6 py-3 rounded-md bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
                Visit Portfolio
              </button>
            </Link>

            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openBlogModal();
              }}
            >
              <button className="py-3 px-6 h-12 font-semibold rounded-md text-white hover:text-white dark:text-white text-sm ring-1 ring-indigo-500 hover:ring-0 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 md:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
                {isBlogLoading ? "Loading..." : "Visit My Blog"}
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Animated Laptop */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 justify-center items-center mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <AnimatedLaptop />
        </motion.div>
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
        message="You are about to be redirected to my Blog website. Do you wish to continue?"
      >
        <div className="flex justify-center gap-4 p-4 mt-4">
          <button
            onClick={handleBlogRedirect}
            className="text-sm lg:text-base font-medium bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full"
          >
            Yes, visit blog
          </button>
          <button
            onClick={() => setIsBlogModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white text-sm lg:text-base font-medium py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </BlogModal>

      {isLoading && <Loader />}

      {/* Hero Modal */}
      <HeroModal
        isOpen={isHeroModalOpen}
        onClose={closeHeroModal}
        message="Are you sure you want to leave this page? You will be navigated to my portfolio page."
      >
        <div className="flex gap-4 mt-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleHeroRedirect();
            }}
          >
            <button className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white text-sm lg:text-base font-medium py-2 px-8 rounded-full">
              Leave
            </button>
          </Link>

          <button
            onClick={closeHeroModal}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full text-sm lg:text-base font-medium"
          >
            Cancel
          </button>
        </div>
      </HeroModal>
    </section>
  );
};

export default Home;
