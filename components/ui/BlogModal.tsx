"use client";

import React, { useEffect, useRef } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  children?: React.ReactNode;
}

const BlogModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is allowed on unmount
    };
  }, [isOpen]);

  // Close the modal when clicking outside of it
  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-2 z-50" // Darker overlay effect
    >
      <div className="bg-secondary dark:bg-gray-900 border rounded-lg shadow-lg p-4 w-full max-w-sm mx-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-40 border rounded-full p-2 cursor-pointer bg-secondary hover:text-red-600"
        >
          <IoClose size={18} />
        </button>
        <div className="flex flex-col items-center">
          <AiOutlineQuestionCircle className="text-yellow-600 text-4xl mb-4" />{" "}
          {/* Question icon */}
          <p className="text-center leading-6 text-base font-semibold mb-4 text-gray-600 dark:text-gray-200">
            {message}
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
