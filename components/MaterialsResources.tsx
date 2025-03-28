"use client";

import React, { useState, useEffect } from "react";
import { FaFilePdf, FaFileWord, FaTimes } from "react-icons/fa";
import { resources } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { FiFile } from "react-icons/fi";
const ITEMS_PER_PAGE = 3;

const MaterialsResources = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{
    icon?: any[];
    title?: string;
    category?: string;
    desc?: string;
    rating?: string;
    pdfUrl?: string;
    docxUrl?: string;
  } | null>(null);
  const [downloading, setDownloading] = useState("");

  const totalPages = Math.ceil(resources.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentResources = resources.slice(indexOfFirstItem, indexOfLastItem);

  // interface Resource definition removed

  const handleDownload = (resource: Resource) => {
    if (!resource.pdfUrl && !resource.docxUrl) {
      setShowModal(true);
      setSelectedResource(null);
      return;
    }
    setShowModal(true);
    setSelectedResource(resource);
  };

  interface Resource {
    icon?: any[];
    title?: string;
    category?: string;
    desc?: string;
    rating?: string;
    pdfUrl?: string;
    docxUrl?: string;
  }

  const initiateDownload = (url: string | undefined, type: string) => {
    if (!url) return;
    setDownloading(type);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", url.split("/").pop() || "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(""), 2000);
  };
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <section
      id="featured-resources"
      className="w-full py-16 px-4 lg:px-8 bg-secondary"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl mb-8 text-center md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Featured Resources
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {currentResources.map((resource, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-seconday dark:bg-gray-900"
            >
              <div className="flex mx-auto justify-center items-center text-center p-2 mb-2">
                {resource.icon.map((IconComponent, index) => (
                  <div
                    key={index}
                    className="border shadow-md rounded-full bg-secondary w-14 h-14 flex justify-center items-center"
                  >
                    <IconComponent className="icon text-yellow-400" size={34} />
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-gray-700 dark:text-blue-50">
                {resource.title}
              </h3>
              <p className="text-sm py-2 text-gray-700 dark:text-blue-50">
                Category: {resource.category}
              </p>
              <p className="text-sm leading-snug text-gray-600 dark:text-blue-100">
                {resource.desc}
              </p>
              <p className="text-yellow-500 text-lg">{resource.rating}</p>
              <Button
                onClick={() => handleDownload(resource)}
                className="w-full mt-4 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white rounded-lg"
              >
                Download
              </Button>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mx-auto text-center mt-6 items-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 border items-center shadow-md rounded-full transition ${
                currentPage === index + 1
                  ? "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white"
                  : "bg-secondary dark:bg-gray-900"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-secondary dark:bg-gray-900 p-6 rounded-lg border shadow-md max-w-md w-full text-center relative md:w-[700px] max-h-[70vh] overflow-y-auto no-scrollbar"
            onClick={(e) => e.stopPropagation()}
          >
            <FaTimes
              className="rounded-full absolute top-4 right-4 hover:text-red-500 cursor-pointer text-lg"
              onClick={() => setShowModal(false)}
            />
            {selectedResource ? (
              <>
                <div className="flex justify-center items-center gap-4">
                  {selectedResource.icon &&
                    selectedResource.icon.map((IconComponent, index) => (
                      <div
                        key={index}
                        className="border shadow-md rounded-full bg-secondary w-20 h-20 flex justify-center items-center"
                      >
                        <IconComponent
                          className="icon text-yellow-400"
                          size={34}
                        />
                      </div>
                    ))}
                </div>
                <h3 className="text-xl font-semibold mt-4 text-gray-700 dark:text-blue-50">
                  {selectedResource.title}
                </h3>
                <p className="text-sm py-2 text-gray-700 dark:text-blue-50">
                  Category: {selectedResource.category}
                </p>
                <p className="text-sm leading-snug text-gray-600 dark:text-blue-100">
                  {selectedResource.desc}
                </p>
                <p className="text-yellow-500 text-lg">
                  {selectedResource.rating}
                </p>
                <h2 className="text-sm font-semibold mb-2 text-gray-600 dark:text-blue-100">
                  Below are two different ways you could download the document.
                </h2>
                <div className="flex justify-center gap-6 py-8">
                  <FaFilePdf className="text-red-600 text-6xl" />
                  <FaFileWord className="text-blue-600 text-6xl" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    onClick={() =>
                      initiateDownload(selectedResource.pdfUrl, "pdf")
                    }
                    className={`w-full ${
                      downloading === "pdf"
                        ? "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-indigo-600 via-green-500 to-yellow-600"
                    } text-white rounded-lg`}
                  >
                    {downloading === "pdf" ? "Downloading..." : "Download PDF"}
                  </Button>
                  <Button
                    onClick={() =>
                      initiateDownload(selectedResource.docxUrl, "docx")
                    }
                    className={`w-full ${
                      downloading === "docx"
                        ? "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-green-600 via-blue-500 to-green-600"
                    } text-white rounded-md`}
                  >
                    {downloading === "docx"
                      ? "Downloading..."
                      : "Download DOCX"}
                  </Button>
                </div>
              </>
            ) : (
              <>
                <FiFile className="text-center mx-auto p-4 text-7xl" />

                <h2 className="text-lg font-semibold text-red-600">
                  No File Available
                </h2>
                <p className="mt-2 text-gray-600 dark:text-blue-100">
                  Sixtus has not uploaded the document yet, please check back
                  later.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MaterialsResources;
