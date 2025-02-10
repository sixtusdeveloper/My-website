"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { MaterialsNavLinks } from "@/data";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import ProgrammingBooks from "@/components/ProgrammingBooks";
import MaterialsHero from "@/components/MaterialHero";
import MaterialsResources from "@/components/MaterialsResources";
import Footer from "@/components/Footer";

const Materialspage = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  //   TODO: Implement a redirect to the sign-in page if the user is not signed in

  //   useEffect(() => {
  //     if (!isSignedIn) {
  //       router.push("/sign-in");
  //     }
  //   }, [isSignedIn, router]);

  return (
    <>
      <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <Navbar navigation={MaterialsNavLinks} />
          <MaterialsHero />
          <ProgrammingBooks />
          <MaterialsResources />
          <Footer />
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
