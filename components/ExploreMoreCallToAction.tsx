"use client";

import React from "react";
import { useState } from "react";
import Loader from "./ui/Loader";
import HeroModal from "./ui/HeroModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ExploreMoreCallToAction = () => {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPortfolioLoading, setIsPortfolioLoading] = useState(false);

  const router = useRouter();

  const openHeroModal = () => {
    setIsPortfolioLoading(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsPortfolioLoading(false);
      setIsLoading(false);
      setIsHeroModalOpen(true);
    }, 2000);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const handleHeroRedirect = () => {
    router.push("/pages/portfolio/#projects");
  };
  return (
    <>
      <section className="relative w-full h-[350px] flex items-center md:justify-center justify-start text-center overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/skillsbg.avif')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl text-white">
            See how I transform ideas into reality through code!
          </h1>
          <p className="mt-4 text-base opacity-95 text-gray-100">
            Explore my portfolio page and see how I turn ideas into reality.
          </p>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openHeroModal();
            }}
          >
            <button
              type="button"
              className="lg:my-8 mt-6 py-3 px-6 text-base font-semibold ring-1 ring-blue-500 hover:ring-0 text-white rounded-md inline-block hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              {isPortfolioLoading ? "Please wait..." : "Visit My Portfolio"}
            </button>
          </Link>
        </div>

        {isLoading && <Loader />}

        {/* Hero Modal */}
        <HeroModal
          isOpen={isHeroModalOpen}
          onClose={closeHeroModal}
          message="Are you sure you want to leave this page? You will be navigated to my portfolio page."
        >
          <div className="flex gap-4 mt-4">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleHeroRedirect();
              }}
            >
              <button className="text-base bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full">
                Leave
              </button>
            </Link>

            <button
              onClick={closeHeroModal}
              className="text-base bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
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
