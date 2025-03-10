"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-r from-black/70 via-gray-900/50 to-black/70 text-white">
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
          <a href="/pages/materials">
            <Button className="px-6 h-12 py-3 text-sm lg:text-base font-semibold rounded-md text-white shadow-lg bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600 hover:ease-in-out hover:scale-105 transition-all duration-300">
              Free E-books
            </Button>
          </a>
          <a href="/#contact">
            <Button className="px-6 py-3 h-12 text-sm lg:text-base font-semibold rounded-md text-white shadow-lg border border-white/40 bg-transparent hover:bg-white/20 hover:ease-in-out hover:scale-105 transition-all duration-300">
              Let's Connect
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
