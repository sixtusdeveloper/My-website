// components/Footer.tsx

import React, { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import TermsOfServiceModal from '@/components/TermsOfServiceModal';

const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenPrivacyModal = () => setPrivacyModalOpen(true);
  const handleClosePrivacyModal = () => setPrivacyModalOpen(false);

  const handleOpenTermsModal = () => setTermsModalOpen(true);
  const handleCloseTermsModal = () => setTermsModalOpen(false);

  return (
    <footer className="bg-secondary border-t px-6 py-4">
      <div className="flex justify-center space-x-2">
        <a
          href="https://github.com/sixtusdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaGithub size={20} />
          </span>
        </a>
        <a
          href="https://x.com/develites01"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaTwitter size={20} />
          </span>
        </a>
        <a
          href="https://www.youtube.com/@Sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaYoutube size={20} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaLinkedin size={20} />
          </span>
        </a>
        <a
          href="https://web.facebook.com/develitesacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaFacebook size={20} />
          </span>
        </a>
      </div>

      <div className="flex justify-center space-x-4 py-2 mt-2">
        <a href="#" onClick={handleOpenPrivacyModal} className="text-gray-600 hover:underline">
          Privacy Policy
        </a>
        <a href="#" onClick={handleOpenTermsModal} className="text-gray-600 hover:underline">
          Terms of Service
        </a>
      </div>

      <div className="flex justify-center items-center py-2 mt-2">
        <span className="w-full flex flex-col text-center text-gray-600 text-xs p-2 tracking-wider">
          Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev | <a href="#" onClick={handleOpenTermsModal} className="text-gray-600 hover:underline">Terms and Conditions</a> | support@sixtusdev.net | version 0.1.0
        </span>
      </div>

      {/* Render modals */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={handleClosePrivacyModal} />
      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={handleCloseTermsModal} />
    </footer>
  );
};

export default Footer;











// import React from "react";
// import {
//   FaGithub,
//   FaTwitter,
//   FaLinkedin,
//   FaFacebook,
//   FaYoutube,
// } from "react-icons/fa";

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-secondary border-t px-6 py-4">
//       <div className="flex justify-center space-x-2">
//         <a
//           href="https://github.com/sixtusdeveloper"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border hover:transform rounded hover:scale-110"
//         >
//           <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
//             <FaGithub size={20} />
//           </span>
//         </a>
//         <a
//           href="https://x.com/develites01"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border hover:transform rounded hover:scale-110"
//         >
//           <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
//             <FaTwitter size={20} />
//           </span>
//         </a>

//         <a
//           href="https://www.youtube.com/@Sixtusdev"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border hover:transform rounded hover:scale-110"
//         >
//           <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
//             <FaYoutube size={20} />
//           </span>
//         </a>
//         <a
//           href="https://linkedin.com/in/sixtusushrey"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border hover:transform rounded hover:scale-110"
//         >
//           <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
//             <FaLinkedin size={20} />
//           </span>
//         </a>
//         <a
//           href="https://web.facebook.com/develitesacademy"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="border hover:transform rounded hover:scale-110"
//         >
//           <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
//             <FaFacebook size={20} />
//           </span>
//         </a>
//       </div>

//         <div className="flex justify-center items-center py-2 mt-2">
//             <span className="w-full flex flex-col text-center text-gray-600 text-xs p-2 tracking-wider">
//                 Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev | all rights reserved |
//                 support@sixtusdev.net | version 0.1.0
//             </span>
//         </div>
//     </footer>
//   );
// };

// export default Footer;
