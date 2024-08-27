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
          className="border hover:transform hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaGithub size={20} />
          </span>
        </a>
        <a
          href="https://x.com/develites01"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaTwitter size={20} />
          </span>
        </a>

        <a
          href="https://www.youtube.com/@Sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaYoutube size={20} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaLinkedin size={20} />
          </span>
        </a>
        <a
          href="https://web.facebook.com/develitesacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform hover:scale-110"
        >
          <span className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full">
            <FaFacebook size={20} />
          </span>
        </a>
      </div>

        <div className="flex justify-center items-center py-2 mt-2">
            <span className="w-full flex flex-col text-center text-xs p-2 tracking-wider">
                Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev | all rights reserved |
                terms & conditions version 0.1.0
            </span>
        </div>
    </footer>
  );
};

export default Footer;
