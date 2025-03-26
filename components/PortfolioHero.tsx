"use client";

import { Button } from "@/components/ui/button";
import MagicButton from "@/components/ui/MagicButton";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import HireMeModal from "@/components/ui/HireMeModal";
import ReadMoreModal from "@/components/ui/ReadMoreModal";
import Image from "next/image";
import { cvImages, backgroundImages } from "@/data";
import Loader from "@/components/ui/Loader";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ui/ProgressBar"; // Import the Progress Bar
import Link from "next/link";

const Hero = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isReadMoreModalOpen, setReadMoreModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReadMoreLoading, setIsReadMoreLoading] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isFetchingResumeLoading, setIsFetchingResumeLoading] = useState(false);
  const totalPages = cvImages.length;
  const currentPageNumber = currentPage + 1;
  // Get current hour
  const currentHour = new Date().getHours();

  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  useEffect(() => {
    if (isModalOpen || isReadMoreModalOpen) {
      setIsPaused(true);
      return;
    }

    setIsPaused(false);
    setFade(false);

    const transitionTimeout = setTimeout(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
      setFade(true);
    }, 2000);

    const interval = setInterval(() => {
      if (!isPaused) {
        setFade(false);
        setTimeout(() => {
          setBackgroundIndex(
            (prevIndex) => (prevIndex + 1) % backgroundImages.length
          );
          setFade(true);
        }, 2000);
      }
    }, 6000);

    return () => {
      clearTimeout(transitionTimeout);
      clearInterval(interval);
    };
  }, [isModalOpen, isReadMoreModalOpen, isPaused]);

  const handleHireMeClick = () => {
    setIsLoading(true);
    setIsFetchingResumeLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsFetchingResumeLoading(false);
      setModalOpen(true);
    }, 2000);
  };

  const handleReadMoreClick = () => {
    setIsReadMoreLoading(true);
    setTimeout(() => {
      setIsReadMoreLoading(false);
      setReadMoreModalOpen(true);
    }, 2000);
  };

  const handleModalToggle = () => setModalOpen(!isModalOpen);
  const handleReadMoreModalToggle = () =>
    setReadMoreModalOpen(!isReadMoreModalOpen);

  return (
    <section
      id="hero"
      className="relative pt-8 lg:px-0 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-[85vh] lg:min-h-[520px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        opacity: fade ? 1 : 1,
        transition: isPaused ? "none" : "opacity 3s ease-in-out",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative flex flex-row lg:flex-row items-center justify-start lg:justify-center w-full gap-8 px-4 lg:px-14">
        {/* Left Side - Hero Text Content */}
        <motion.div
          className="text-blue-100 max-w-3xl p-0 lg:py-8 mt-16 text-start lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h3
            className="text-sm py-2 tracking-wide sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 {greeting},{" "}
                <span className="font-sans font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </motion.h3>

          <motion.div
            className="hidden sm:mt-2 sm:mb-2 sm:flex sm:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-full px-4 text-sm leading-6 hover:text-pink-500 border shadow-xl border-gray-700 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Engineering excellence in every line of code.{" "}
              <Link
                href="https://github.com/sixtusdeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold font-sans text-purple cursor-pointer"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </motion.div>

          <motion.h1
            className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <strong>
              Explore{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Innovation and Creativity
              </span>{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                in My Portfolio
              </span>
            </strong>
          </motion.h1>

          <motion.p
            className="py-4 text-base"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
            passion for crafting efficient and scalable solutions. Here, you'll
            find a showcase of my work, ranging from innovative web applications
            to complex backend systems. Whether you're a potential employer,
            collaborator, or just curious about my work, I invite you to explore
            my projects and see how I turn ideas into reality. Let's create
            something amazing together!
          </motion.p>

          <motion.div
            className="flex flex-row items-center space-x-4 mt-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleHireMeClick();
              }}
            >
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
                {isFetchingResumeLoading
                  ? "Fetching Resume..."
                  : "Let's work together"}
              </button>
            </Link>

            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleReadMoreClick();
              }}
            >
              <button className="py-3 px-6 font-semibold rounded-md text-white hover:text-white dark:text-white text-sm ring-1 ring-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 md:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
                Read More&nbsp;&#8594;
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Side - Progress Bar */}
        <motion.div
          className="hidden w-full md:w-1/2 lg:flex justify-center items-center mt-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <ProgressBar />
        </motion.div>
      </div>

      {isLoading && <Loader />}
      {isReadMoreLoading && <Loader />}

      <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-2 max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold tracking-wide text-center text-gray-700 dark:text-blue-50">
            Hire Me Let's Work Together
          </h2>
          <p className="text-center text-base px-4 py-2 leading-6 text-gray-600 dark:text-blue-100">
            Thank you for considering me for your project! I'm eager to work
            with you and bring your ideas to life. Below you can preview my CV:
          </p>
          <div className="flex justify-center my-2">
            <Image
              src={cvImages[currentPage]}
              alt="CV Preview"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-cover"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-gray-700 text-blue-100 rounded-lg hover:bg-gray-600"
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <span className="items-center text-sm text-gray-600 dark:text-blue-200">{`Page ${currentPageNumber} of ${totalPages}`}</span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, cvImages.length - 1)
                )
              }
              className={`px-4 py-2 bg-gray-700 text-blue-100 rounded-lg hover:bg-gray-600 ${
                currentPage === cvImages.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === cvImages.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </HireMeModal>

      <ReadMoreModal
        isOpen={isReadMoreModalOpen}
        onClose={handleReadMoreModalToggle}
      >
        <div className="p-2 max-h-[80vh] overflow-auto no-scrollbar">
          <Image
            src="/profile-img.png"
            alt="Sixtus Aondoakaa"
            width={200}
            height={200}
            className="rounded-full border-2 mx-auto profile_img"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="mt-2 text-base lg:text-lg sm:mb-1 font-semibold tracking-wide text-center text-gray-700 dark:text-blue-100">
            Sixtus Aondoakaa
          </h2>
          <p className="text-sm font-medium text-center text-gray-600 dark:text-blue-200">
            Software Engineer
          </p>
        </div>
      </ReadMoreModal>
    </section>
  );
};

export default Hero;
