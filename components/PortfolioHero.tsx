
'use client';

import Link from "next/link";
import { Button } from '@/components/ui/button';
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
    <div className="bg-secondary pb-2 pt-36" id="hero">
      <div className="flex justify-center relative my-16 lg:px-10 px-8 lg:my-20 z-10">
        <div className="max-w-[90vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 hover:text-indigo-600 border bg-gradient-to-r from-indigo-800 via-blue-500 to-purple-800 bg-clip-text text-transparent">
              Engineering excellence in every line of code.{" "}
              <a
                href="https://github.com/sixtusdeveloper/My-website/"
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
                👋 Hey <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">{user.firstName}</span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </h3>

          <h1 className="text-[2rem] font-extrabold tracking-wide text-center lg:text-[3rem]">
            <strong>
              Explore <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">Innovation and Creativity</span> in My Portfolio
            </strong>
          </h1>

          <p className="py-4 text-center leading-6 text-[16px]">
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
              <Button
                className="h-12 px-6 lg:px-8 py-3 tracking-wide cursor-pointer text-base rounded-md hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white" 
              >Hire Me
              </Button>
            </a>
            <a onClick={handleReadMoreClick} >
              <MagicButton
                title="Read More"
                icon={
                  <GoArrowRight className="text-lg" />
                }
                otherClasses="text-[1.4rem] flex justify-center items-center text-center"
              />
            </a>
          
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && <Loader />} 

      {/* Loading Overlay for Read More */}
      {isReadMoreLoading && (
        <Loader />
      )}

      {/* Modal for Hire Me */}
      <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-4 bg-secondary max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold tracking-wide text-center">
            Hire Me
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
      <ReadMoreModal isOpen={isReadMoreModalOpen} onClose={handleReadMoreModalToggle}>
        <div className="p-4 max-h-[80vh] overflow-auto no-scrollbar">
          <Image 
          src="/profile-img.png"
          alt="Sixtus Aondoakaa"
          width={200}
          height={200}
          className="rounded-full mx-auto profile_img object-cover overflow-hidden"
          style={{ width: 'auto', height: 'auto' }}
          />
          <h2 className="text-lg lg:text-xl mb-1 font-semibold tracking-wide text-center">
            Sixtus Aondoakaa
          </h2>
          <p className="text-base font-semibold bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Software Engineer
          </p>
        </div>
      </ReadMoreModal>
    </div>
  );
};

export default Hero;










