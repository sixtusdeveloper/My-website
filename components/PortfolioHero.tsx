"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MagicButton from "@/components/ui/MagicButton";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import HireMeModal from "@/components/ui/HireMeModal";
import ReadMoreModal from "@/components/ui/ReadMoreModal";
import Image from "next/image";
import Loader from "@/components/ui/Loader";

const Hero = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isReadMoreModalOpen, setReadMoreModalOpen] = useState(false); // State for Read More modal
  const [isLoading, setIsLoading] = useState(false);
  const [isReadMoreLoading, setIsReadMoreLoading] = useState(false);

  const handleHireMeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true);
    }, 2000); // Simulate loading time (2 seconds)
  };

  // Read more logic
  const handleReadMoreClick = () => {
    setIsReadMoreLoading(true);
    setTimeout(() => {
      setIsReadMoreLoading(false);
      setReadMoreModalOpen(true);
    }, 2000); // Simulate loading time (2 seconds)
  };

  // Read more logic
  const handleModalToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const handleReadMoreModalToggle = () => {
    setReadMoreModalOpen(!isReadMoreModalOpen);
  };

  return (
    <section
      id="hero"
      className="relative py-8 lg:px-10 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/blog06.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="text-white relative p-4 lg:py-8 mt-16 max-w-3xl lg:max-w-4xl">
        <h3 className="text-[1rem] font-bold tracking-wider sm:text-[1.2rem] md:mt-8">
          {isSignedIn && user ? (
            <>
              👋 Hey{" "}
              <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
              </span>
            </>
          ) : (
            "👋 Hi there!"
          )}
        </h3>

        <div className="hidden sm:mt-6 sm:mb-2 sm:flex sm:justify-start">
          <div className="relative rounded-full px-3 py-1 text-sm leading-tight font-semibold hover:text-indigo-600 border border-gray-700 bg-gradient-to-r from-yellow-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Engineering excellence in every line of code.{" "}
            <a
              href="https://github.com/sixtusdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold font-sans text-purple cursor-pointer"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

        <h1 className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans">
          <strong>
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              Innovation and Creativity
            </span>{" "}
            in My Portfolio
          </strong>
        </h1>

        <p className="py-4 leading-6 font-sans text-base">
          Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
          passion for crafting efficient and scalable solutions. Here, you'll
          find a showcase of my work, ranging from innovative web applications
          to complex backend systems. Whether you're a potential employer,
          collaborator, or just curious about my work, I invite you to explore
          my projects and see how I turn ideas into reality. Let's create
          something amazing together!
        </p>
        <div className="flex flex-row justify-start items-center my-3 space-x-4 md:space-y-0 md:space-x-4">
          <a onClick={handleHireMeClick}>
            <Button className="h-12 px-8 lg:px-8 py-3 tracking-wide cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
              Hire Me
            </Button>
          </a>
          <a onClick={handleReadMoreClick}>
            <MagicButton
              title="Read More"
              icon={<GoArrowRight className="text-lg" />}
              otherClasses="text-[1.4rem] flex justify-center items-center text-center"
            />
          </a>
        </div>
      </div>
      {/* </div> */}

      {/* Loading Overlay */}
      {isLoading && <Loader />}

      {/* Loading Overlay for Read More */}
      {isReadMoreLoading && <Loader />}

      {/* Modal for Hire Me */}
      <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-4 bg-secondary max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold tracking-wide text-center">
            Hire Me Let's Work Together
          </h2>
          <p className="text-center text-base px-6 py-2 leading-6">
            Thank you for considering me for your project! I'm eager to work
            with you and bring your ideas to life. Below you can preview my CV:
          </p>

          {/* CV Preview */}
          <div className="flex justify-center my-2">
            <Image
              src="/certificates/my-resume.jpg"
              alt="CV Preview"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-cover"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </HireMeModal>

      {/* Modal for Read More */}
      <ReadMoreModal
        isOpen={isReadMoreModalOpen}
        onClose={handleReadMoreModalToggle}
      >
        <div className="p-4 max-h-[80vh] overflow-auto no-scrollbar">
          <Image
            src="/profile-img.png"
            alt="Sixtus Aondoakaa"
            width={200}
            height={200}
            className="rounded-full border-2 mx-auto profile_img"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="text-lg lg:text-xl mb-1 font-semibold tracking-wide text-center">
            Sixtus Aondoakaa
          </h2>
          <p className="text-base font-medium text-center">Software Engineer</p>
        </div>
      </ReadMoreModal>
    </section>
  );
};

export default Hero;
