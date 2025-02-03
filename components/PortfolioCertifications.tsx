"use client";

import React, { useState, useRef, useEffect } from "react";
import Modal from "@/components/ui/CertsModal"; // Update the import path if necessary
import { certificationsData, Certification } from "@/data/certificationsData"; // Import Certification type
import Image from "next/image";
import { Button } from "@/components/ui/MovingBorder";
import Loader from "@/components/ui/Loader";
import { AiOutlineDownload } from "react-icons/ai";

const MAX_DESCRIPTION_LENGTH = 80;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const ITEMS_PER_PAGE = 4; // Number of items per page

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for full-page loader
  const [downloadStatus, setDownloadStatus] = useState<
    "idle" | "downloading" | "downloaded"
  >("idle"); // Download state
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollPosition = useRef(0);

  const openModal = (certification: Certification) => {
    setIsLoading(true); // Show the full-page loader
    setSelectedCertification(certification);

    // Simulate a delay for the loading state
    setTimeout(() => {
      scrollPosition.current = window.scrollY;
      setIsModalOpen(true);
      setIsLoading(false); // Hide the full-page loader
    }, 2000); // Adjust the delay as needed
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertification(null);
    setDownloadStatus("idle"); // Reset download status

    window.scrollTo({
      top: scrollPosition.current,
      behavior: "smooth",
    });
  };

  const handleDownload = () => {
    if (selectedCertification?.certUrl) {
      setDownloadStatus("downloading"); // Set status to downloading
      const link = document.createElement("a");
      link.href = selectedCertification.certUrl;
      link.download = `${selectedCertification.title}-certificate.pdf`;
      link.click();

      setTimeout(() => {
        setDownloadStatus("downloaded"); // Set status to downloaded after a delay
        setTimeout(() => {
          setDownloadStatus("idle"); // Reset status to idle after another delay
        }, 2000); // Adjust this delay as needed
      }, 2000); // Simulate download time
    }
  };

  const handlePageChange = (direction: "previous" | "next") => {
    setCurrentPage((prevPage) => {
      if (direction === "previous") {
        return Math.max(prevPage - 1, 1); // Go to previous page, but not less than 1
      } else {
        return Math.min(prevPage + 1, totalPages); // Go to next page, but not more than totalPages
      }
    });
  };

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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCertifications = certificationsData.slice(
    startIndex,
    endIndex
  );
  const totalPages = Math.ceil(certificationsData.length / ITEMS_PER_PAGE);

  return (
    <section
      id="certifications"
      className="bg-secondary relative md:pt-10 px-6 lg:px-10 pb-20"
    >
      <div className="mx-auto max-w-6xl relative">
        <h1 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide">
          <strong>
            My Currently{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Verified Certifications
            </span>
          </strong>
        </h1>
        <div className="w-full mt-12 grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
          {paginatedCertifications.map((certification, index) => (
            <Button
              key={index}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 border bg-secondary"
              onClick={() => openModal(certification)}
            >
              <div className="flex lg:flex-row flex-col lg:items-center px-2 py-8 md:p-8 lg:p-8 gap-2">
                <Image
                  src={certification.imageUrl}
                  alt={certification.title}
                  width={200}
                  height={200}
                  className="lg:w-32 md:w-20 w-16 services-img"
                />

                <div className="lg:ms-5">
                  <h2 className="text-start leading-tight font-sans text-lg md:text-xl font-bold">
                    {certification.title}
                  </h2>
                  <p className="text-sm font-medium py-1 text-start leading-snug font-sans">
                    {certification.institution}&nbsp;-&nbsp;{certification.year}
                  </p>
                  <p className="text-sm text-start leading-snug py-1 font-sans font-medium">
                    {truncateDescription(
                      certification.desc ?? "",
                      MAX_DESCRIPTION_LENGTH
                    )}
                    &nbsp;
                    <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-indigo-800 bg-clip-text text-transparent font-sans text-sm text-end font-medium">
                      View Credentials
                    </span>
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex justify-center mt-8 space-x-2">
          <button
            onClick={() => handlePageChange("previous")}
            disabled={currentPage === 1}
            className={`px-4 py-1 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === 1
                ? "bg-transparent border cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            } focus:outline-none`}
          >
            Previous
          </button>
          <span className="px-4 py-1 mx-1">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange("next")}
            disabled={currentPage === totalPages}
            className={`px-4 py-1 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-transparent border cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            } `}
          >
            Next
          </button>
        </div>
        {/* Full-page loader overlay */}
        {isLoading && <Loader />} {/* Show loader */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div
            ref={modalRef}
            className="p-4 max-h-[80vh] overflow-y-auto no-scrollbar relative"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                {selectedCertification && (
                  <>
                    <Image
                      src={selectedCertification.imageUrl}
                      alt={selectedCertification.title}
                      width={100}
                      height={100}
                      style={{ width: "auto", height: "auto" }}
                      className="w-full p-1 h-12 certs-img relative overflow-hidden object-cover rounded-full mb-4"
                    />
                    <h3 className="font-bold text-xl mb-4">
                      {selectedCertification.title}
                    </h3>
                    <p className="mb-4">
                      <span className="font-medium text-base">
                        Institution:
                      </span>
                      &nbsp;
                      <span className="text-base">
                        {selectedCertification.institution}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">Year:</span>&nbsp;
                      <span className="text-base">
                        {selectedCertification.year}
                      </span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base">
                        Description:
                      </span>
                      &nbsp;
                      <span className="text-base">
                        {selectedCertification.desc}
                      </span>
                    </p>
                    <div className="relative flex justify-center text-center w-full mb-4">
                      <Image
                        src={selectedCertification.certUrl}
                        alt={selectedCertification.title}
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
                        className={`px-4 py-2 flex items-center cursor-pointer justify-center space-x-2 rounded-lg shadow-md ${
                          downloadStatus === "downloaded"
                            ? "bg-gradient-to-r from-green-500 via-indigo-600 to-green-600 text-white"
                            : "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white text-sm tracking-wide hover:bg-indigo-600"
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
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Certifications;
