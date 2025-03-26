"use client";

import React, { useState } from "react";
import { CodeIcon, PaintbrushIcon, ServerIcon, RocketIcon } from "lucide-react";
import ServicesModal from "@/components/ui/GalleryModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable, high-performance web and mobile applications with cutting-edge technologies.",
    icon: <CodeIcon className="w-12 h-12 p-2 text-blue-500 overflow-hidden" />,
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
  },
  {
    title: "UI/UX Design & Prototyping",
    description:
      "Crafting visually stunning and user-friendly interfaces for a seamless experience.",
    icon: (
      <PaintbrushIcon className="w-12 h-12 p-2 text-purple-500 overflow-hidden" />
    ),
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
  },
  {
    title: "Backend & API Development",
    description:
      "Designing secure, scalable, and optimized server-side applications and RESTful APIs.",
    icon: (
      <ServerIcon className="w-12 h-12 p-2 text-green-500 overflow-hidden" />
    ),
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing website speed, SEO, and accessibility for an optimal digital experience.",
    icon: (
      <RocketIcon className="w-12 h-12 p-2 text-orange-500 overflow-hidden" />
    ),
    bg: "bg-secondary dark:bg-gray-900 shadow-lg rounded-md",
  },
];

const ServicesSection = () => {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);
  const [isServicesLoading, setIsServicesLoading] = useState(false);

  const router = useRouter();

  const openServicesModal = () => {
    setIsServicesLoading(true);
    setTimeout(() => {
      setIsServicesLoading(false);
      setIsServicesModalOpen(true);
    }, 2000);
  };

  const handleServicesRedirect = () => {
    router.push("/pages/portfolio/#services");
  };

  return (
    <section id="services" className="py-10 bg-secondary relative">
      <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          My Services
        </h2>
        <p className="text-base max-w-2xl mx-auto mb-12 text-gray-600 dark:text-blue-100">
          I specialize in crafting high-quality digital solutions for web and
          mobile devices with a focus on performance, scalability, and user
          experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm border text-left transition-transform transform hover:scale-105 ${service.bg}`}
            >
              <div className="flex justify-start mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-blue-50">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-blue-100">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center mx-auto">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openServicesModal();
            }}
          >
            <button
              type="button"
              className="ring-1 ring-blue-500 hover:ring-0 text-blue-500 dark:text-blue-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-green-600 hover:bg-blue-600 hover:text-white text-sm md:text-base font-semibold h-12 px-6 py-3 rounded-md hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              {isServicesLoading ? "Loading..." : "Learn More"}
            </button>
          </Link>
        </div>
      </div>

      {/* Loader for Blog Modal */}
      {isServicesLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}

      {/* Blog Modal */}
      <ServicesModal
        isOpen={isServicesModalOpen}
        onClose={() => setIsServicesModalOpen(false)}
        message="You are about to be navigated to my Portfolio page. Do you wish to continue?"
      >
        <div className="flex justify-center gap-4 p-4 mt-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleServicesRedirect();
            }}
          >
            <button
              onClick={handleServicesRedirect}
              className="text-base font-medium bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Sure, Navigate
            </button>
          </Link>
          <button
            onClick={() => setIsServicesModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white text-base font-medium py-2 px-8 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </ServicesModal>
    </section>
  );
};

export default ServicesSection;
