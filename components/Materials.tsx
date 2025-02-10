"use client";

import React, { useState, useEffect } from "react";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import {
  useUser,
  useClerk,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UserIcon } from "lucide-react";

export default function CallToAction() {
  const { redirectToSignUp } = useClerk();
  const { user, isSignedIn } = useUser();
  const { openSignIn } = useClerk();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleLoggedInClick = () => {
    if (isSignedIn) {
      router.push("/pages/materials");
    } else {
      setShowErrorModal(true);
    }
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row p-2 md:p-6 border justify-center items-center bg-gradient-to-r from-yellow-800 via-green-800 to-purple-600 shadow-lg">
        <div className="flex-1 flex flex-col justify-center p-4 order-last sm:order-first">
          <h2 className="text-3xl font-bold text-white mb-3">
            Expand Your Programming Knowledge for Free!
          </h2>
          <p className="text-gray-300 mb-5">
            Join our learning community and access a vast collection of{" "}
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
            Access Free E-Books
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

      {/* Main Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-secondary p-6 border rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button onClick={closeModal} className="absolute top-3 right-3">
              <FaTimes className="hover:text-red-500" size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-4">
              Sign in to Access Free E-Books
            </h3>
            <p className="mb-4">
              You need to be signed in to explore and download our programming
              e-books.
            </p>

            <div className="flex justify-between">
              <button
                onClick={handleLoggedInClick}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%] text-center"
              >
                I've Logged in
              </button>

              <button
                onClick={() => router.push("/sign-in")}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
              >
                Let me log in
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showErrorModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-secondary p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={closeErrorModal}
              className="absolute top-3 right-3"
            >
              <FaTimes className=" hover:text-red-500" size={20} />
            </button>

            <div className="flex flex-col items-center">
              <FaExclamationCircle className="text-red-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4">
                No, You Haven't Logged In!
              </h3>
              <p className="mb-4 text-center">
                Please sign in to access the free programming books.
              </p>

              <button
                onClick={() => router.push("/sign-in")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full text-center"
              >
                Log in Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
