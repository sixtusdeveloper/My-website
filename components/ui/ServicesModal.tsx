'use client';

import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
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
      <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-filter backdrop-blur-md" onClick={onClose} />
      <div className="relative bg-black-200 border border-gray-800 shadow-lg rounded-lg max-w-3xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 cursor-pointer rounded-full bg-gray-800 text-gray-400 hover:text-white"
        >
          <IoClose size={18} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
