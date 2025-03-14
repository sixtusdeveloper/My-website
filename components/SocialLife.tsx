"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ServicesHero = () => {
  return (
    <section className="text-white pt-0 lg:pt-0 text-center min-h-[50vh] lg:min-h-[75vh]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-20 z-10">
        <div className="max-w-6xl p-4 lg:py-8 lg:px-20 text-left lg:mx-auto lg:flex lg:flex-col items-center lg:text-center relative z-20">
          <motion.h1
            className="py-2 tracking-wide text-4xl font-extrabold bg-gradient-to-r from-blue-50 via-blue-50 to-blue-100 text-transparent bg-clip-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Wondering How I Balance Tech Life Along Social Life And Physical
            Health?
          </motion.h1>
          {/* <h1 className="text-4xl font-extrabold mt-2 mb-6 bg-gradient-to-r from-blue-50 via-blue-50 to-blue-100 text-transparent bg-clip-text"></h1> */}
          <motion.p
            className="text-base max-w-3xl mx-auto py-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Well, that's not too hard to do. I balance both, watch me &#8594;
            learn how below.
          </motion.p>
          <a href="#social-life">
            <button
              type="button"
              className="mt-6 bg-transparent ring-1 ring-blue-50 text-white text-base px-6 py-3 rounded-md shadow-lg font-semibold hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              Learn how below
            </button>
          </a>
        </div>
        <Image
          src="/social-bg.webp"
          alt="Courses Hero"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-20 absolute inset-0"
        />
      </div>
    </section>
  );
};

export default ServicesHero;
