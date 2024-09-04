'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-16">
      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        Trusted <span className="text-purple">by Companies</span>
      </h1>
      <div className="bg-black-100 py-14 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h3 className="text-center text-md font-semibold leading-2 tracking-wide text-gray-100">
            Trusted by the world&apos;s most innovative teams
          </h3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {/* Company Logos */}
            <Image
              alt="Chatter Logo"
              src={CompanyImgOne || "/client01.png"}
              width={150}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Upwork Logo"
              src={CompanyImgTwo || "/upwork-logo.png"}
              width={150}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Altschool Logo"
              src={CompanyImgThree || "/altschool-logo.png"}
              width={150}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="col-span-2 max-h-45 w-full object-contain lg:col-span-1"
            />
            <Image
              alt="Freelancer Logo"
              src={CompanyImgFour || "/freelancer-logo.png"}
              width={150}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="col-span-2 max-h-45 w-full object-contain sm:col-start-2 lg:col-span-1"
            />
            <Image
              alt="Skilledup Life Logo"
              src={CompanyImgFive || "/skilledup-life-logo.png"}
              width={150}
              height={100}
              style={{ width: 'auto', height: 'auto' }}
              className="col-span-2 col-start-2 max-h-45 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
          <div className="hidden sm:mt-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-4 my-1 text-sm leading-6 text-blue-300 ring-1 bg-black-300/10 hover:ring-gray-900/20">
              Over 35 companies use my solutions to better their business.{" "}
              <a href="#" onClick={toggleModal} className="font-semibold text-purple cursor-pointer">
                <span aria-hidden="true" className="absolute inset-0" />
                Read my customer stories{" "}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85">
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-8 max-w-lg mx-auto animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white-100"
              onClick={toggleModal}
            >
              &#10005;
            </button>
            <Image
              alt="Not Available"
              src="/not-available.jpg"
              width={400}
              height={400}
              className="mx-auto text-center pacity-50 overflow-hidden "
              objectFit="cover"
              style={{ width: 'auto', height: 'auto' }}
            />
            <p className="text-center text-md text-gray-300 mt-4">
              Customer&apos;s stories not yet uploaded, check back later.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collaboration;






