"use client";

import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useUser, useClerk } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Loader from "./ui/Loader";
import HeroModal from "./ui/HeroModal";

const ExploreMoreCallToAction = () => {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openHeroModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsHeroModalOpen(true);
    }, 2000);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const handleHeroRedirect = () => {
    window.location.href = "https://www.sixtusdev.net/pages/portfolio";
  };
  return (
    <>
      <section className="relative w-full h-[350px] flex items-center md:justify-center justify-start text-center text-white overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/coding-guy.png')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl">
            See how I transformed ideas into reality!
          </h1>
          <p className="mt-4 text-base opacity-95">
            Explore my portfolio page and see how I turn ideas into reality.
          </p>
          <a onClick={openHeroModal}>
            <button
              type="button"
              className="mt-6 py-3 px-6 text-base font-semibold rounded-none inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Visit My Portfolio
            </button>
          </a>
        </div>

        {isLoading && <Loader />}

        {/* Hero Modal */}
        <HeroModal
          isOpen={isHeroModalOpen}
          onClose={closeHeroModal}
          message="Are you sure you want to leave the site? You will be redirected to my portfolio."
        >
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleHeroRedirect}
              className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full"
            >
              Leave
            </button>
            <button
              onClick={closeHeroModal}
              className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
            >
              Cancel
            </button>
          </div>
        </HeroModal>
      </section>
    </>
  );
};

export default ExploreMoreCallToAction;
