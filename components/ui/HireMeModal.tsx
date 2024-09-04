'use client';

import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { AiOutlineDownload } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [downloadStatus, setDownloadStatus] = useState<{
    [key: string]: string;
  }>({
    pdf: "Download CV (PDF)",
    docx: "Download CV (Docx)"
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const downloadFile = (fileUrl: string, fileName: string, fileType: 'pdf' | 'docx'): void => {
    setDownloadStatus(prevStatus => ({
      ...prevStatus,
      [fileType]: `Downloading ${fileType.toUpperCase()}...`
    }));

    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);

        setDownloadStatus(prevStatus => ({
          ...prevStatus,
          [fileType]: "Downloaded"
        }));

        setTimeout(() => {
          setDownloadStatus(prevStatus => ({
            ...prevStatus,
            [fileType]: fileType === 'pdf' ? "Download CV (PDF)" : "Download CV (Docx)"
          }));
        }, 5000);
      })
      .catch(() => {
        console.error("Failed to download the file");
        setDownloadStatus(prevStatus => ({
          ...prevStatus,
          [fileType]: fileType === 'pdf' ? "Download CV (PDF)" : "Download CV (Docx)"
        }));
      });
  };

  const handleDownloadPDFClick = () => {
    downloadFile("/My-Resume.pdf", "My-Resume.pdf", 'pdf');
  };

  const handleDownloadDOCXClick = () => {
    downloadFile("/My-Resume.docx", "My-Resume.docx", 'docx');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-gray-900 border border-gray-800 shadow-lg rounded-lg max-w-3xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-gray-800 text-gray-400 hover:text-white"
        >
          <IoClose size={18} />
        </button>
        {children}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handleDownloadPDFClick}
            className="py-2 px-4 flex items-center text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition duration-300 ease-in-out"
          >
            <AiOutlineDownload className="mr-2" />
            {downloadStatus.pdf}
          </button>
          <button
            onClick={handleDownloadDOCXClick}
            className="py-2 px-4 cursor-pointer flex text-sm items-center rounded-lg bg-green-600 text-white hover:bg-green-800 transition duration-300 ease-in-out"
          >
            <AiOutlineDownload className="mr-2" />
            {downloadStatus.docx}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;











