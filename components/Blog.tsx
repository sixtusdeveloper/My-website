"use client";

import React, { useState } from "react";
import Image from "next/image";
import { blogPosts } from "@/data";
import { BlogPost } from "@/types";
import { FaLocationArrow } from "react-icons/fa";
import BlogModal from "@/components/ui/BlogModal"; // Import the BlogModal component
import { IoClose } from "react-icons/io5";
import Link from "next/link";

// Truncate the Project title to a maximum length
const MAX_TITLE_LENGTH = 60;
const truncateTitle = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 3;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(false); // State for blog loading
  const [isBlogDetailLoading, setIsBlogDetailLoading] = useState(false);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (post: BlogPost) => {
    setIsBlogDetailLoading(true); // Start loading
    setIsLoading(true); // Start loading
    setSelectedPost(post);
    document.body.style.overflow = "hidden"; // Prevent body scroll when modal is open

    // Simulate loading delay
    setTimeout(() => {
      setIsBlogDetailLoading(false); // Start loading
      setIsLoading(false); // Stop loading
    }, 2000); // 2 seconds delay for demonstration
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = ""; // Re-enable body scroll when modal is closed
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleBlogClick = () => {
    setIsBlogLoading(true); // Start loading

    setTimeout(() => {
      setIsBlogLoading(false); // Stop loading
      setIsModalOpen(true); // Open the modal
    }, 1000); // 1 second delay for demonstration
  };

  const handleBlogRedirect = () => {
    window.open("https://devjourney-blog-khaki.vercel.app/", "_blank"); // Open the URL in a new tab
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="blog" className="py-20 px-4 lg:px-10 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl mb-8 text-center font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Few Selection of My Blog Posts
        </h2>
        <div className="grid gap-2 lg:gap-6 md:grid-cols-3 space-y-6 py-4 md:space-y-0">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-secondary dark:bg-gray-900 border shadow-sm rounded-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-54 object-cover rounded-none rounded-tl-lg rounded-tr-lg"
                width={300}
                height={200}
              />
              <div className="p-4">
                <h3 className="text-base font-extrabold text-gray-700 dark:text-gray-200">
                  {truncateTitle(post.title, MAX_TITLE_LENGTH)}
                </h3>

                <div className="flex my-6 gap-4 justify-between items-center">
                  <button
                    onClick={() => openModal(post)}
                    className="py-2 px-6 items-center rounded-md text-blue-500 hover:text-white dark:text-white text-sm md:text-base font-semibold ring-1 ring-blue-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 block hover:ease-in-out hover:scale-105 transition-all duration-300"
                  >
                    {isBlogDetailLoading ? "Loading blog..." : "Read More"}
                  </button>
                  <button
                    onClick={handleBlogClick} // Trigger the blog modal
                    className="py-2 px-4 items-center bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 rounded-md text-white flex cursor-pointer text-sm md:text-base font-semibold tracking-wide hover:ease-in-out hover:scale-105 transition-all duration-300"
                  >
                    Visit Blog <FaLocationArrow className="ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-4 py-1 border shadow-md rounded-sm ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white hover:ease-in-out hover:scale-105 transition-all duration-300"
                  : "bg-secondary dark:bg-gray-900"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Loader for Blog Modal */}
      {isBlogLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}

      {/* Blog Modal */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="You are about to be redirected to my Blog website. Do you wish to continue?"
      >
        <div className="flex justify-center gap-4 p-4">
          <button
            onClick={handleBlogRedirect}
            className="mt-4 rounded-full text-base font-medium px-4 py-2 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white hover:bg-blue-600 hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Yes, visit blog
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 px-4 py-2 text-base font-medium bg-gray-500 text-white rounded-full hover:bg-gray-600 hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </BlogModal>

      {/* Loader for Read More Modal */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}
      {/* Read More Modal */}
      {selectedPost && !isLoading && (
        <div
          onClick={handleModalClick}
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          style={{ pointerEvents: "auto" }}
        >
          <div className="bg-secondary dark:bg-gray-900 border p-2 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] relative overflow-y-auto no-scrollbar">
            {/* Modal Content */}
            <div
              className="p-2 h-full overflow-y-auto no-scrollbar"
              style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-200">
                {selectedPost.title}
              </h3>
              <Image
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
              />
              <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {selectedPost.description}
              </p>

              <div className="flex flex-wrap gap-2 py-8">
                {selectedPost.iconLists?.map((IconComponent, index) => (
                  <div
                    key={index}
                    className="border rounded-full bg-secondary w-10 h-10 flex justify-center items-center"
                  >
                    <IconComponent className="icon" size={30} />
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center items-center gap-4 lg:gap-4 px-2 lg:px-2 my-6 lg:my-8">
                <Link
                  className="w-full"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  <button className="relative w-full rounded-md py-3 px-4 md:px-6 text-white text-center font-semibold text-sm lg:text-base hover:bg-pink-600 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    Close Modal
                  </button>
                </Link>

                <Link
                  className="w-full"
                  href={selectedPost.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="relative w-full hover:ring-0 rounded-md py-3 px-4 md:px-6 ring-1 ring-blue-500 hover:text-white text-blue-500 dark:text-white text-center font-semibold text-sm lg:text-base hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:ease-in-out hover:scale-105 transition-all duration-300">
                    Read in detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
