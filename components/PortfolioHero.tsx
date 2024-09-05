
'use client';

import Link from "next/link";
import BackDropButton from "@/components/ui/BackDropButton";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import HireMeModal from "@/components/ui/HireMeModal";
import ReadMoreModal from "@/components/ui/ReadMoreModal"; 
import Image from "next/image";
import { log } from "console";
import Loader from "./ui/Loader";

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
    <div className="bg-secondary pb-2 pt-36" id="Hero">
      {/* <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div> */}

      {/* <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute flex items-center justify-center top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}

      <div className="flex justify-center relative my-16 lg:my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-blue-500 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Engineering excellence in every line of code.{" "}
              <a
                href="https://github.com/sixtusdeveloper/My-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-purple cursor-pointer"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <h3 className="text-[1rem] font-bold tracking-wider sm:text-[1.2rem]">
            {isSignedIn && user ? (
              <>
                👋 Hey <span className="text-purple">{user.firstName}</span>
              </>
            ) : (
              "👋 Hey there!"
            )}
          </h3>

          <h1 className="text-[2.8rem] font-bold lg:font-bolder tracking-wide lg:tracking-wider text-center lg:text-[3rem]">
            Welcome to my <span className="text-purple">Portfolio</span>
          </h1>
          <p className="py-8 text-center tracking-wide leading-6 text-[16px]">
            Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
            passion for crafting efficient and scalable solutions. Here, you'll
            find a showcase of my work, ranging from innovative web applications
            to complex backend systems. Whether you're a potential employer,
            collaborator, or just curious about my work, I invite you to explore
            my projects and see how I turn ideas into reality. Let's create
            something amazing together!
          </p>
          <div className="flex flex-row justify-center items-center mb-2 space-x-4 md:space-y-0 md:space-x-4">
            <a onClick={handleHireMeClick}>
              <MagicButton
                title="Hire Me"
                otherClasses="text-[1.4rem] flex justify-center items-center text-center"
              />
            </a>
            
            <a onClick={handleReadMoreClick}>
              <BackDropButton
                title="Read More"
                icon={
                  <GoArrowRight className="text-lg" />
                }
                position="right"
                otherClasses=" md:ring-none cursor-pointer flex justify-center items-center text-center tracking-wider text-purple border-gray-200 rounded-lg hover:border-black-200"
              />
            </a>
          
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && <Loader />} {/* Show loader */}

      {/* Loading Overlay for Read More */}
      {isReadMoreLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-secondary bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-100"></div>
        </div>
      )}

      {/* Modal for Hire Me */}
      <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-8 max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold text-purple tracking-wide text-center mb-4">
            Hire Me
          </h2>
          <p className="text-center text-sm p-4 mb-8 tracking-wide leading-6">
            Thank you for considering me for your project! I'm eager to work
            with you and bring your ideas to life. Below you can preview my CV:
          </p>

          {/* CV Preview */}
          <div className="flex justify-center mb-8">
            <Image
              src="/my-resume.jpg"
              alt="CV Preview"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-contain"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </div>
      </HireMeModal>

      
      {/* Modal for Read More */}
      <ReadMoreModal isOpen={isReadMoreModalOpen} onClose={handleReadMoreModalToggle}>
        <div className="px-8 max-h-[80vh] overflow-auto no-scrollbar">
          <Image 
          src="/profile.jpg"
          alt="Sixtus Aondoakaa"
          width={150}
          height={150}
          className="rounded-full mx-auto overflow-hidden"
          style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </ReadMoreModal>
    </div>
  );
};

export default Hero;










