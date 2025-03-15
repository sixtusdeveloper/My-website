// ReadMoreModal.tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Allow children to be passed into the modal
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const router = useRouter();
  const navigateToAboutSection = () => {
    router.push("/#about");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-1">
      <div
        className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative bg-secondary dark:bg-gray-900 my-8 border shadow-lg rounded-lg mx-auto max-w-xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-2 z-40 right-2 p-2 border cursor-pointer rounded-full bg-secondary"
        >
          <IoClose size={18} />
        </button>
        <div className="px-2 lg:px-8 max-h-[80vh] overflow-auto no-scrollbar">
          {children}

          <p className="text-center text-sm p-2 leading-6">
            You are about to leave my portfolio site to visit my personal
            website. If you wish to explore further, click continue, or cancel
            to stay here.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateToAboutSection();
              }}
              rel="noopener noreferrer"
              className="py-2 px-4 flex items-center text-sm lg:text-base font-medium rounded-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white hover:bg-indigo-600 hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Continue
            </Link>
            <button
              onClick={onClose}
              className="py-2 px-4 flex cursor-pointer items-center text-sm lg:text-base font-medium rounded-full bg-gradient-to-r from-indigo-600 via-green-500 to-pink-800 text-white tracking-wide hover:bg-red-800 hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMoreModal;
