"use client";

import React, { useState } from "react";
import { tutorials } from "@/data/tutorials";

const Tutorials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tutorialsPerPage = 3; // Adjust this based on your design

  const totalPages = Math.ceil(tutorials.length / tutorialsPerPage);
  const startIndex = (currentPage - 1) * tutorialsPerPage;
  const currentTutorials = tutorials.slice(
    startIndex,
    startIndex + tutorialsPerPage
  );

  return (
    <section id="tutorials" className="py-12 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-start md:text-center mb-8">
          Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-secondary p-2 rounded-lg shadow-md border"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={tutorial.videoUrl}
                  title={tutorial.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                ></iframe>
              </div>
              <h3 className="mt-4 px-2 text-lg font-semibold">
                {tutorial.title}
              </h3>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-1 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === 1
                ? "bg-transparent border cursor-not-allowed shadow-md"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            Previous
          </button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-1 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-transparent border cursor-not-allowed shadow-md"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
