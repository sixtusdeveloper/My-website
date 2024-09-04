"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";



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

  const projectsPerPage = 2;

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
    <div className="relative md:pt-10 mx-auto max-w-7xl px-6 lg:px-10 pb-20" id="Projects">
      {/* Loader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-gray-100"></div>
        </div>
      )}

      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        My&nbsp;<span className="text-purple">Recent Projects</span>
      </h1>

      {/* Category Buttons */}
      <div className="flex justify-center mt-6 mb-8">
        <button
          onClick={() => {
            setSelectedCategory("Frontend");
            setCurrentPage(1);
          }}
          className={`px-4 py-2 mx-2 rounded-md tracking-wide cursor-pointer transition-all duration-300 ${
            selectedCategory === "Frontend"
              ? "bg-blue-800 text-white"
              : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
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
              : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
          }`}
        >
          Fullstack Projects
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center py-8 lg:py-10 gap-10 mt-4">
        {currentProjects.map(({ id, title, des, img, githubLink, iconLists, link }) => (
          <div
            className="relative my-8 group overflow-hidden rounded-3xl bg-[#13162D] shadow-lg transition-transform transform hover:scale-105"
            key={id}
            style={{ width: "430px", height: "400px" }}
          >
            <Image
              src={img}
              alt={title}
              width={400}
              height={400}
              className="w-full h-3/5 object-cover transition-opacity duration-300 group-hover:opacity-75 project-img"
              // style={{ width: 'auto', height: 'auto' }}
            />
            <div className="p-4 my-1">
              <h1 className="font-bold text-xl truncate">{truncateTitle(title, MAX_TITLE_LENGTH)}</h1>
              <p className="text-gray-400 mt-2 text-sm line-clamp-2">{truncateDescription(des,  MAX_DESCRIPTION_LENGTH)}</p>
              <div className="relative rounded-full py-1 my-1 text-sm leading-6 text-blue-200 bg-black-00/10 hover:ring-gray-900/20">
                Curious of the magic behind?{" "}
                <a href={githubLink} target="_blank" className="font-semibold text-purple cursor-pointer">
                  <span aria-hidden="true" className="absolute inset-0" />
                  Check project codebase{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  {iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                         transform: `translateX(-${5 * index + 2}px)`,
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
                  Check Live Site <FaLocationArrow className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => paginate(pageNumber)}
              className={`px-4 py-2 mx-2 rounded-md cursor-pointer transition-all duration-300 ${
                currentPage === pageNumber
                  ? "bg-blue-800 text-white"
                  : "bg-gray-900 text-white border border-gray-800 hover:bg-blue-600 hover:border-blue-600"
              }`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;



