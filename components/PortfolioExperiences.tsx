'use client';

import React, { useState, useRef, useEffect } from "react";
import { experiences, education } from "@/data";
import { Spotlight } from "@/components/ui/Spotlight";
import Modal from "@/components/ui/ExpiModal";
import Image from 'next/image';
import { AiOutlineDownload } from 'react-icons/ai';
import Loader from "@/components/ui/Loader";


// Truncate the course to a maximum length
const MAX_COURSE_LENGTH = 35;
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
      id="Experience"
      className="relative bg-secondary :pt-10 mx-auto max-w-6xl px-4 lg:px-8 pb-20"
      ref={sectionRef} // Reference to the experience section
    >

      <div className="my-8 relative text-center">
        <h2 className="font-bold text-center text-[2.4rem] leading-snug tracking-wider mb-8">
          My <span className="text-purple">Experience</span>
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedSection("work")}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              selectedSection === "work"
                ? "bg-blue-800 text-white"
                : "bg-transparent ring-1"
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setSelectedSection("education")}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              selectedSection === "education"
                ? "bg-blue-800 text-white"
                : "bg-transparent ring-1"
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
              <div className="bg-black-200 border p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold tracking-wide">
                  {experience.title}
                </h3>
                <p className="inline-flex space-x-2">
                  <span className="text-sm text-white-200 tracking-wide">
                    {experience.organization}&nbsp;-&nbsp;
                    <span className="text-sm text-purple">
                      {experience.type}
                    </span>
                  </span>
                </p>
                <p className="flex py-1 text-sm">{experience.nature}</p>
                <time
                  className="block text-xs mb-2 tracking-wide"
                  suppressHydrationWarning
                >
                  {experience.date}
                </time>
                <p className="text-white-100 text-sm tracking-wide">
                  {experience.location}
                </p>
                <div className="text-sm leading-6">
                  {truncateDescription(experience.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
                  <a
                    href="#"
                    onClick={() => openModal(experience)}
                    className="font-medium tracking-wider cursor-pointer text-sm text-blue-600"
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

                <div className="bg-black-200 border p-6 rounded-lg shadow-lg">
                  <h3 className="text-lg font-bold tracking-wider mb-1">
                    {truncateCourse(edu.degree, MAX_COURSE_LENGTH)}
                  </h3>
                  <p className="inline-flex space-x-2">
                    <span className="text-sm tracking-wide">
                      {edu.institution}&nbsp;-&nbsp;
                      <span className="text-sm tracking-wide text-purple">{edu.type}</span>
                    </span>
                  </p>
                  <p className="text-white-200 text-sm py-1">
                    {edu.status} 
                  </p>
                  <time
                    className="block text-xs mb-1"
                    suppressHydrationWarning
                  >
                    {edu.date} 
                  </time>
                  <div className="text-sm leading-6">
                    {truncateDescription(edu.description, MAX_DESCRIPTION_LENGTH)}&nbsp;
                    <a
                      href="#"
                      onClick={() => openModal(edu)}
                      className="font-medium tracking-wider cursor-pointer text-sm text-blue-600"
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
          className="p-6 max-h-[80vh] overflow-y-auto no-scrollbar relative bg-black-800 border rounded-lg shadow-lg"
        >
          {isLoading ? (
            <Loader /> 
           
          ) : (
            <div>
              {selectedEducation && (
                <>
                  <h3 className="font-bold tracking-wide text-xl mb-4">
                    {selectedEducation?.degree}
                  </h3>
                  <p className="mb-4">
                    <span className="font-medium text-sm tracking-wide">Institution:</span>&nbsp;<span className="text-sm tracking-wide">{selectedEducation?.institution}</span>
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-sm tracking-wide">Type:</span>&nbsp;<span className="text-sm tracking-wide">{selectedEducation?.type}</span>
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-sm tracking-wide">Status:</span>&nbsp;<span className="text-sm tracking-wide">{selectedEducation?.status}</span>
                  </p>
                  <p className="mb-4">
                    <span className="font-medium text-sm tracking-wide">Date:</span>&nbsp;<span className="text-sm tracking-wide">{selectedEducation?.date}</span>
                  </p>
                  <p className="mb-6 text-sm text-medium leading-6 tracking-wide">{selectedEducation?.description}</p>
                  <div className=" relative flex justify-center text-center w-full mb-4">
                    <Image
                      src={selectedEducation?.img || "/cert.png"}
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
                      className={`px-4 py-2 flex items-center cursor-pointer justify-center space-x-2 rounded-md shadow-md ${
                        downloadStatus === "downloaded"
                          ? "bg-green-500 text-white"
                          : "bg-blue-600 text-white hover:bg-blue-700"
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
                  <div className="flex justify-between gap-8 space-x-6">
                    <div>
                      <h3 className="font-bold tracking-wide text-xl mb-4">
                        {selectedWorkExperience.title}
                      </h3>
                      <p className="mb-4">
                        <span className="font-medium text-sm tracking-wide">Organization:</span>&nbsp;<span className="text-sm tracking-wide">{selectedWorkExperience.organization}</span>
                      </p>
                      <p className="mb-4">
                        <span className="font-medium text-sm tracking-wide">Type:</span>&nbsp;<span className="text-sm tracking-wide">{selectedWorkExperience.type}</span>
                      </p>
                      <p className="mb-4">
                        <span className="font-medium text-sm tracking-wide">Nature:</span>&nbsp;<span className="text-sm tracking-wide">{selectedWorkExperience.nature}</span>
                      </p>
                      <p className="mb-4">
                        <span className="font-medium text-sm tracking-wide">Location:</span>&nbsp;<span className="text-sm tracking-wide">{selectedWorkExperience.location}</span>
                      </p>
                      <p className="mb-4">
                        <span className="font-medium text-sm tracking-wide">Date:</span>&nbsp;<span className="text-sm tracking-wide">{selectedWorkExperience.date}</span>
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
                    <h4 className="text-white-100 font-bold tracking-wider text-lg my-4">Job description</h4> 
                    <p className="text-sm text-medium text-white-100 leading-7 tracking-wide">{selectedWorkExperience.fullDesc}</p>
                  </div>
                  <div className="py-4 relative overflow-hidden">
                    <h4 className="text-white-100 font-bold tracking-wider text-lg my-4">Technologies used</h4>
                    <ul className="flex flex-wrap gap-4">
                      {selectedWorkExperience.technologies.map((tech, index) => (
                        <li
                          key={index}
                          className="px-3 py-2 border rounded-lg bg-transparent text-sm leading-6 tracking-wide"
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
    </section>
  );
};

export default Experience;

