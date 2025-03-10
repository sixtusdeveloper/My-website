"use client";

import React, { useState, useEffect } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import Image from "next/image";
import Loader from "@/components/ui/Loader";
import { FiArrowRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

// Truncate project technologies
const MAX_ICONS_DISPLAY = 3; // Limit for icons in project card

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
  const [isLoading, setIsLoading] = useState(false);
  const [showLiveModal, setShowLiveModal] = useState(false);
  const [showReadMoreModal, setShowReadMoreModal] = useState(false);
  interface Project {
    id: number;
    title: string;
    des: string;
    img: string;
    githubLink: string;
    iconLists: React.ElementType[];
    link: string;
  }

  const [currentProject, setCurrentProject] = useState<Project | null>(null);

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

  const handlePagination = (direction: "next" | "prev") => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLinkClick = (url: string) => {
    if (!url) {
      setShowLiveModal(true);
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      window.open(url, "_blank");
      setIsLoading(false);
    }, 2000);
  };

  const openReadMoreModal = (project: any) => {
    setCurrentProject(project);
    setShowReadMoreModal(true);
  };

  const closeModal = () => {
    setShowLiveModal(false);
    setShowReadMoreModal(false);
    setCurrentProject(null);
  };

  // Disable page scroll when modal is open
  useEffect(() => {
    if (showLiveModal || showReadMoreModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showLiveModal, showReadMoreModal]);

  return (
    <div
      className="relative bg-secondary w-full mx-auto md:pt-8 px-4 lg:px-8 pb-10"
      id="all-projects"
    >
      <div className="mx-auto max-w-7xl relative">
        {/* Loader Overlay */}
        {isLoading && <Loader />}

        <h2 className="p-4 lg:p-2 text-3xl md:text-4xl text-center font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          My&nbsp; Recent Projects
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center my-4">
          <button
            onClick={() => {
              setSelectedCategory("Frontend");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 mx-2 text-sm items-center font-semibold rounded-md tracking-wide cursor-pointer transition-all duration-300 ${
              selectedCategory === "Frontend"
                ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300"
                : "bg-transparent dark:bg-gray-900 border shadow-md hover:ease-in-out hover:scale-105 transition-all duration-300"
            }`}
          >
            Frontend Projects
          </button>
          <button
            onClick={() => {
              setSelectedCategory("Fullstack");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 text-sm items-center font-semibold mx-2 rounded-md tracking-wide transition-all duration-300 ${
              selectedCategory === "Fullstack"
                ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300"
                : "bg-transparent dark:bg-gray-900 border shadow-md hover:ease-in-out hover:scale-105 transition-all duration-300"
            }`}
          >
            Fullstack Projects
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid gap-x-2 gap-y-8 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:p-2 p-0 lg:py-8 mt-4">
          {currentProjects.map(
            ({ id, title, des, img, githubLink, iconLists, link }) => (
              <div
                className="bg-secondary dark:bg-gray-900 space-y-6 md:space-y-0 relative group overflow-hidden border shadow-sm rounded-3xl transition-transform transform hover:scale-105"
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
                  <h1 className="font-bold text-lg truncate font-sans">
                    {truncateTitle(title, MAX_TITLE_LENGTH)}
                  </h1>
                  <p className="mt-2 mb-1 text-sm font-sans line-clamp-2">
                    {truncateDescription(des, MAX_DESCRIPTION_LENGTH)}
                  </p>

                  <div className="flex justify-between mt-2 items-center">
                    <a
                      href={githubLink}
                      target="_blank"
                      className="inline-flex rounded-md items-center py-2 px-3 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-medium text-sm md:text-sm lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300"
                    >
                      Project codebase &#8594;
                    </a>

                    <button
                      onClick={() =>
                        openReadMoreModal({
                          title,
                          des,
                          img,
                          githubLink,
                          iconLists,
                          link,
                        })
                      }
                      className="bg-gradient-to-r from-pink-600 via-yellow-500 to-pink-600 hover:text-pink-600 bg-clip-text text-transparent text-sm text-end font-semibold"
                    >
                      Read more &#8594;
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center mt-3">
                      {iconLists
                        .slice(0, MAX_ICONS_DISPLAY)
                        .map((IconComponent, index) => (
                          <div
                            key={index}
                            className="border rounded-full bg-secondary w-8 h-8 flex justify-center items-center"
                          >
                            <IconComponent size={18} className="icon" />
                          </div>
                        ))}
                      {iconLists.length > MAX_ICONS_DISPLAY && (
                        <span className="ml-2 text-xs font-semibold text-gray-500">
                          +{iconLists.length - MAX_ICONS_DISPLAY} more
                        </span>
                      )}
                    </div>

                    <a
                      onClick={() => handleLinkClick(link)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        type="button"
                        className="py-2 px-3 bg-gradient-to-r from-blue-600 via-green-600 to-yellow-600 rounded-md text-white flex items-center cursor-pointer text-sm tracking-wide"
                      >
                        Live Site <FaLocationArrow className="ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePagination("prev")}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 items-center rounded cursor-pointer hover:ease-in-out hover:scale-105 transition-all duration-300 ${
              currentPage === 1
                ? "bg-secondary dark:bg-gray-900 border cursor-not-allowed shadow-md"
                : "bg-purple-600 hover:bg-pink-600 text-white"
            }`}
          >
            &#8592;&nbsp;Previous
          </button>
          <span className="px-4 py-1 mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePagination("next")}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 mx-1 rounded items-center cursor-pointer hover:ease-in-out hover:scale-105 transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-secondary dark:bg-gray-900 border cursor-not-allowed shadow-md"
                : "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white hover:ease-in-out hover:scale-105 transition-all duration-300"
            }`}
          >
            Next&nbsp;&#8594;
          </button>
        </div>

        {/* Live Site Modal */}
        {showLiveModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-secondary dark:-bg-gray-900 p-8 border rounded-lg shadow-md max-w-sm text-center">
              <h2 className="text-lg font-bold">Site Under Deployment</h2>
              <p className="text-sm mt-2">
                This site is currently being deployed. Please check back later,
                or explore the project codebase.
              </p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Read More Modal */}
        {showReadMoreModal && currentProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-2"
            onClick={closeModal}
          >
            <div
              className="relative bg-secondary dark:bg-gray-900 border rounded-lg shadow-md max-w-lg w-[100%] md:w-[800px] h-[65vh] md:h-[80vh] overflow-y-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentProject.img}
                alt={currentProject.title}
                className="w-full h-64 object-cover rounded-tl-md  rounded-tr-md project-detail-img"
                width={600}
                height={300}
                style={{ objectFit: "fill" }}
              />
              <div className="p-4">
                <h2 className="text-xl font-sans font-bold my-4">
                  {currentProject.title}
                </h2>
                <p className="text-sm leading-snug font-sans">
                  {currentProject.des}
                </p>
                <div className="my-4">
                  <p className="font-semibold mb-2 font-sans">
                    Technologies used:
                  </p>
                  <div className="flex flex-wrap gap-2 py-4">
                    {currentProject.iconLists.map((IconComponent, index) => (
                      <div
                        key={index}
                        className="border rounded-full bg-secondary w-10 h-10 flex justify-center items-center"
                      >
                        <IconComponent className="icon" size={20} />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-full mt-4 rounded-md py-3 px-6 text-white text-center font-medium text-base hover:bg-pink-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600"
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
