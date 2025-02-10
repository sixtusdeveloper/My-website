"use client";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { materials } from "@/data";
import Link from "next/link";

const ITEMS_PER_PAGE = 6;

const ProgrammingBooks = () => {
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const results = materials.filter((material) =>
      material.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMaterials(results);
    setCurrentPage(1); // Reset to first page on search
  }, [search]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredMaterials.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedMaterials = filteredMaterials.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section id="library" className="py-10 bg-secondary w-full">
      <div className="relative mx-auto max-w-6xl w-screen lg:px-10 p-4">
        <div className="my-10">
          <h1 className="text-3xl font-bold mb-4">Materials Library</h1>
          <p className="mb-4">Browse and download free programming e-books.</p>

          <Input
            type="text"
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4"
          />
        </div>

        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {displayedMaterials.map((material) => (
            <div
              key={material.id}
              className="border overflow-hidden p-4 rounded-lg shadow-md"
            >
              <h2 className="text-lg font-semibold">{material.title}</h2>
              <p className="text-sm py-2">Category: {material.category}</p>
              <Link href={material.url} target="_blank">
                <Button className="mt-4 w-full text-center font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white">
                  Download
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-6 items-center mt-6">
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
        )}
      </div>
    </section>
  );
};

export default ProgrammingBooks;
