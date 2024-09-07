import React, { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Modal from 'react-modal';
import { certificationsData, Certification } from '@/data/certificationsData'; // Import data

Modal.setAppElement('#__next'); // Required for accessibility in Next.js

const PortfolioCertifications = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [certToView, setCertToView] = useState<string | null>(null); // Cert to view can be string or null
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const itemsPerPage = 2;
  const totalPages = Math.ceil(certificationsData.length / itemsPerPage);

  // Function to handle modal opening with loading state
  const handleViewCredential = (certUrl: string) => {
    setIsLoading(true);
    setCertToView(certUrl);

    setTimeout(() => {
      setIsLoading(false);
      setModalIsOpen(true);
    }, 2000);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setCertToView(null); // Reset certToView on close
  };

  // Pagination functions
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentCertifications = certificationsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section id="certifications" className="py-10 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Verified Certifications</h2>
        
        {/* Display certifications with pagination */}
        <div className="grid gap-8 md:grid-cols-2">
          {currentCertifications.map((cert: Certification, index: number) => (
            <div key={index} className="flex relative justify-center gap-4 p-4 bg-secondary border rounded-[1.75rem] shadow">
              <div className="lg:text-start text-center lg:items-start items-center relative">
                <FaGraduationCap size={60} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="mt-2 text-base leading-relaxed">
                  <span className="font-semibold">Institution:</span> {cert.institution} <br />
                  <span className="font-semibold">Year:</span> {cert.year}
                </p>
                <a
                  href="#"
                  className="text-blue-600 underline mt-4 inline-block"
                  onClick={() => handleViewCredential(cert.certUrl)}
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            className="px-4 py-2 bg-transparent border rounded-lg"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-transparent border rounded-lg"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal for viewing the certificate */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="bg-secondary p-6 max-w-3xl mx-auto mt-20 rounded-lg shadow-lg relative"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-full">
            <AiOutlineLoading3Quarters size={50} className="animate-spin" />
          </div>
        ) : (
          certToView && (
            <>
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <embed src={certToView} type="application/pdf" width="100%" height="400px" />
              <div className="flex justify-between mt-4">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Close
                </button>
                <a
                  href={certToView}
                  download
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Download
                </a>
              </div>
            </>
          )
        )}
      </Modal>
    </section>
  );
};

export default PortfolioCertifications;
