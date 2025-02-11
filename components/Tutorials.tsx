"use client";

import React, { useState, useEffect } from "react";
import { tutorials } from "@/data/tutorials";
import { AiOutlineClose } from "react-icons/ai";
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
        <h2 className="text-3xl font-bold text-start md:text-center mb-8">
          YouTube Tutorials
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
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
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Watch Video
                </button>
                <button
                  onClick={handleSubscribe}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
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

      {/* Modal */}
      {selectedTutorial && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-2 lg:p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary p-2 lg:p-6 rounded-lg shadow-lg max-w-2xl w-full relative overflow-y-auto max-h-[90vh] no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-1 md:top-2 md:right-2 text-base rounded-full hover:text-red-500 z-40"
              onClick={closeModal}
            >
              <AiOutlineClose size={18} />
            </button>
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
                    // frameBorder="0"  this is deplcated
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-lg"
                  ></iframe>
                </div>
                <h3 className="mt-4 text-lg font-semibold">
                  {selectedTutorial.title}
                </h3>
                <p className="mt-2">{selectedTutorial.description}</p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Tutorials;
