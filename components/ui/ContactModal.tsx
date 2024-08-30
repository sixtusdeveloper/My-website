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
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" // Darker overlay effect
        >
            <div className="bg-secondary border rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                >
                    ✕
                </button>
                <div className="flex flex-col items-center">
                    <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" /> {/* Success icon */}
                    <p className="text-center text-lg tracking-wide leading-7 font-semibold mb-4">{message}</p>
                    <button
                        onClick={onClose}
                        className="bg-blue-600 hover:bg-blue-800 text-white text-sm font-semibold rounded-full py-2 px-6"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;






// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { AiOutlineCheckCircle } from 'react-icons/ai'; // Import success icon from React Icons

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     message: string;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
//     const modalRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'; // Prevent scrolling
//         } else {
//             document.body.style.overflow = 'auto'; // Allow scrolling
//         }

//         return () => {
//             document.body.style.overflow = 'auto'; // Ensure scrolling is allowed on unmount
//         };
//     }, [isOpen]);

//     // Close the modal when clicking outside of it
//     const handleOverlayClick = (event: React.MouseEvent) => {
//         if (event.target === modalRef.current) {
//             onClose();
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div 
//             ref={modalRef}
//             onClick={handleOverlayClick}
//             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" // Darker overlay effect
//         >
//             <div className="bg-secondary border rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//                 >
//                     ✕
//                 </button>
//                 <div className="flex flex-col items-center">
//                     <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" /> {/* Success icon */}
//                     <p className="text-center text-lg font-semibold">{message}</p>
//                 </div>
//                 <div className="flex justify-between mt-4">
                
//             </div> 
//             </div>
//         </div>
//     );
// };

// export default Modal;











// /components/ui/modal.tsx

// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { AiOutlineQuestionCircle, AiOutlineCheckCircle } from 'react-icons/ai'; // Import both icons

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     message: string;
//     type?: 'confirmation' | 'success'; // Add a type prop to differentiate between modal types
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, type = 'confirmation' }) => {
//     const modalRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'; // Prevent scrolling
//         } else {
//             document.body.style.overflow = 'auto'; // Allow scrolling
//         }

//         return () => {
//             document.body.style.overflow = 'auto'; // Ensure scrolling is allowed on unmount
//         };
//     }, [isOpen]);

//     // Close the modal when clicking outside of it
//     const handleOverlayClick = (event: React.MouseEvent) => {
//         if (event.target === modalRef.current) {
//             onClose();
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div 
//             ref={modalRef}
//             onClick={handleOverlayClick}
//             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" // Darker overlay effect
//         >
//             <div className="bg-secondary border rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//                 >
//                     ✕
//                 </button>
//                 <div className="flex flex-col items-center">
//                     {type === 'success' ? (
//                         <AiOutlineCheckCircle className="text-green-500 text-4xl mb-4" /> // Success icon
//                     ) : (
//                         <AiOutlineQuestionCircle className="text-yellow-500 text-4xl mb-4" /> // Question icon
//                     )}
//                     <p className="text-center text-lg font-semibold">{message}</p>
//                     <div className="flex gap-4 mt-4">
//                         {type === 'confirmation' && (
//                             <>
//                                 <button
//                                     onClick={() => {
//                                         window.location.href = 'https://www.sixtusfolio.com'; // Redirect to portfolio
//                                     }}
//                                     className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full"
//                                 >
//                                     Leave
//                                 </button>
//                                 <button
//                                     onClick={onClose}
//                                     className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-full"
//                                 >
//                                     Cancel
//                                 </button>
//                             </>
//                         )}
//                         {type === 'success' && (
//                             <button
//                                 onClick={onClose}
//                                 className="bg-green-600 hover:bg-green-800 text-white py-2 px-4 rounded-full"
//                             >
//                                 Ok
//                             </button>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;



// This is working fine just a mismatch between the icons
// 'use client';

// import React, { useEffect, useRef } from 'react';
// import { AiOutlineQuestionCircle } from 'react-icons/ai'; // Import a question icon from React Icons

// interface ModalProps {
//     isOpen: boolean;
//     onClose: () => void;
//     message: string;
//     children?: React.ReactNode; // Make children optional
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message, children }) => {
//     const modalRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'; // Prevent scrolling
//         } else {
//             document.body.style.overflow = 'auto'; // Allow scrolling
//         }

//         return () => {
//             document.body.style.overflow = 'auto'; // Ensure scrolling is allowed on unmount
//         };
//     }, [isOpen]);

//     // Close the modal when clicking outside of it
//     const handleOverlayClick = (event: React.MouseEvent) => {
//         if (event.target === modalRef.current) {
//             onClose();
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div 
//             ref={modalRef}
//             onClick={handleOverlayClick}
//             className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" // Darker overlay effect
//         >
//             <div className="bg-secondary border rounded-lg shadow-lg p-6 max-w-sm mx-auto relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
//                 >
//                     ✕
//                 </button>
//                 <div className="flex flex-col items-center">
//                     <AiOutlineQuestionCircle className="text-yellow-500 text-4xl mb-4" /> {/* Question icon */}
//                     <p className="text-center text-lg font-semibold">{message}</p>
//                     {children} {/* Render the buttons passed as children */}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Modal;













