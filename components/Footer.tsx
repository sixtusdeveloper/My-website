"use client";

import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer: React.FC = () => {
  const router = useRouter();
  const handlePrivacyNavigation = () => {
    router.push("/pages/privacy_policy");
  };

  const handleTermsNavigation = () => {
    router.push("/pages/terms_condition");
  };

  const handleHomeNavigation = () => {
    router.push("/");
  };

  return (
    <footer className="bg-secondary dark:bg-gray-900 border-t px-6 py-4">
      <div className="flex justify-center space-x-2 py-3">
        <a
          href="https://github.com/sixtusdeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary text-gray-700 dark:text-blue-200 dark:bg-gray-800 rounded-full">
            <FaGithub size={20} />
          </span>
        </a>
        <a
          href="https://x.com/sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary text-gray-700 dark:text-blue-200 dark:bg-gray-800 rounded-full">
            <FaTwitter size={20} />
          </span>
        </a>
        <a
          href="https://www.youtube.com/@sixtusdev"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary text-gray-700 dark:text-blue-200 dark:bg-gray-800 rounded-full">
            <FaYoutube size={20} />
          </span>
        </a>
        <a
          href="https://linkedin.com/in/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary text-gray-700 dark:text-blue-200 dark:bg-gray-800 rounded-full">
            <FaLinkedin size={20} />
          </span>
        </a>
        <a
          href="https://web.facebook.com/sixtusushrey"
          target="_blank"
          rel="noopener noreferrer"
          className="border hover:transform rounded-full hover:scale-110"
        >
          <span className="flex shadow-sm items-center justify-center w-10 h-10 bg-secondary text-gray-700 dark:text-blue-200 dark:bg-gray-800 rounded-full">
            <FaFacebook size={20} />
          </span>
        </a>
      </div>
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleHomeNavigation();
        }}
        className="flex items-center justify-center text-center my-2 gap-2"
      >
        <Image src="/Logo.png" alt="Sixtusdev Logo" width={30} height={30} />
        <span className="tracking-wide sm:block items-center self-center text-sm font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 text-transparent bg-clip-text">
          SIXTUSDEV
        </span>
      </Link>

      <div className="flex justify-center flex-wrap items-center py-2 gap-2">
        <span className="flex justify-center items-center py-2 space-x-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePrivacyNavigation();
            }}
            className="hover:underline hover:text-blue-400 text-sm lg:text-sm text-gray-600 dark:text-blue-200"
          >
            Privacy Policy
          </Link>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTermsNavigation();
            }}
            className="text-sm lg:text-sm hover:underline hover:text-blue-400 text-gray-600 dark:text-blue-200"
          >
            Terms and conditions
          </Link>
        </span>

        <span className="w-full flex flex-col text-center text-sm p-2 text-gray-600 dark:text-blue-100">
          Copyright&copy; {new Date().getFullYear()} developed by Sixtusdev |
          all rights reserved | contact@sixtusdev.net | version 0.1.0
        </span>
      </div>
    </footer>
  );
};

export default Footer;
