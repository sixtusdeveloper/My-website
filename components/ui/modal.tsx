'use client';

import React, { useEffect, useRef } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Import success icon from React Icons

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        } else {
            document.body.style.overflow = 'auto'; // Allow scrolling
        }

        return () => {
            document.body.style.overflow = 'auto'; // Ensure scrolling is allowed on unmount
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
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" // Darker overlay effect
        >
            <div className="bg-white p-6 rounded shadow-lg max-w-sm mx-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                >
                    ✕
                </button>
                <div className="flex flex-col items-center">
                    <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" /> {/* Success icon */}
                    <p className="text-center text-lg font-semibold">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
