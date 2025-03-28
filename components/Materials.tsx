// New logic which includes the progress search bar logic for the "I've Logged in" button
"use client";

import React, { useState, useEffect } from "react";
import { FaTimes, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import Loader from "@/components/ui/Loader";

export default function CallToAction() {
  const { redirectToSignUp, openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingState, setLoadingState] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMaterialContentLoading, setIsMaterialContentLoading] =
    useState(false);

  const openModal = () => {
    setIsLoading(true);
    setIsMaterialContentLoading(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsMaterialContentLoading(false);
      setIsLoading(false);
      setIsModalOpen(true);
    }, 2000);
  };

  const closeModal = () => {
    setIsLoading(false);
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
      <div
        id="e-books"
        className="flex flex-col sm:flex-row p-2 md:p-6 border justify-center items-center bg-gradient-to-r from-yellow-700 via-green-800 to-purple-800 shadow-lg"
      >
        <div className="flex-1 flex flex-col justify-center p-2 lg:p-4 order-last sm:order-first">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Expand Your Programming Knowledge for Free with My Comprehensive
            E-book Guide!
          </h2>
          <p className="text-gray-300 mb-5">
            Join my learning community and access a vast collection of{" "}
            <strong>free programming e-books</strong> designed to help you
            master coding. Whether you’re a beginner or an advanced developer,
            there's something here for everyone. Start your learning journey
            today!
          </p>

          <button
            type="button"
            onClick={openModal}
            className="rounded-tl-xl text-base rounded-bl-none px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white w-full rounded-md"
          >
            {isMaterialContentLoading
              ? "Please wait..."
              : "Access Free E-Books"}
          </button>
        </div>
        <div className="p-4 flex-1 order-first sm:order-last">
          <img
            src="/materials.png"
            alt="Programming Books"
            className="rounded-3xl"
            width={500}
            height={500}
          />
        </div>
      </div>

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

      {isLoading && <Loader />}

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
                className="text-base bg-gradient-to-r from-red-500 via-yellow-500 to-purple-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
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
}
