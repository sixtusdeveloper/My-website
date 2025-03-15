"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa"; // Import icons
import GalleryModal from "@/components/ui/GalleryModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);
  const [isGithubFollowed, setIsGithubFollowed] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);

  const router = useRouter();

  // Handle page refresh or initial load for follow buttons
  useEffect(() => {
    const twitterFollowed = localStorage.getItem("isTwitterFollowed");
    const githubFollowed = localStorage.getItem("isGithubFollowed");

    if (twitterFollowed) setIsTwitterFollowed(JSON.parse(twitterFollowed));
    if (githubFollowed) setIsGithubFollowed(JSON.parse(githubFollowed));

    // Reset "Read More" state on page load
    setIsExpanded(false);
  }, []);

  // Twitter Follow Component
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load();
    } else {
      // Load the Twitter widget script if not already loaded
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    }
  }, []);

  // Toggle expand for "Read More"
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const openGalleryModal = () => {
    setIsGalleryLoading(true);
    setTimeout(() => {
      setIsGalleryLoading(false);
      setIsGalleryModalOpen(true);
    }, 2000);
  };

  const handleGalleryRedirect = () => {
    router.push("/pages/gallery");
  };

  return (
    <section id="about" className="p-2 lg:py-2 bg-secondary w-full">
      <div className="border bg-secondar dark:bg-gray-900 rounded-lg shadow-sm max-w-6xl relative flex gap-6 align-center justify-center flex-wrap lg:flex-nowrap p-4 lg:p-6 lg:my-2 mx-auto">
        <div className="left-side-content flex justify-start mx-auto items-start w-full">
          <div className="w-full">
            <div className="flex justify-center items-center p-2 w-full relative">
              <div className="rounded-lg shadow-md bg-gradient-to-b from-purple-600 via-blue-500 to-yellow-600 p-[1px]">
                <Image
                  src="/profile-img.png"
                  alt="Profile image"
                  width={300}
                  height={300}
                  className="rounded-sm shadow-md profile_image"
                />
              </div>
            </div>
            <div className="mb-4 md:mb-10 p-2 items-center">
              {/* Social Follow Buttons on larger devices */}

              {/* Social Follow Buttons on mobile */}
              <div className="flex items-center justify-center gap-4 mt-0">
                {/* Twitter Follow Button */}
                <div
                  className={`flex items-center space-x-2 p-2 rounded-full shadow-sm border hover:ease-in-out hover:scale-105 transition-all duration-300 ${
                    isTwitterFollowed
                      ? "bg-secondary dark:bg-gray-800 border"
                      : "bg-transparent border"
                  } transition`}
                >
                  <Link
                    href="https://twitter.com/sixtusdev?ref_src=twsrc%5Etfw"
                    className="relative"
                  >
                    <FaTwitter size={20} />
                  </Link>
                </div>

                {/* GitHub Follow Button */}
                <div
                  className={`flex items-center space-x-2 p-2 rounded-full shadow-sm border hover:ease-in-out hover:scale-105 transition-all duration-300 ${
                    isGithubFollowed
                      ? "bg-secondary dark:bg-gray-800 border"
                      : "bg-transparent border"
                  } transition`}
                >
                  <Link
                    href="https://github.com/sixtusdeveloper"
                    target="_blank"
                    className="relative"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </Link>
                </div>

                {/* Linked Follow Button */}
                <div className="flex items-center space-x-2 p-2 rounded-full shadow-sm border hover:ease-in-out hover:scale-105 transition-all duration-300">
                  <Link
                    href="https://linkedin.com/in/sixtusushrey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                  >
                    <FaLinkedin size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side-content lg:p-2 flex justify-start items-start w-full">
          <div className="content-wrapper">
            <h2 className="text-3xl mb-4 md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Few words About Me
            </h2>
            <p className="text-base leading-relaxed mb-4 md:pr-2">
              Hello, I’m Sixtus Aondoakaa, a passionate Software Engineer,
              DevOps Engineer, UI/UX Designer and a Tech Educator dedicated to
              crafting scalable and innovative web solutions. My journey in tech
              began with a fascination for how technology shapes our world. Over
              the years, I have navigated the complexities of full-stack
              development, embracing both front-end and back-end technologies to
              build robust applications.
            </p>
            {isExpanded && (
              <>
                <p className="text-base leading-relaxed mb-4">
                  The path has not always been smooth. The tech industry is
                  dynamic and ever-evolving, and staying ahead requires more
                  than just technical skills—it demands resilience and a
                  commitment to continuous learning. I have faced and overcome
                  numerous challenges, from mastering new frameworks to
                  debugging intricate issues. Each obstacle has been a stepping
                  stone, contributing to my growth as a software engineer.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  My journey is marked by a dedication to excellence and an
                  insatiable curiosity. Whether it's developing complex systems
                  or simplifying user interfaces, I approach each project with
                  the same enthusiasm and meticulous attention to detail. I
                  believe that technology should not only solve problems but
                  also create seamless and delightful user experiences.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Today, I am proud of the work I have accomplished and the
                  professional growth I have achieved. I am excited about the
                  future and eager to continue pushing the boundaries of what is
                  possible in the tech world. Thank you for visiting my site,
                  and I look forward to connecting with like-minded individuals
                  and exploring new opportunities.
                </p>
              </>
            )}
            <div className="flex gap-4 items-center justify-start text-left">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleToggle();
                }}
              >
                <button className="py-3 px-6 h-12 rounded-md text-blue-500 hover:text-white dark:text-white text-sm md:text-base font-semibold ring-1 ring-blue-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                  {isExpanded ? "Less to read" : "More to read"}
                </button>
              </Link>

              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openGalleryModal();
                }}
              >
                <button className="py-3 h-12 px-6 rounded-md text-white text-sm md:text-base font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
                  {isGalleryLoading ? "Loading..." : "Visit My Gallery"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video */}

      <div className="hidden lg:block my-4 text-center">
        <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Wish to Join me in the tech space?
        </h3>
        <p className="text-base py-2">
          Watch this short video below for some clue 👇
        </p>
      </div>
      <div className="hidden md:flex justify-center items-center w-full mx-auto mt-8 lg:mt-10 relative">
        <div className="border items-center mt-2 mx-auto overflow-hidden relative rounded-lg p-2 shadow-lg">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XsWgiTAAroo?si=uHrixApnEXuTtlb5"
            title="YouTube video player"
            style={{
              border: "none",
              margin: "0 auto",
              textAlign: "center",
              position: "relative",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Loader for Blog Modal */}
      {isGalleryLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}

      {/* Blog Modal */}
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        message="You are about to be navigated to my Gallery page. Do you wish to continue?"
      >
        <div className="flex justify-center gap-4 p-4 mt-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleGalleryRedirect();
            }}
          >
            <button className="text-sm lg:text-base font-medium bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300">
              Sure, Navigate
            </button>
          </Link>

          <button
            onClick={() => setIsGalleryModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white text-sm lg:text-base font-medium py-2 px-8 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </GalleryModal>
    </section>
  );
};

export default About;
