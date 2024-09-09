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
      <div className="relative bg-secondary border shadow-lg rounded-lg my-8 max-w-3xl w-full p-6">
        <button
          onClick={onClose}
          className="absolute z-40 top-2 right-2 p-2 cursor-pointer bg-secondary rounded-full border hover:text-red-600"
        >
          <IoClose size={18} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;







