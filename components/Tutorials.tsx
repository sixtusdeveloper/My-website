"use client";

import React, { useState, useEffect } from "react";
import { tutorials } from "@/data/tutorials";
import Loader from "@/components/ui/Loader";

interface Tutorial {
  videoUrl: string;
  title: string;
  description: string;
}

const Tutorials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const tutorialsPerPage = 3;
  const totalPages = Math.ceil(tutorials.length / tutorialsPerPage);
  const startIndex = (currentPage - 1) * tutorialsPerPage;
  const currentTutorials = tutorials.slice(
    startIndex,
    startIndex + tutorialsPerPage
  );

  const openModal = (tutorial: Tutorial) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTutorial(tutorial);
      setIsLoading(false);
    }, 2000);
  };

  const closeModal = () => {
    setSelectedTutorial(null);
  };

  // Disable page scroll when modal is open
  useEffect(() => {
    if (selectedTutorial) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedTutorial]);

  // Subscribe user
  const handleSubscribe = () => {
    const youtubeChannelUrl =
      "https://www.youtube.com/channel/UC6SUbtunN-oA-ZRLvGdJvLw?sub_confirmation=1"; // Replace with your actual Channel ID
    const popup = window.open(
      youtubeChannelUrl,
      "Subscribe",
      "width=500,height=600"
    );

    if (!popup) {
      // Fallback if popup is blocked
      window.location.href = youtubeChannelUrl;
    }
  };

  return (
    <section id="tutorials" className="py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        {isLoading && <Loader />}
        <h2 className="md:text-[2rem] text-2xl font-bold text-start md:text-center mb-8">
          YouTube Tutorials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentTutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-secondary dark:bg-gray-900 p-2 rounded-md shadow-sm border"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={tutorial.videoUrl}
                  title={tutorial.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-tr-lg rounded-tl-lg"
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
              </div>
              <h3 className="mt-4 px-2 text-base font-semibold">
                {tutorial.title.length > 80
                  ? tutorial.title.slice(0, 80) + "..."
                  : tutorial.title}
              </h3>
              <div className="flex justify-between mt-2 p-2">
                <button
                  onClick={() =>
                    openModal({
                      ...tutorial,
                      description: tutorial.description || "",
                    })
                  }
                  className="py-2 px-6 items-center rounded-md text-purple-600 hover:text-white dark:text-white text-sm md:text-base font-semibold ring-2 ring-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 block hover:ease-in-out hover:scale-105 transition-all duration-300"
                >
                  Watch Video
                </button>
                <button
                  onClick={handleSubscribe}
                  className="py-2 px-6 items-center rounded-md text-pink-600 hover:text-white dark:text-white text-sm md:text-base font-semibold ring-2 ring-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 block hover:ease-in-out hover:scale-105 transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === 1
                ? "bg-secondary dark:bg-gray-900 border cursor-not-allowed shadow-md"
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
            className={`px-4 py-2 mx-1 rounded cursor-pointer transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-transparent border cursor-not-allowed shadow-md"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary dark:bg-gray-900 rounded-md shadow-sm border max-w-2xl w-full relative overflow-y-auto max-h-[90vh] no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="loader"></div>
              </div>
            ) : (
              <>
                <div className="relative w-full aspect-video">
                  <iframe
                    src={selectedTutorial.videoUrl + "?autoplay=1"}
                    title={selectedTutorial.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="mt-4 text-lg font-semibold">
                    {selectedTutorial.title}
                  </h3>
                  <p className="mt-2">{selectedTutorial.description}</p>
                  <button
                    onClick={closeModal}
                    className="w-full mt-4 rounded-md py-3 px-6 text-white text-center font-medium text-base hover:bg-pink-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600"
                  >
                    Close Modal
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Tutorials;
