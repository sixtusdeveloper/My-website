"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const TermsConditions = () => {
  const router = useRouter();
  const handleNavigateHome = () => {
    router.push("/");
  };
  return (
    <div className="container bg-secondary mx-auto py-10 lg:py-10 lg:px-20 px-4">
      <h2 className="text-xl py-2 lg:text-2xl font-bold mt-4 text-gray-700 dark:text-blue-50">
        Introduction
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100 text-base">
        I value your privacy and am committed to protecting your personal
        information. This Privacy Policy outlines how I collect, use, and
        safeguard your data when you use my website and services.
      </p>

      <h2 className="py-2 text-lg lg:text-xl font-bold mt-4 text-gray-700 dark:text-blue-50">
        Information I Collect
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        I collect various types of information to enhance your experience on my
        website. This includes:
      </p>
      <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-blue-100">
        <li className="leading-7">
          <strong>Personal Information:</strong> Name, email address, contact
          information, etc., that you provide to me directly.
        </li>
        <li className="leading-7">
          <strong>Usage Data:</strong> Information on how you interact with my
          website, including IP addresses, browser types, and pages visited.
        </li>
        <li className="leading-7">
          <strong>Cookies:</strong> Small data files stored on your device to
          remember your preferences and improve your browsing experience.
        </li>
      </ul>

      <h2 className="py-2 lg:text-xl text-lg font-bold mt-4 text-gray-700 dark:text-blue-50">
        How I Use Your Information
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        Your information is used for various purposes, including:
      </p>
      <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-blue-100">
        <li className="leading-7">Providing and maintaining my services.</li>
        <li className="leading-7">
          Improving user experience and personalizing content.
        </li>
        <li className="leading-7">
          Communicating with you about updates, offers, and news.
        </li>
        <li className="leading-7">
          Analyzing website usage and performance to make enhancements.
        </li>
      </ul>

      <h2 className="py-2 lg:text-xl text-lg font-bold mt-4 text-gray-700 dark:text-blue-50">
        How I Share Your Information
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        I do not sell or rent your personal information. I may share it in the
        following circumstances:
      </p>
      <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-blue-100">
        <li className="leading-7">
          <strong>Service Providers:</strong> With third-party vendors who
          assist me in operating my website and services.
        </li>
        <li className="leading-7">
          <strong>Legal Requirements:</strong> When required by law or to
          protect my rights and safety.
        </li>
        <li className="leading-7">
          <strong>Business Transfers:</strong> In the event of a merger,
          acquisition, or sale of assets.
        </li>
      </ul>

      <h2 className="py-2 lg:text-xl text-lg font-bold mt-4 text-gray-700 dark:text-blue-50">
        Your Rights
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        You have the following rights regarding your personal information:
      </p>
      <ul className="list-disc pl-5 mt-2 text-gray-600 dark:text-blue-100">
        <li className="leading-7">
          <strong>Access:</strong> Request a copy of the personal data I hold
          about you.
        </li>
        <li className="leading-7">
          <strong>Correction:</strong> Update or correct any inaccurate
          information.
        </li>
        <li className="leading-7">
          <strong>Deletion:</strong> Request the removal of your personal data,
          subject to legal obligations.
        </li>
        <li className="leading-7">
          <strong>Opt-Out:</strong> Unsubscribe from marketing communications at
          any time.
        </li>
      </ul>

      <h2 className="py-2 lg:text-xl text-gray-700 dark:text-blue-50 text-lg font-bold mt-4">
        Security
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        I implement appropriate technical and organizational measures to protect
        your personal information from unauthorized access, disclosure, or
        destruction.
      </p>

      <h2 className="py-2 lg:text-xl text-lg font-bold mt-4 text-gray-700 dark:text-blue-50">
        Changes to This Policy
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        I may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="py-2 lg:text-xl text-gray-700 dark:text-blue-50 text-lg font-bold mt-4">
        Contact Me
      </h2>
      <p className="leading-7 text-gray-600 dark:text-blue-100">
        If you have any questions or concerns about this Privacy Policy, please
        contact me at{" "}
        <a
          href="mailto:contact@sixtusdev.net"
          className="hover:text-blue-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:underline"
        >
          contact@sixtusdev.net
        </a>
        .
      </p>

      <div className="flex items-center flex-wrap py-4">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateHome();
          }}
        >
          <button
            type="button"
            className="lg:my-8 mt-6 py-3 px-6 text-base font-medium text-white rounded-full inline-block bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Go to Home Page&nbsp;&#8594;
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TermsConditions;
