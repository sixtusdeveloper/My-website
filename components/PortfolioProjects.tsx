"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import Loader from "@/components/ui/Loader";



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
    <div className="relative bg-secondary w-full mx-auto md:pt-8 px-6 lg:px-8 pb-10" id="projects">
      <div className="mx-auto max-w-6xl relative">
        {/* Loader Overlay */}
        {isLoading && <Loader />}

        <h1 className="font-bold text-center lg:text-[2.4rem] text-2xl leading-snug tracking-wider">
          My&nbsp;<span className="text-purple">Recent Projects</span>
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
        <div className="flex items-center flex-col lg:flex-nowrap lg:flex-row justify-center gap-8 p-4 lg:py-8 mt-4">
          {currentProjects.map(({ id, title, des, img, githubLink, iconLists, link }) => (
            <div
              className="relative my-8 group overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105"
              key={id}
              style={{ width: "auto", height: "auto" }}
            >
              <Image
                src={img}
                alt={title}
                width={300}
                height={200}
                className="w-full h-3/5 object-cover transition-opacity duration-300 group-hover:opacity-75 project-img"
                // style={{ width: 'auto', height: 'auto' }}
              />
              <div className="px-4 my-1">
                <h1 className="font-bold text-xl truncate">{truncateTitle(title, MAX_TITLE_LENGTH)}</h1>
                <p className="mt-2 text-sm line-clamp-2">{truncateDescription(des,  MAX_DESCRIPTION_LENGTH)}</p>
                <div className="inline-flex gap-2 relative rounded-full border py-1 text-sm bg-transparent">
                  <p className="text-sm">The magic behind?{" "}</p>
                  <a href={githubLink} target="_blank" className="font-semibold text-blue-600 cursor-pointer">
                    codebase{" "}
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="relative flex">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border rounded-full bg-secondary-foreground w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${index * 8}px)`, // Adjusted the X-axis translation to make them touch slightly
                          zIndex: iconLists.length - index, // Making sure the stacking is proper
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
                    // href={link}
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



