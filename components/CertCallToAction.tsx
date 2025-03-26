"use client";

import { FaTimes, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Link from "next/link";
import Loader from "./ui/Loader";

const ExploreMoreCallToAction = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingState, setLoadingState] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isGalleryLoading, setIsGalleryLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setTimeout(() => {
      setIsLoading(true);
      setIsGalleryLoading(true);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsModalOpen(true);
        setIsLoading(false);
        setIsGalleryLoading(false);
      }, 2000);
    });
  };

  const closeModal = () => {
    setIsGalleryLoading(false);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    document.body.style.overflow = "auto";
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    document.body.style.overflow = "auto";
  };

  const handleUserCheck = (callback: () => void) => {
    setLoadingState("Please wait...");
    setTimeout(() => {
      setLoadingState("Checking user existence...");
      setTimeout(() => {
        setLoadingState(null);
        callback();
      }, 2000);
    }, 2000);
  };

  const handleLoginClick = () => {
    setLoadingState("Please wait...");
    setTimeout(() => {
      setLoadingState("Checking user existence...");
      setTimeout(() => {
        setLoadingState(null);
        if (isSignedIn) {
          setShowSuccessModal(true);
        } else {
          router.push("/sign-in");
        }
      }, 2000);
    }, 2000);
  };

  const handleLoggedInClick = () => {
    handleUserCheck(() => {
      if (isSignedIn) {
        router.push("/pages/materials");
      } else {
        setShowErrorModal(true);
      }
    });
  };
  return (
    <>
      <section
        id="certifications"
        className="relative w-full h-[450px] flex items-center md:justify-center justify-start text-center overflow-hidden"
      >
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/skillsbg.avif')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-10 lg:pr-8 md:text-center text-left">
          <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-blue-50">
            🚀 Continuous Learning Drives Innovation in Tech!
          </h1>
          <p className="mt-4 text-base opacity-95 text-blue-100">
            Stay ahead by expanding your knowledge every day. Embrace growth,
            push boundaries, and unlock new opportunities in the ever-evolving
            tech landscape.
          </p>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            <button
              type="button"
              className="flex justify-start items-center md:mx-auto md:justify-center text-left md:text-center mt-6 py-3 px-6 text-base font-semibold rounded-md ring-1 ring-pink-500 hover:ring-0 hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:bg-yellow-600 text-white shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              {isGalleryLoading ? "Please wait..." : "Get Free E-books"}
            </button>
          </Link>
        </div>
      </section>

      {isLoading && <Loader />}

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary dark:bg-gray-900 py-8 px-6 border rounded-lg shadow-lg w-[95%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2">
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
              Sign in to Access Free E-Books
            </h3>
            <p className="mb-4 text-gray-600 dark:text-gray-200">
              You need to be signed in to explore and download my programming
              e-books.
            </p>
            {loadingState ? (
              <div className="flex flex-col items-center">
                <CircularProgress />
                <p className="mt-2 text-sm font-semibold">{loadingState}</p>
              </div>
            ) : (
              <div className="flex justify-between">
                <button
                  onClick={handleLoggedInClick}
                  className="text-base bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%]"
                >
                  I've Logged in
                </button>

                <button
                  className="text-base bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
                  onClick={handleLoginClick}
                >
                  Let me log in
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showErrorModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeErrorModal}
        >
          <div
            className="bg-secondary dark:bg-gray-900 py-8 px-6 rounded-lg border shadow-lg w-[95%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeErrorModal}
              className="absolute top-2 right-2"
            >
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <div className="flex flex-col items-center">
              <FaExclamationCircle className="text-red-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                No, You Haven't Logged In!
              </h3>
              <p className="mb-4 text-center text-gray-600 dark:text-gray-200">
                Please sign in to access the free programming e-books.
              </p>
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-700 hover:bg-yellow-500 text-white text-base px-4 py-2 rounded-md w-full"
              >
                Log in Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeSuccessModal}
        >
          <div className="bg-secondary dark:bg-gray-900 py-8 px-6 border rounded-lg shadow-lg w-[95%] max-w-md relative">
            <button
              onClick={closeSuccessModal}
              className="absolute top-2 right-2"
            >
              <FaTimes className="hover:text-green-500" size={20} />
            </button>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-green-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">
                You're Already Logged In!
              </h3>
              <p className="mb-4 text-center text-gray-600 dark:text-gray-200">
                Hey {user?.firstName} {user?.lastName}, you are already signed
                in.
              </p>
              <button
                onClick={() => router.push("/pages/materials")}
                className="text-base bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white tracking-wide block px-4 py-2 rounded-md w-full"
              >
                Go to E-Books Page
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExploreMoreCallToAction;
