"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const TermsHeroSection = () => {
  const router = useRouter();

  const handlePrivacyRedirect = () => {
    router.push("/pages/privacy_policy");
  };
  return (
    <section className="relative w-full h-[400px] flex items-center md:justify-center justify-start text-center overflow-hidden">
      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/skillsbg.avif')" }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
        <p className="opacity-90 rounded-full py-1 px-4 text-xs lg:text-sm text-blue-300">
          Last updated: March 05, 2025
        </p>
        <h1 className="text-3xl py-1  font-extrabold md:text-4xl lg:text-4xl text-blue-50">
          Welcome to My Terms and Conditions
        </h1>
        <p className="mt-4 text-base opacity-95 text-blue-100">
          Read carefully about the terms of use of this website.
        </p>

        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePrivacyRedirect();
          }}
        >
          <button
            type="button"
            className="lg:my-8 mt-6 py-3 px-6 text-base font-semibold ring-1 ring-blue-500 hover:ring-0 text-white rounded-full inline-block hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Read Privacy Policy&nbsp;&#8594;
          </button>
        </Link>
      </div>
    </section>
  );
};

export default TermsHeroSection;
