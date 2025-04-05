"use client";

import React from "react";
import Image from "next/image";
import "./auth-styles.css";
import { SparklesCore } from "./ui/sparkles";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const navigateToTerms = () => {
    router.push("/pages/terms_condition");
  };

  const navigateToPrivacy = () => {
    router.push("/pages/privacy_policy");
  };

  const navigateHome = () => {
    router.push("/");
  };

  return (
    <main className="auth-page relative min-h-screen h-full bg-black dark:bg-black-100 bg-grid dark:bg-grid-white/[0.03] bg-grid-black/[0.2] overflow-y-auto">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen h-full w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:py-6 p-4 sm:p-10 text-white z-10">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateHome();
            }}
            className="flex justify-start items-center gap-1"
          >
            <Image
              src="/Logo.png"
              alt="Sixtusdev Logo"
              width={30}
              height={30}
              className="mb-0 entry-logo"
              priority={true}
              style={{ width: "auto", height: "auto" }} // Maintain aspect ratio
            />

            <span className="tracking-wide sm:block items-center self-center text-sm font-semibold bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 text-transparent bg-clip-text">
              SIXTUSDEV
            </span>
          </Link>

          <ul className="mt-5 space-y-2 p-2 lg:p-8">
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/auth01.png"
                alt="Laptop Code icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <span className="ml-2 sm:ml-2 text-[14px] text-gray-200">
                Crafting seamless and responsive user experiences on the web
              </span>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/auth02.png"
                alt="Code icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <span className="ml-2 sm:ml-2 text-[14px] text-gray-200">
                Engineering robust and scalable software solutions
              </span>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/auth03.png"
                alt="Project icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <span className="ml-2 sm:ml-2 text-[14px] text-gray-200">
                Managing full-cycle software projects from inception to delivery
              </span>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/auth04.png"
                alt="Collaboration icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <span className="ml-2 sm:ml-2 text-[14px] text-gray-200">
                Collaborating with teams to deliver impactful digital solutions
              </span>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/auth05.png"
                alt="Innovation icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <span className="ml-2 sm:ml-2 text-[14px] text-gray-200">
                Innovating through continuous learning and creative
                problem-solving
              </span>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/privacy-policy.png"
                alt="Privacy policy icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPrivacy();
                }}
                className="ml-2 sm:ml-2 text-[14px] text-gray-200 hover:underline no-underline hover:text-green-600"
              >
                Privacy policy - Read more about the privacy policy of this
                application.
              </Link>
            </li>
            <li className="flex items-center py-1 sm:py-2">
              <Image
                src="/terms-condition.png"
                alt="terms and condition icon"
                width={25}
                height={25}
                loading="lazy"
                style={{ width: "auto", height: "auto" }}
                className="overflow-hidden lg:items-center items-start"
              />
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToTerms();
                }}
                className="ml-2 sm:ml-2 text-[14px] text-gray-200 no-underline hover:underline hover:text-green-600"
              >
                Terms and Condition - Read more about the terms and condition of
                this application.
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full bg-black-100 overflow-y-auto shadow-md flex items-center justify-center md:py-10 lg:py-20 p-4 sm:p-10 lg:w-1/2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
