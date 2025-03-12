"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { galleryImages } from "@/data/gallery";

export default function GallerySection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    let images = galleryImages;

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
  const totalPages = Math.ceil(filteredImages.length / imagesPerPage);
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = filteredImages.slice(
    indexOfFirstImage,
    indexOfLastImage
  );

  return (
    <section id="personal-life" className="bg-secondary py-14 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-8 text-center md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          My Gallery
        </h2>
        <p className="text-base">
          Explore memories beyond my software engineering journey.
        </p>

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
          {[
            "All",
            "Personal Milestones",
            "Public Events",
            "Cherished Memories",
          ].map((category) => (
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
          ))}
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
                className="w-full gallery-img h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded-sm shadow-sm font-semibold hover:ease-in-out hover:scale-105 transition-all duration-300 ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed bg-secondary dark:bg-gray-900 border"
                : "text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600"
            }`}
          >
            Previous
          </button>

          <span className="text-sm font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded-sm shadow-sm font-semibold hover:ease-in-out hover:scale-105 transition-all duration-300 ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed bg-secondary dark:bg-gray-900 border"
                : "text-white bg-gradient-to-r from-pink-500 via-yellow-500 to-pink-500 hover:bg-yellow-600"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
