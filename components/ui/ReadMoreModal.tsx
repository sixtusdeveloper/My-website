// ReadMoreModal.tsx
'use client';

import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

interface ReadMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode; // Allow children to be passed into the modal
}

const ReadMoreModal: React.FC<ReadMoreModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

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
            <div className="px-8 max-h-[80vh] overflow-auto no-scrollbar">
                {children} 
                
                <p className="text-center text-sm px-8 my-4 tracking-wide text-gray-200 leading-6">
                    You are about to leave my portfolio site and visit my personal website. 
                    If you wish to explore further, click continue, or cancel to stay here.
                </p>
                <div className="flex justify-center mt-6 space-x-4">
                    <a
                        href="https://www.sixtusdev.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-4 flex items-center text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-800 transition duration-300 ease-in-out"
                        >
                        Continue
                    </a>
                    <button
                        onClick={onClose}
                        className="py-2 px-4 flex cursor-pointer items-center text-sm rounded-lg bg-red-600 text-white hover:bg-red-800 transition duration-300 ease-in-out"
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

