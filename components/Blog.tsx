'use client';

import React, { useState } from "react";
import Image from "next/image";
import { blogPosts } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import BlogModal from "@/components/ui/BlogModal"; // Import the BlogModal component

// Truncate the Project title to a maximum length
const MAX_TITLE_LENGTH = 50;
const truncateTitle = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Truncate the Project Description to a maximum length
const MAX_DESCRIPTION_LENGTH = 86;
const truncateDescription = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

// Type definitions
type BlogPost = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  diagramImageUrl: string;
};

const Blog = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 3;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // State for loading
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // State for modal
  const [isBlogLoading, setIsBlogLoading] = useState<boolean>(false); // State for blog loading

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const openModal = (post: BlogPost) => {
    setIsLoading(true); // Start loading
    setSelectedPost(post);
    document.body.style.overflow = 'hidden'; // Prevent body scroll when modal is open

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false); // Stop loading
    }, 2000); // 2 seconds delay for demonstration
  };

  const closeModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = ''; // Re-enable body scroll when modal is closed
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Logic for "Visit my Blog" button
  const handleBlogClick = () => {
    setIsBlogLoading(true); // Start loading

    setTimeout(() => {
      setIsBlogLoading(false); // Stop loading
      setIsModalOpen(true); // Open the modal
    }, 1000); // 1 second delay for demonstration
  };

  const handleBlogRedirect = () => {
    window.open('https://www.devjourney.com', '_blank'); // Open the URL in a new tab
    setIsModalOpen(false); // Close the modal
  };

  return (
    <section id="blog" className="py-20 px-4 lg:px-8 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Few Selection of my Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {currentPosts.map((post) => (
            <article key={post.id} className="p-4 bg-secondary border rounded-lg shadow">
              <Image
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-54 object-cover rounded-lg"
                width={300}
                height={200}
              />
              <div className="pt-2">
                <h3 className="text-lg font-bold">{truncateTitle(post.title, MAX_TITLE_LENGTH)}</h3>
                <p className="mt-2 text-sm leading-relaxed">{truncateDescription(post.description, MAX_DESCRIPTION_LENGTH)}</p>
                <div className="flex mt-4 gap-4 justify-between items-center">
                  <button
                    onClick={() => openModal(post)}
                    className="text-blue-500 text-sm tracking-wide block"
                  >
                    Read More
                  </button>
                  <button
                    onClick={handleBlogClick} // Trigger the blog modal
                    className="text-blue-500 flex items-center cursor-pointer text-sm tracking-wide"
                  >
                    Visit my Blog <FaLocationArrow className="ml-1" />
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
              className={`mx-1 px-4 py-1 border rounded ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-secondary"
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
        message="You are about to visit my full blog website. Do you want to continue?"
      >
        <div className="flex justify-center gap-4 p-4">
          <button
            onClick={handleBlogRedirect}
            className="mt-4 px-4 py-2 bg-blue-500 tracking-wide text-sm text-white rounded hover:bg-blue-600"
          >
            Yes, Visit Blog
          </button>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 px-4 py-2 text-sm tracking-wide bg-gray-500 text-white rounded hover:bg-gray-600"
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
          className="fixed inset-0 bg-black bg-opacity-75 p-6 flex justify-center items-center z-50"
          style={{ pointerEvents: 'auto' }}
        >
          <div className="bg-secondary border rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] relative overflow-y-auto no-scrollbar">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <div className="p-6 h-full overflow-y-auto no-scrollbar" style={{ scrollbarWidth: 'thin', scrollBehavior: 'smooth' }}>
              <h3 className="text-2xl font-bold mb-4">{selectedPost.title}</h3>
              <Image
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-lg"
                width={500}
                height={300}
                style={{ objectFit: 'cover' }}
              />
              <p className="mt-4 text-sm leading-relaxed">
                {selectedPost.description}
              </p>
              <div className="py-8">
                <Image 
                  src={selectedPost.diagramImageUrl}
                  alt="javascript closure diagram"
                  width={300}
                  height={200}
                  style={{ objectFit: 'contain', width: 'auto', height: 'auto' }} 
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;








