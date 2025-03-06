"use client";

import React from "react";
import { CodeIcon, PaintbrushIcon, ServerIcon, RocketIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Full-Stack Development",
    description:
      "Building scalable, high-performance web applications with cutting-edge technologies.",
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
  const router = useRouter();
  const navigateToServices = () => {
    router.push("/pages/portfolio/#services");
  };
  return (
    <section id="services" className="py-10 bg-secondary relative">
      <div className="max-w-6xl mx-auto px-6 text-left md:text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          My Services
        </h2>
        <p className="text-base max-w-2xl mx-auto mb-12">
          I specialize in crafting high-quality digital solutions with a focus
          on performance, scalability, and user experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-sm border text-left transition-transform transform hover:scale-105 ${service.bg}`}
            >
              <div className="flex justify-start mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a onClick={navigateToServices}>
            <button
              type="button"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-green-600 hover:bg-blue-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-none hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Learn more &#8594;
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
