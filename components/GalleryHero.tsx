"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaTimes, FaExclamationCircle, FaCheckCircle } from "react-icons/fa";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import Link from "next/link";

export default function GalleryHero() {
  const { redirectToSignUp, openSignIn } = useClerk();
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
      setIsLoading(false);
      setIsGalleryLoading(false);
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
      <section className="relative pt-10 w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-black/70 via-gray-900/50 to-black/70 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/herobg-transition.avif"
            alt="Gallery Hero Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-6 md:px-12 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Moments Beyond Code ✨
          </motion.h1>
          <motion.p
            className="mt-4 text-base md:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            A curated collection of personal milestones, public events, and
            cherished memories beyond software engineering.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-6 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal();
              }}
            >
              <Button className="px-6 h-12 py-3 text-sm lg:text-base font-semibold rounded-md text-white shadow-lg bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600 hover:ease-in-out hover:scale-105 transition-all duration-300">
                Free E-books
              </Button>
            </Link>
            <Link href="/pages/portfolio">
              <Button className="px-6 py-3 h-12 text-sm lg:text-base font-semibold rounded-md text-white shadow-lg border border-white/40 bg-transparent hover:bg-white/20 hover:ease-in-out hover:scale-105 transition-all duration-300">
                My Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
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
            <h3 className="text-xl font-semibold mb-4">
              Sign in to Access Free E-Books
            </h3>
            <p className="mb-4">
              You need to be signed in to explore and download our programming
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
                  className="bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%]"
                >
                  I've Logged in
                </button>

                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
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
              <h3 className="text-xl font-semibold mb-4">
                No, You Haven't Logged In!
              </h3>
              <p className="mb-4 text-center">
                Please sign in to access the free programming e-books.
              </p>
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-gradient-to-r from-red-500 via-yellow-500 to-purple-700 hover:bg-yellow-500 text-white px-4 py-2 rounded-md w-full"
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
              <h3 className="text-xl font-semibold mb-4">
                You're Already Logged In!
              </h3>
              <p className="mb-4 text-center">
                Hey {user?.firstName} {user?.lastName}, you are already signed
                in.
              </p>
              <button
                onClick={() => router.push("/pages/materials")}
                className="font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white text-sm tracking-wide block px-4 py-2 rounded-md w-full"
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
