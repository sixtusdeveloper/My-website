"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Loader from "@/components/ui/Loader";

const Collaboration = ({
  CompanyImgOne,
  CompanyImgTwo,
  CompanyImgThree,
  CompanyImgFour,
  CompanyImgFive,
}: {
  CompanyImgOne?: string;
  CompanyImgTwo?: string;
  CompanyImgThree?: string;
  CompanyImgFour?: string;
  CompanyImgFive?: string;
}) => {
  // State to control modal visibility and loader
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to toggle modal with loader
  const toggleModal = () => {
    setIsLoading(true); // Start loading

    // Simulate a 2-second delay before opening the modal
    setTimeout(() => {
      setIsModalOpen(true);
      setIsLoading(false); // Stop loading
    }, 2000);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mx-auto max-w-7xl bg-secondary px-6 lg:px-8 py-8 lg:py-14">
      <h2 className="p-4 lg:p-2 text-3xl md:text-4xl text-center font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
        Trusted By Companies
      </h2>
      <p className="text-center text-base font-normal text-gray-600 dark:text-blue-100 leading-2 tracking-wide">
        Trusted by the world&apos;s most innovative teams
      </p>

      <div className="py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Company Logos */}
            <span>
              <Image
                alt="Kropmann Logo"
                src={CompanyImgOne || "/kropmann-logo.png"}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="col-span-2 max-h-45 w-full object-contain lg:col-span-1 collaborator-logo"
              />
            </span>
            <span>
              <Image
                alt="Upwork Logo"
                src={CompanyImgTwo || "/upwork-logo.png"}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="col-span-2 max-h-45 w-full object-contain lg:col-span-1 collaborator-logo"
              />
            </span>
            <span>
              <Image
                alt="Altschool Logo"
                src={CompanyImgThree || "/altschool-logo.png"}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="col-span-2 max-h-45 w-full object-contain lg:col-span-1 collaborator-logo"
              />
            </span>
            <span className="flex justify-center items-center ml-8 lg:ml-2">
              <Image
                alt="Freelancer Logo"
                src={CompanyImgFour || "/freelancer-logo.png"}
                width={200}
                height={200}
                style={{ width: "auto", height: "auto" }}
                className="col-span-2 max-h-45 w-full object-contain sm:col-start-2 lg:col-span-1 collaborator-logo"
              />
              <span className="text-sm lg:text-xl font-bold ml-1">
                freelancer
              </span>
            </span>
            <span>
              <Image
                alt="Skilledup Life Logo"
                src={CompanyImgFive || "/skilledup-life-logo.png"}
                width={150}
                height={100}
                style={{ width: "auto", height: "auto" }}
                className="col-span-2 col-start-2 max-h-45 w-full object-contain sm:col-start-auto lg:col-span-1 collaborator-logo"
              />
            </span>
          </div>
          <div className="hidden sm:mt-2 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 text-sm leading-6 hover:text-pink-500 border bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
              Over 35 companies use my solutions to better their business.{" "}
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  toggleModal();
                }}
                className="font-semibold text-purple cursor-pointer"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Read my customer stories <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with Loader */}
      {isLoading && <Loader />}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85"
          onClick={closeModal}
        >
          <div className="relative bg-secondary dark:bg-gray-900 border rounded-lg p-8 max-w-lg mx-auto animate-fadeIn">
            <button
              className="absolute top-2 right-2 z-40 cursor-pointer hover:text-red-600"
              onClick={closeModal}
            >
              <IoClose size={20} />
            </button>
            <Image
              alt="Not Available"
              src="/not-available.jpg"
              width={400}
              height={400}
              className="mx-auto text-center opacity-50 overflow-hidden"
              objectFit="cover"
              style={{ width: "auto", height: "auto" }}
            />
            <p className="text-center text-sm mt-4">
              Customer&apos;s stories not yet uploaded, check back later.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaboration;
