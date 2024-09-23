import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer: React.FC = () => {
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
      <span className="flex justify-center items-center py-6 space-x-4">
        <a href="/pages/privacy_policy" className="text-base hover:underline hover:text-blue-600">Privacy Policy</a>
        <a href="/pages/terms_condition" className="text-base hover:underline hover:text-blue-600">Terms and conditions</a>       
      </span>

      <div className="flex justify-center items-center py-2">
          <span className="w-full flex flex-col text-center text-sm p-2">
              Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev | all rights reserved |
              sixtusushrey@gmail.com | version 0.1.0
          </span>
          
      </div>
    </footer>
  );
};

export default Footer;



