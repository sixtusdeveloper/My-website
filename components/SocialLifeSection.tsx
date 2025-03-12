"use client";

import React, { useState, useEffect } from "react";
import { SocialVideos as socialVideosData } from "@/data/social-videos";
import Loader from "@/components/ui/Loader";

interface SocialVideo {
  src: string;
  videoUrl: string;
  title: string;
  description: string;
}

const Tutorials = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSocialVideo, setSelectedTutorial] =
    useState<SocialVideo | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const socialVideosPerPage = 3;
  const totalPages = Math.ceil(socialVideosData.length / socialVideosPerPage);
  const startIndex = (currentPage - 1) * socialVideosPerPage;
  const currentSocialVideos = socialVideosData.slice(
    startIndex,
    startIndex + socialVideosPerPage
  );

  const openModal = (video: SocialVideo) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedTutorial(video);
      setIsLoading(false);
    }, 2000);
  };

  const closeModal = () => {
    setSelectedTutorial(null);
  };

  useEffect(() => {
    if (selectedSocialVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedSocialVideo]);

  return (
    <section id="social-life" className="pt-12 pb-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6">
        {isLoading && <Loader />}

        <h2 className="text-3xl mb-8 text-center md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Social Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentSocialVideos.map((video, index) => (
            <div
              key={index}
              className="bg-secondary dark:bg-gray-900 rounded-md shadow-sm border"
            >
              <div className="relative w-full aspect-video">
                <video
                  src={video.videoUrl}
                  controls
                  className="w-full h-full rounded-tr-md rounded-tl-md rounded-none"
                ></video>
              </div>
              <h3 className="mt-4 px-4 py-2 text-base font-semibold">
                {video.title.length > 80
                  ? video.title.slice(0, 80) + "..."
                  : video.title}
              </h3>
              <div className="flex justify-between my-4 px-4 py-2">
                <button
                  onClick={() =>
                    openModal({
                      src: video.src,
                      videoUrl: video.videoUrl,
                      title: video.title,
                      description: video.description || "",
                    })
                  }
                  className="py-2 px-6 items-center rounded-md text-purple-600 hover:text-white dark:text-white text-sm md:text-base font-semibold ring-2 ring-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 block hover:ease-in-out hover:scale-105 transition-all duration-300"
                >
                  Watch Video
                </button>
                <a
                  href="https://devjourney-blog-khaki.vercel.app/"
                  target="_blank"
                >
                  <button className="py-2 px-6 items-center rounded-md text-white text-sm md:text-base font-semibold ring-2 ring-blue-500 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 block hover:ease-in-out hover:scale-105 transition-all duration-300">
                    Visit My Blog
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
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
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
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
      </div>

      {/* Modal */}
      {selectedSocialVideo && (
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
                  <video
                    src={selectedSocialVideo.videoUrl}
                    autoPlay
                    controls
                    className="w-full h-full rounded-tr-md rounded-tl-md rounded-none"
                  ></video>
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="mt-4 text-lg font-semibold">
                    {selectedSocialVideo.title}
                  </h3>
                  <p className="mt-2">{selectedSocialVideo.description}</p>
                  <button
                    onClick={closeModal}
                    className="w-full mt-6 rounded-md py-3 px-6 text-white text-center font-medium text-base hover:bg-pink-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600"
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
