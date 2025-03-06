import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary dark:bg-gray-900 border-t px-6 py-4">
      <div className="flex justify-center space-x-2">
        <a
          href="https://github.com/sixtusdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary dark:bg-gray-950 rounded-full">
            <FaGithub size={20} />
          </span>
        </a>
        <a
          href="https://x.com/sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary dark:bg-gray-950 rounded-full">
            <FaTwitter size={20} />
          </span>
        </a>

        <a
          href="https://www.youtube.com/@sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary dark:bg-gray-950 rounded-full">
            <FaYoutube size={20} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary dark:bg-gray-950 rounded-full">
            <FaLinkedin size={20} />
          </span>
        </a>
        <a
          href="https://web.facebook.com/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary dark:bg-gray-950 rounded-full">
            <FaFacebook size={20} />
          </span>
        </a>
      </div>
      <span className="flex justify-center items-center py-6 space-x-4">
        <a
          href="/pages/privacy_policy"
          className="text-base hover:underline hover:text-yellow-500 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Privacy Policy
        </a>
        <a
          href="/pages/terms_condition"
          className="text-base hover:underline hover:text-yellow-500 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text"
        >
          Terms and conditions
        </a>
      </span>

      <div className="flex justify-center flex-wrap items-center py-2 gap-2">
        <a href="/" className="flex items-center">
          <Image src="/Logo.png" alt="Sixtusdev Logo" width={30} height={30} />
          <span className="font-sans sm:block self-center text-sm font-semibold bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            SIXTUSDEV
          </span>
        </a>
        <span className="w-full flex flex-col text-center text-sm p-2">
          Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev |
          all rights reserved | contact@sixtusdev.net | version 0.1.0
        </span>
      </div>
    </footer>
  );
};

export default Footer;
