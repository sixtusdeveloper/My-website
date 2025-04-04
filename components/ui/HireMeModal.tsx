"use client";

import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [downloadStatus, setDownloadStatus] = useState<{
    [key: string]: string;
  }>({
    pdf: "Download PDF",
    docx: "Download Docx",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const downloadFile = (
    fileUrl: string,
    fileName: string,
    fileType: "pdf" | "docx"
  ): void => {
    setDownloadStatus((prevStatus) => ({
      ...prevStatus,
      [fileType]: `Downloading ${fileType.toUpperCase()}...`,
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

        setDownloadStatus((prevStatus) => ({
          ...prevStatus,
          [fileType]: "Downloaded",
        }));

        setTimeout(() => {
          setDownloadStatus((prevStatus) => ({
            ...prevStatus,
            [fileType]: fileType === "pdf" ? "Download PDF" : "Download Docx",
          }));
        }, 5000);
      })
      .catch(() => {
        console.error("Failed to download the file");
        setDownloadStatus((prevStatus) => ({
          ...prevStatus,
          [fileType]: fileType === "pdf" ? "Download PDF" : "Download Docx",
        }));
      });
  };

  const handleDownloadPDFClick = () => {
    downloadFile(
      "/certificates/Sixtus_Aondoakaa_Resume.pdf",
      "Sixtus_Aondoakaa_Resume.pdf",
      "pdf"
    );
  };

  const handleDownloadDOCXClick = () => {
    downloadFile(
      "/certificates/Sixtus_Aondoakaa_Resume.docx",
      "Sixtus_Aondoakaa_Resume.docx",
      "docx"
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-secondary dark:bg-gray-900 border shadow-lg rounded-lg mx-auto max-w-3xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-6 z-40 right-4 p-2 cursor-pointer border rounded-full bg-secondary hover:text-red-600"
        >
          <IoClose size={18} />
        </button>
        {children}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handleDownloadPDFClick}
            className="py-2 px-4 flex items-center text-sm lg:text-base rounded-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white tracking-wide hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            <AiOutlineDownload className="mr-2" />
            {downloadStatus.pdf}
          </button>
          <button
            onClick={handleDownloadDOCXClick}
            className="py-2 px-4 cursor-pointer flex text-sm lg:text-base items-center rounded-lg bg-gradient-to-r from-green-500 via-indigo-600 to-green-600 text-white tracking-wide hover:bg-green-800 transition duration-300 ease-in-out"
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
