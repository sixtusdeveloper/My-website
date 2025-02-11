"use client";

import React, { useState, useEffect } from "react";
import { FiFile, FiX } from "react-icons/fi";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { materials } from "@/data";

const ITEMS_PER_PAGE = 6;

const ProgrammingBooks = () => {
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState<{
    id: number;
    title: string;
    category: string;
    pdfUrl?: string;
    docxUrl?: string;
  } | null>(null);
  const [downloading, setDownloading] = useState("");

  useEffect(() => {
    const results = materials.filter((material) =>
      material.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMaterials(results);
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filteredMaterials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedMaterials = filteredMaterials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  interface Material {
    id: number;
    title: string;
    category: string;
    pdfUrl?: string;
    docxUrl?: string;
  }

  const handleDownload = (material: Material): void => {
    if (!material.pdfUrl && !material.docxUrl) {
      setShowModal(true);
      setSelectedMaterial(null);
      return;
    }
    setShowModal(true);
    setSelectedMaterial(material);
  };

  interface DownloadUrls {
    pdfUrl?: string;
    docxUrl?: string;
  }

  const initiateDownload = (
    url: string | undefined,
    type: "pdf" | "docx"
  ): void => {
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

  return (
    <section id="library" className="py-10 bg-secondary w-full">
      <div className="relative mx-auto max-w-6xl w-screen lg:px-10 p-4">
        <h1 className="text-3xl font-bold mb-4">Materials Library</h1>
        <p className="mb-4">Browse and download free programming e-books.</p>
        <Input
          type="text"
          placeholder="Search materials..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedMaterials.map((material) => (
            <div key={material.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{material.title}</h2>
              <p className="text-sm py-2">Category: {material.category}</p>
              <Button
                onClick={() => handleDownload(material)}
                className="mt-4 w-full bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white rounded-lg"
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-secondary p-6 rounded-lg border shadow-lg max-w-md w-full relative text-center overflow-y-auto max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 hover:text-red-500"
            >
              <FiX size={20} />
            </button>
            {selectedMaterial ? (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  {selectedMaterial.title}
                </h2>
                <p className="text-sm mb-4">
                  Category: {selectedMaterial.category}
                </p>
                <p className="mb-4">
                  Below are two different ways you could download the document.
                </p>
                <div className="flex justify-center gap-6">
                  <FaFilePdf className="text-red-600 text-6xl" />
                  <FaFileWord className="text-blue-600 text-6xl" />
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    onClick={() =>
                      initiateDownload(selectedMaterial.pdfUrl, "pdf")
                    }
                    className={`w-full font-sans text-sm text-center ${
                      downloading === "pdf"
                        ? "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-indigo-600 via-green-500 to-yellow-600"
                    } text-white rounded-lg`}
                  >
                    {downloading === "pdf" ? "Downloading..." : "Download PDF"}
                  </Button>
                  <Button
                    onClick={() =>
                      initiateDownload(selectedMaterial.docxUrl, "docx")
                    }
                    className={`w-full font-sans text-sm text-center ${
                      downloading === "docx"
                        ? "bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600"
                        : "bg-gradient-to-r from-green-600 via-blue-500 to-green-600"
                    } text-white rounded-lg`}
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
                <p className="mt-2 text-gray-600">
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

export default ProgrammingBooks;
