"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { MaterialsNavLinks, materials } from "@/data";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const ITEMS_PER_PAGE = 6;

const Materialspage = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);
  const [currentPage, setCurrentPage] = useState(1);

  //   useEffect(() => {
  //     if (!isSignedIn) {
  //       router.push("/sign-in");
  //     }
  //   }, [isSignedIn, router]);

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
    <>
      <main className="relative bg-secondary flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <Navbar navigation={MaterialsNavLinks} />
        <div className="max-w-7xl w-screen lg:px-10 mx-auto p-6 mt-12">
          <h1 className="text-3xl font-bold mb-4">Materials Library</h1>
          <p className="text-gray-600 mb-4">
            Browse and download free programming e-books.
          </p>

          <Input
            type="text"
            placeholder="Search materials..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-4"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayedMaterials.map((material) => (
              <div
                key={material.id}
                className="border p-4 rounded-lg shadow-md"
              >
                <h2 className="text-lg font-semibold">{material.title}</h2>
                <p className="text-sm text-gray-500">
                  Category: {material.category}
                </p>
                <Link href={material.url} target="_blank">
                  <Button className="mt-2 w-full">Download</Button>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md disabled:opacity-50"
              >
                Previous
              </Button>

              <span className="text-lg font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <Button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md disabled:opacity-50"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Materialspage;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import { MaterialsNavLinks } from "@/data";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import Navbar from "@/components/Navbar";

// const materials = [
//   {
//     id: 1,
//     title: "JavaScript Fundamentals",
//     category: "JavaScript",
//     url: "https://example.com/js",
//   },
//   {
//     id: 2,
//     title: "React Advanced Guide",
//     category: "React",
//     url: "https://example.com/react",
//   },
//   {
//     id: 3,
//     title: "Mastering TypeScript",
//     category: "TypeScript",
//     url: "https://example.com/ts",
//   },
//   {
//     id: 4,
//     title: "Mastering Next.js",
//     category: "Next.js",
//     url: "https://example.com/nextjs",
//   },
//   {
//     id: 5,
//     title: "Mastering Java",
//     category: "Java",
//     url: "https://example.com/java",
//   },
// ];

// const Materialspage = () => {
//   const { user, isSignedIn } = useUser();
//   const router = useRouter();
//   const [search, setSearch] = useState("");
//   const [filteredMaterials, setFilteredMaterials] = useState(materials);

//   useEffect(() => {
//     if (!isSignedIn) {
//       router.push("/sign-in");
//     }
//   }, [isSignedIn, router]);

//   useEffect(() => {
//     setFilteredMaterials(
//       materials.filter((material) =>
//         material.title.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search]);

//   if (!isSignedIn) return null; // Prevent rendering before redirect

//   return (
//     <>
//       <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
//         <Navbar navigation={MaterialsNavLinks} />
//         <div className="max-w-7xl w-screen lg:px-10 mx-auto p-6 mt-12">
//           <h1 className="text-3xl font-bold mb-4">Materials Library</h1>
//           <p className="text-gray-600 mb-4">
//             Browse and download free programming e-books.
//           </p>

//           <Input
//             type="text"
//             placeholder="Search materials..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full mb-4"
//           />

//           <div className="grid md:grid-cols-2 gap-4">
//             {filteredMaterials.map((material) => (
//               <div
//                 key={material.id}
//                 className="border p-4 rounded-lg shadow-md"
//               >
//                 <h2 className="text-lg font-semibold">{material.title}</h2>
//                 <p className="text-sm text-gray-500">
//                   Category: {material.category}
//                 </p>
//                 <Link href={material.url} target="_blank">
//                   <Button className="mt-2 w-full">Download</Button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Materialspage;
