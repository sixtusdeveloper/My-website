'use client';

import React, { useState, useRef, useEffect } from "react";
import { experiences, education } from "@/data";
import Modal from "@/components/ui/ExpiModal";
import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import Loader from "@/components/ui/Loader";


// Truncate the course to a maximum length
const MAX_COURSE_LENGTH = 30;
const truncateCourse = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 60;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Pagination
const Experience = () => {
  const [selectedWorkExperience, setSelectedWorkExperience] = useState<WorkExperienceItem | null>(null);
  const [selectedSection, setSelectedSection] = useState("work");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [downloadStatus, setDownloadStatus] = useState<"idle" | "downloading" | "downloaded">("idle"); // Download state
  const modalRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the experience section
  const scrollPosition = useRef(0); // Store the scroll position

  const openModal = (item: EducationItem | WorkExperienceItem) => {
    scrollPosition.current = window.scrollY; // Capture the current scroll position
    setIsLoading(true); // Start loading
  
    if ('degree' in item) {
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
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
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
      const link = document.createElement('a');
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
      className="relative bg-secondary w-full pt-8 lg:pt-10 px-2 lg:px-8 pb-20"
      ref={sectionRef} // Reference to the experience section
    >
      <div className="bg-secondary lg:max-w-5xl mx-auto relative">

        <div className="my-8 relative text-center">
          <h2 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide mb-8">
            <strong>My <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-800 bg-clip-text text-transparent">Experience</span></strong> 
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setSelectedSection("work")}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                selectedSection === "work"
                  ? "bg-blue-800 text-white"
                  : "bg-transparent border"
              }`}
            >
              Work Experience
            </button>
            <button
              onClick={() => setSelectedSection("education")}
              className={`px-4 py-2 rounded-md cursor-pointer ${
                selectedSection === "education"
                  ? "bg-blue-800 text-white"
                  : "bg-transparent border"
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
                <div className="bg-secondary border p-6 rounded-lg">
                  <h3 className="text-lg font-bold">
                    {experience.title}
                  </h3>
                  <p className="inline-flex space-x-2 py-1 mb-0">
                    <span className="text-sm">
                      {experience.organization}&nbsp;-&nbsp;
                      <span className="text-sm">
                        {experience.type}
                      </span>
                    </span>
                  </p>
                  <span className="flex gap-2 items-center">
                    <span className="text-sm">{experience.nature}&nbsp;&#45;&nbsp;</span>
                    <time
                      className="text-sm"
                      suppressHydrationWarning
                    >
                      {experience.date}
                    </time>
                    
                  </span>
                 
                  <p className="text-sm py-1 mb-0">
                    {experience.location}
                  </p>
                  <div className="text-base leading-6">
                    {truncateDescription(experience.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
                    <a
                      href="#"
                      onClick={() => openModal(experience)}
                      className="font-medium cursor-pointer text-base text-blue-600"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      Read more{" "}
                      <span aria-hidden="true">&rarr;</span>
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

                  <div className="bg-secondary border p-6 rounded-lg">
                    <h3 className="text-lg font-bold mb-1">
                      {truncateCourse(edu.degree, MAX_COURSE_LENGTH)}
                    </h3>
                    <p className="inline-flex space-x-2 py-1 mb-0">
                      <span className="text-sm">
                        {edu.institution}&nbsp;-&nbsp;
                        <span className="text-sm text-purple">{edu.type}</span>
                      </span>
                    </p>
                    <p className="text-white-200 text-sm py-1 mb-0">
                      {edu.status} 
                    </p>
                    <time
                      className="block text-sm mb-1"
                      suppressHydrationWarning
                    >
                      {edu.date} 
                    </time>
                    <div className="text-base leading-6">
                      {truncateDescription(edu.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
                      <a
                        href="#"
                        onClick={() => openModal(edu)}
                        className="font-medium cursor-pointer text-base text-blue-600"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        View credentials{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
    
        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div
            ref={modalRef}
            className="p-4 max-h-[80vh] overflow-y-auto no-scrollbar relative"
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
                      <span className="font-medium text-base">Institution:</span>&nbsp;<span className="text-base">{selectedEducation?.institution}</span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Type:</span>&nbsp;<span className="text-base">{selectedEducation?.type}</span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Status:</span>&nbsp;<span className="text-base">{selectedEducation?.status}</span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Date:</span>&nbsp;<span className="text-base">{selectedEducation?.date}</span>
                    </p>
                    <p className="mb-6 text-base text-medium leading-6">{selectedEducation?.description}</p>
                    <div className=" relative flex justify-center text-center w-full mb-4">
                      <Image
                        src={selectedEducation?.img || "/certificates/cert.png"}
                        alt={selectedEducation?.degree || "Certificate Image"}
                        className="rounded-md w-full relative"
                        width={600}
                        height={300}
                        objectFit="cover"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </div>
                    <div className="mt-6 flex items-center justify-center">
                      <button
                        onClick={handleDownload}
                        className={`px-4 py-2 flex items-center cursor-pointer bg-blue-600 text-white hover:bg-blue-800 justify-center space-x-2 rounded-md${
                          downloadStatus === "downloaded"
                            ? "bg-green-500 text-white rounded-md"
                            : "bg-blue-600 text-white hover:bg-blue-800 rounded-md"
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
                          <span className="font-medium text-base">Organization:</span>&nbsp;<span className="text-base">{selectedWorkExperience.organization}</span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Type:</span>&nbsp;<span className="text-base">{selectedWorkExperience.type}</span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Nature:</span>&nbsp;<span className="text-base">{selectedWorkExperience.nature}</span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Location:</span>&nbsp;<span className="text-base">{selectedWorkExperience.location}</span>
                        </p>
                        <p className="mb-4">
                          <span className="font-medium text-base">Date:</span>&nbsp;<span className="text-base">{selectedWorkExperience.date}</span>
                        </p>
                        
                      </div>
                      <div>
                        <Image 
                        src={selectedWorkExperience.img || "/profile.jpg" }
                        alt={selectedWorkExperience.title || "profile image" }
                        className="rounded-md w-full"
                        width={200}
                        height={200}
                        objectFit="cover"
                        style={{ width: 'auto', height: 'auto' }}
                        />
                      </div>
                    </div>
                    <div className="relative py-4">
                      <h4 className="font-bold tracking-wider text-lg my-4">Job description</h4> 
                      <p className="text-base text-medium leading-7">{selectedWorkExperience.fullDesc}</p>
                    </div>
                    <div className="py-4 relative overflow-hidden">
                      <h4 className="font-bold text-lg my-4">Technologies</h4>
                      <ul className="flex flex-wrap gap-4">
                        {selectedWorkExperience.technologies.map((tech, index) => (
                          <li
                            key={index}
                            className="px-3 py-2 border rounded-lg bg-transparent text-base leading-6"
                          >
                            {tech}
                          </li>
                        ))}
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

