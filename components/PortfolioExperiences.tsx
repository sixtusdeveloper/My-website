"use client";

import React, { useState, useRef, useEffect } from "react";
import { experiences, education } from "@/data";
import Modal from "@/components/ui/ExpiModal";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import Loader from "@/components/ui/Loader";

// Truncate the course to a maximum length
const MAX_COURSE_LENGTH = 40;
const truncateCourse = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 70;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Pagination
const Experience = () => {
  const [selectedWorkExperience, setSelectedWorkExperience] =
    useState<WorkExperienceItem | null>(null);
  const [selectedSection, setSelectedSection] = useState("work");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] =
    useState<EducationItem | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "downloading" | "downloaded"
  >("idle"); // Download state
  const modalRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the experience section
  const scrollPosition = useRef(0); // Store the scroll position

  const openModal = (item: EducationItem | WorkExperienceItem) => {
    scrollPosition.current = window.scrollY; // Capture the current scroll position
    setIsLoading(true); // Start loading

    if ("degree" in item) {
      setSelectedEducation(item);
    } else {
      setSelectedWorkExperience(item);
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2000); // Adjust the delay as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEducation(null);
    setSelectedWorkExperience(null);
    setDownloadStatus("idle");

    if (sectionRef.current) {
      window.scrollTo({
        top: scrollPosition.current,
        behavior: "smooth",
      });
    }
  };

  // Close modal if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleDownload = () => {
    if (selectedEducation?.img) {
      setDownloadStatus("downloading"); // Set status to downloading
      const link = document.createElement("a");
      link.href = selectedEducation.img;
      link.download = `${selectedEducation.degree}-certificate.jpg`;
      link.click();

      setTimeout(() => {
        setDownloadStatus("downloaded"); // Set status to downloaded after a delay
        setTimeout(() => {
          setDownloadStatus("idle"); // Reset status to idle after another delay
        }, 2000); // Adjust this delay as needed
      }, 2000); // Simulate download time
    }
  };

  return (
    <section
      id="experience"
      className="relative bg-secondary w-full pt-8 lg:pt-8 px-2 lg:px-8 pb-20"
      ref={sectionRef} // Reference to the experience section
    >
      <div className="bg-secondary lg:max-w-5xl mx-auto relative">
        <div className="my-8 relative text-center">
          <h2 className="p-8 lg:p-4 text-3xl md:text-4xl mb-8 text-center font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            My Experience
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedSection("work")}
              className={`px-4 py-2 rounded-md cursor-pointer text-sm md:text-base lg:text-base ${
                selectedSection === "work"
                  ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300"
                  : "bg-transparent dark:bg-gray-900 border shadow-md hover:ease-in-out hover:scale-105 transition-all duration-300"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setSelectedSection("education")}
              className={`px-4 py-2 rounded-md cursor-pointer text-sm md:text-base lg:text-base ${
                selectedSection === "education"
                  ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base lg:text-base hover:ease-in-out hover:scale-105 transition-all duration-300"
                  : "bg-transparent dark:bg-gray-900 border shadow-md hover:ease-in-out hover:scale-105 transition-all duration-300"
              }`}
            >
              Education
            </button>
          </div>
        </div>
        <div className="timeline">
          {selectedSection === "work"
            ? experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`timeline-container ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-icon"></div>
                  <div className="bg-secondary dark:bg-gray-900 border p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold">{experience.title}</h3>
                    <p className="inline-flex space-x-2 py-1 mb-0">
                      <span className="text-sm">
                        {experience.organization}&nbsp;-&nbsp;
                        <span className="text-sm">{experience.type}</span>
                      </span>
                    </p>
                    <span className="flex flex-wrap gap-2 items-center">
                      <span className="text-sm">
                        {experience.nature}&nbsp;&#45;&nbsp;
                      </span>
                      <time className="text-sm" suppressHydrationWarning>
                        {experience.date}
                      </time>
                    </span>

                    <p className="text-sm py-1 mb-0">{experience.location}</p>
                    <div className="text-base leading-6">
                      {truncateDescription(
                        experience.description,
                        MAX_DESCRIPTION_LENGTH
                      )}
                      &nbsp;
                      <a
                        href="#"
                        onClick={() => openModal(experience)}
                        className="block bg-gradient-to-r from-pink-600 via-yellow-500 to-pink-600 hover:text-pink-600 bg-clip-text text-transparent text-sm text-end font-semibold"
                      >
                        Read More &#8594;
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : education.map((edu, index) => (
                <div
                  key={index}
                  className={`timeline-container ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <div className="timeline-icon"></div>

                  <div className="bg-secondary dark:bg-gray-900 border p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-bold mb-1">
                      {truncateCourse(edu.degree, MAX_COURSE_LENGTH)}
                    </h3>
                    <span className="flex flex-wrap gap-2 items-center py-1 mb-0 font-bold">
                      <p className="text-sm">{edu.institution}&nbsp;-&nbsp;</p>
                      <p className="text-sm">{edu.type}</p>
                    </span>
                    <p className="text-white-200 text-sm py-1 mb-0">
                      {edu.status}
                    </p>
                    <span className="flex flex-wrap gap-2 items-center">
                      <p className="text-sm items-center py-1 mb-0">
                        {edu.location}
                      </p>
                      <time
                        className="text-sm items-center"
                        suppressHydrationWarning
                      >
                        {edu.date}
                      </time>
                    </span>
                    <div className="text-base leading-6">
                      {truncateDescription(
                        edu.description,
                        MAX_DESCRIPTION_LENGTH
                      )}
                      &nbsp;
                      <a
                        href="#"
                        onClick={() => openModal(edu)}
                        className="block bg-gradient-to-r from-pink-600 via-yellow-500 to-pink-600 hover:text-pink-600 bg-clip-text text-transparent text-sm text-end font-semibold"
                      >
                        View Credentials &#8594;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div
            ref={modalRef}
            className="p-2 md:p-4 max-h-[80vh] overflow-y-auto no-scrollbar relative"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                {selectedEducation && (
                  <>
                    <h3 className="font-bold text-xl mb-4">
                      {selectedEducation?.degree}
                    </h3>
                    <p className="mb-4">
                      <span className="font-semimedium text-base">
                        Institution:
                      </span>
                      &nbsp;
                      <span className="text-base">
                        {selectedEducation?.institution}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Type:</span>&nbsp;
                      <span className="text-base">
                        {selectedEducation?.type}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Status:</span>
                      &nbsp;
                      <span className="text-base">
                        {selectedEducation?.status}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Location:</span>
                      &nbsp;
                      <span className="text-base">
                        {selectedEducation?.location}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Date:</span>&nbsp;
                      <span className="text-base">
                        {selectedEducation?.date}
                      </span>
                    </p>
                    <p className="mb-6 text-base text-medium leading-6">
                      {selectedEducation?.description}
                    </p>
                    <div className=" relative flex justify-center text-center w-full mb-4">
                      <Image
                        src={selectedEducation?.img || "/certificates/cert.png"}
                        alt={selectedEducation?.degree || "Certificate Image"}
                        className="rounded-md w-full relative"
                        width={600}
                        height={300}
                        objectFit="cover"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                      <button
                        onClick={handleDownload}
                        className={`px-4 py-2 flex items-center bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-base cursor-pointer justify-center space-x-2 rounded-md ${
                          downloadStatus === "downloaded"
                            ? "bg-gradient-to-r from-green-500 via-indigo-600 to-green-800"
                            : "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"
                        } focus:outline-none`}
                      >
                        <AiOutlineDownload className="mr-2" />
                        {downloadStatus === "idle" && "Download Certificate"}
                        {downloadStatus === "downloading" && "Downloading..."}
                        {downloadStatus === "downloaded" && "Downloaded"}
                      </button>
                    </div>
                  </>
                )}

                {selectedWorkExperience && (
                  <>
                    <div className="flex flex-col justify-center flex-wrap lg:flex-nowrap md:flex-row md:justify-between gap-4 md:gap-6 lg:gap-8 space-x-2 md:space-x-6">
                      <div>
                        <h3 className="font-bold text-xl mb-4">
                          {selectedWorkExperience.title}
                        </h3>
                        <p className="mb-4">
                          <span className="font-medium text-base">
                            Organization:
                          </span>
                          &nbsp;
                          <span className="text-base">
                            {selectedWorkExperience.organization}
                          </span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Type:</span>
                          &nbsp;
                          <span className="text-base">
                            {selectedWorkExperience.type}
                          </span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Nature:</span>
                          &nbsp;
                          <span className="text-base">
                            {selectedWorkExperience.nature}
                          </span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">
                            Location:
                          </span>
                          &nbsp;
                          <span className="text-base">
                            {selectedWorkExperience.location}
                          </span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Date:</span>
                          &nbsp;
                          <span className="text-base">
                            {selectedWorkExperience.date}
                          </span>
                        </p>
                      </div>
                      <div>
                        <Image
                          src={selectedWorkExperience.img || "/profile.jpg"}
                          alt={selectedWorkExperience.title || "profile image"}
                          className="rounded-md w-full"
                          width={200}
                          height={200}
                          objectFit="cover"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                    </div>
                    <div className="relative py-4">
                      <h4 className="font-bold tracking-wider text-lg my-4">
                        Job description
                      </h4>
                      <p className="text-base text-medium leading-7">
                        {selectedWorkExperience.fullDesc}
                      </p>
                    </div>
                    <div className="py-4 relative overflow-hidden">
                      <h4 className="font-bold text-lg my-4">
                        Technologies & Softwares Used
                      </h4>
                      <ul className="flex flex-wrap gap-4">
                        {selectedWorkExperience.technologies.map(
                          (tech, index) => (
                            <li
                              key={index}
                              className="px-3 py-2 border rounded-lg bg-transparent text-base leading-6"
                            >
                              {tech}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </Modal>
        {/* Loading animation */}
        {isLoading && <Loader />} {/* Show loader */}
      </div>
    </section>
  );
};

export default Experience;
