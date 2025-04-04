"use client";

import { useState } from "react";
import Loader from "./ui/Loader";
import HeroModal from "./ui/HeroModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ExploreMoreCallToAction = () => {
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);
  const router = useRouter();

  const openHeroModal = () => {
    setIsLoading(true);
    setIsGalleryLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsGalleryLoading(false);
      setIsHeroModalOpen(true);
    }, 2000);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
    setIsGalleryLoading(false);
  };

  const handleGalleryRedirect = () => {
    router.push("/pages/gallery");
  };

  return (
    <>
      <section className="relative w-full h-[400px] flex items-center md:justify-center justify-start text-center overflow-hidden">
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/blog04.avif')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-2xl font-extrabold md:text-3xl lg:text-4xl text-blue-50">
            Want to See More About Me? Explore My Gallery!
          </h1>
          <p className="mt-4 text-base text-blue-100">
            Explore my gallery page and see what I look like in reality.
          </p>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openHeroModal();
            }}
          >
            <button className="my-8 py-3 px-6 rounded-md font-semibold text-white hover:text-white dark:text-white text-base ring-1 ring-blue-500 hover:ring-0 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-pink-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
              {isGalleryLoading ? "Please wait..." : "Visit My Gallery"}
            </button>
          </Link>
        </div>

        {isLoading && <Loader />}

        {/* Hero Modal */}
        <HeroModal
          isOpen={isHeroModalOpen}
          onClose={closeHeroModal}
          message="Are you sure you want to leave this page? You will be navigated to my Gallery page."
        >
          <div className="flex gap-4 mt-4">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleGalleryRedirect();
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
