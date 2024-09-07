'use client';

import React, { useState, useRef, useEffect } from 'react';
import Modal from '@/components/ui/CertsModal'; // Update the import path if necessary
import { certificationsData, Certification } from '@/data/certificationsData'; // Import Certification type
import Image from 'next/image';
import { Button } from '@/components/ui/MovingBorder';
import Loader from '@/components/ui/Loader';
import { AiOutlineDownload } from 'react-icons/ai';

const MAX_DESCRIPTION_LENGTH = 40;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const ITEMS_PER_PAGE = 4; // Number of items per page

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);
  const [isLoading, setIsLoading] = useState(false); // State for full-page loader
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'downloaded'>('idle'); // Download state
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
    setDownloadStatus('idle'); // Reset download status

    window.scrollTo({
      top: scrollPosition.current,
      behavior: 'smooth',
    });
  };

  const handleDownload = () => {
    if (selectedCertification?.certUrl) {
      setDownloadStatus('downloading'); // Set status to downloading
      const link = document.createElement('a');
      link.href = selectedCertification.certUrl;
      link.download = `${selectedCertification.title}-certificate.pdf`;
      link.click();

      setTimeout(() => {
        setDownloadStatus('downloaded'); // Set status to downloaded after a delay
        setTimeout(() => {
          setDownloadStatus('idle'); // Reset status to idle after another delay
        }, 2000); // Adjust this delay as needed
      }, 2000); // Simulate download time
    }
  };

  const handlePageChange = (direction: 'previous' | 'next') => {
    setCurrentPage((prevPage) => {
      if (direction === 'previous') {
        return Math.max(prevPage - 1, 1); // Go to previous page, but not less than 1
      } else {
        return Math.min(prevPage + 1, totalPages); // Go to next page, but not more than totalPages
      }
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedCertifications = certificationsData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(certificationsData.length / ITEMS_PER_PAGE);

  return (
    <section id="certifications" className="bg-secondary relative md:pt-10 px-6 lg:px-14 pb-20">
      <div className='mx-auto max-w-5xl relative'>
        <h1 className="font-bold text-center text-[2.4rem] leading-snug tracking-wider">
          My&nbsp;<span className="text-purple">Certifications</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {paginatedCertifications.map((certification, index) => (
            <Button
              key={index}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000) + 10000}
              className="flex-1 border bg-secondary"
              onClick={() => openModal(certification)}
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <span className='rounded-full border'>
                        <Image
                            src={certification.imageUrl}
                            alt={certification.title}
                            width={100}
                            height={100}
                            className="w-full p-1 h-32 relative overflow-hidden object-cover rounded-lg mb-4"
                        />
                    </span>
                    <div className="lg:ms-5">
                        <h2 className="text-start text-xl md:text-2xl font-bold">{certification.title}</h2>
                        <p className="text-base font-semibold mt-2">{certification.institution}</p>
                        <p className="text-sm mt-1">{certification.year}</p>
                        
                        <p className="text-base text-start tracking-wide leading-6 mt-3 font-semibold">
                            {truncateDescription(certification.desc ?? '', MAX_DESCRIPTION_LENGTH)}&nbsp;
                            <span className="text-blue-600 text-sm text-end font-medium tracking-wide">
                            Read more
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
            onClick={() => handlePageChange('previous')}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300' : 'bg-purple-600 text-white'} focus:outline-none`}
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300' : 'bg-purple-600 text-white'} focus:outline-none`}
          >
            Next
          </button>
        </div>

        {/* Full-page loader overlay */}
        {isLoading && <Loader />} {/* Show loader */}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div ref={modalRef} className="p-4 max-h-[80vh] overflow-y-auto no-scrollbar relative">
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                {selectedCertification && (
                  <>
                    <h3 className="font-bold tracking-wide text-xl mb-4">
                      {selectedCertification.title}
                    </h3>
                    <p className="mb-4">
                      <span className="font-medium text-base tracking-wide">Institution:</span>&nbsp;<span className="text-sm tracking-wide">{selectedCertification.institution}</span>
                    </p>
                    <p className="mb-4">
                      <span className="font-medium text-base tracking-wide">Year:</span>&nbsp;<span className="text-base tracking-wide">{selectedCertification.year}</span>
                    </p>
                    <div className="relative flex justify-center text-center w-full mb-4">
                      <Image
                        src={selectedCertification.imageUrl}
                        alt={selectedCertification.title}
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
              </div>
            )}
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Certifications;








