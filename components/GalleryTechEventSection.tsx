"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { TechEvents } from "@/data/tech-events";

export default function GallerySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(TechEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    let images = TechEvents;

    if (selectedCategory !== "All") {
      images = images.filter((image) => image.category === selectedCategory);
    }

    if (searchTerm) {
      images = images.filter((image) =>
        image.alt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredImages(images);
    setCurrentPage(1); // Reset to first page on new filter/search
  }, [searchTerm, selectedCategory]);

  // Pagination Logic
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  return (
    <>
      <section
        id="tech-events"
        className="relative w-full h-[350px] flex items-center md:justify-center justify-start text-center overflow-hidden"
      >
        {/* Fixed Background */}
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/blog05.avif')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-4 lg:pl-20 lg:pr-8 md:text-center text-left">
          <h1 className="text-4xl font-extrabold md:text-5xl text-white">
            Unforgettable Events
          </h1>
          <p className="mt-4 text-base opacity-95 text-gray-100">
            Explore memories behind my software engineering and tech journey at
            large.
          </p>
          <a href="#tech_events">
            <button className="my-6 py-3 px-6 rounded-md font-semibold text-white hover:text-white dark:text-white text-base ring-2 ring-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-pink-500 hover:ease-in-out hover:scale-105 transition-all duration-300">
              Explore Events
            </button>
          </a>
        </div>
      </section>
      <section
        id="tech_events"
        className="bg-secondary pb-8 lg:pb-12 pt-4 px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Search Input */}
          <div className="mt-6 max-w-3xl mx-auto">
            <Input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-3 rounded-md border w-full focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex justify-center lg:flex-nowrap flex-wrap gap-4 mt-6">
            {["All", "Tech Meetings", "Tech Associates", "Tech Awards"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-md text-sm font-semibold shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300 ${
                    selectedCategory === category
                      ? "text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600"
                      : "bg-secondary dark:bg-gray-900 border"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {currentImages.length > 0 ? (
            currentImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative group overflow-hidden rounded-md shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full tech_event_img h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-white text-sm lg:text-base text-center p-4 font-semibold">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No images found
            </p>
          )}
        </motion.div>

        {/* Pagination */}
        {filteredImages.length > imagesPerPage && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from(
              { length: Math.ceil(filteredImages.length / imagesPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 text-sm rounded-sm shadow-sm font-semibold hover:ease-in-out hover:scale-105 transition-all duration-300 ${
                    currentPage === i + 1
                      ? "text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600"
                      : "bg-secondary dark:bg-gray-900 border"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        )}
      </section>
    </>
  );
}
