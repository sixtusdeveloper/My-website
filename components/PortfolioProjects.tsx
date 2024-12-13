"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import Loader from "@/components/ui/Loader";
import { FiArrowRight } from 'react-icons/fi'; // Feather Icons



// Truncate the Project title to a maximum length
const MAX_TITLE_LENGTH = 30;
const truncateTitle = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the Project Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 100;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const projectsPerPage = 3;

  const filteredProjects = projects.filter(
    (project) => project.category === selectedCategory
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleLinkClick = (url: string) => {
    setIsLoading(true);
    // Set a timeout to simulate loading before redirecting
    setTimeout(() => {
      window.open(url, "_blank");
      setIsLoading(false);
    }, 2000); // Adjust timeout as needed
  };


  return (
    <div className="relative bg-secondary w-full mx-auto md:pt-8 px-4 lg:px-8 pb-10" id="projects">
      <div className="mx-auto max-w-6xl relative">
        {/* Loader Overlay */}
        {isLoading && <Loader />}

        <h1 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide">
          <strong>My&nbsp;<span className="bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-600 bg-clip-text text-transparent">Recent Projects</span></strong>
        </h1>

        {/* Category Buttons */}
        <div className="flex justify-center my-4">
          <button
            onClick={() => {
              setSelectedCategory("Frontend");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 mx-2 rounded-md tracking-wide cursor-pointer transition-all duration-300 ${
              selectedCategory === "Frontend"
                ? "bg-blue-800 text-white"
                : "bg-transparent border"
            }`}
          >
            Frontend Projects
          </button>
          <button
            onClick={() => {
              setSelectedCategory("Fullstack");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 mx-2 rounded-md tracking-wide transition-all duration-300 ${
              selectedCategory === "Fullstack"
                ? "bg-blue-800 text-white"
                : "bg-transparent border"
            }`}
          >
            Fullstack Projects
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid gap-x-2 gap-y-8 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2 lg:py-8 mt-4">
          {currentProjects.map(({ id, title, des, img, githubLink, iconLists, link }) => (
            <div
              className="relative group overflow-hidden border rounded-3xl transition-transform transform hover:scale-105"
              key={id}
              style={{ width: "100%", height: "100%" }}
            >
              <Image
                src={img}
                alt={title}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-75"
              />
              <div className="p-4">
                <h1 className="font-bold text-xl truncate">{truncateTitle(title, MAX_TITLE_LENGTH)}</h1>
                <p className="mt-2 text-sm line-clamp-2">{truncateDescription(des, MAX_DESCRIPTION_LENGTH)}</p>

                <a
                  href={githubLink}
                  target="_blank"
                  className="inline-flex items-center w-full font-semibold px-2 py-1 text-sm text-blue-500 hover:text-blue-600 cursor-pointer"
                >
                  Project codebase <FiArrowRight className="ml-2" />
                </a>

                <div className="flex items-center justify-between mt-4">
                  <div className="relative flex">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border rounded-full bg-secondary w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${index * 8}px)`,
                          zIndex: iconLists.length - index,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon"
                          width={8}
                          height={8}
                          className="p-2"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    ))}
                  </div>
                  <a
                    onClick={() => handleLinkClick(link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center cursor-pointer text-blue-500 hover:text-blue-300 transition-colors duration-300"
                  >
                    Live Site <FaLocationArrow className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => paginate(pageNumber)}
                className={`px-4 py-1 mx-1 rounded-md cursor-pointer transition-all duration-300 ${
                  currentPage === pageNumber
                    ? "bg-blue-800 text-white"
                    : "bg-transparent border"
                }`}
              >
                {pageNumber}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;



