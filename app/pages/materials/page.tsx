"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const materials = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "JavaScript",
    url: "https://example.com/js",
  },
  {
    id: 2,
    title: "React Advanced Guide",
    category: "React",
    url: "https://example.com/react",
  },
  {
    id: 3,
    title: "Mastering TypeScript",
    category: "TypeScript",
    url: "https://example.com/ts",
  },
];

const Materialspage = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/auth/sign-in");
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    setFilteredMaterials(
      materials.filter((material) =>
        material.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  if (!isSignedIn) return null; // Prevent rendering before redirect

  return (
    <div className="max-w-4xl mx-auto p-6">
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

      <div className="grid md:grid-cols-2 gap-4">
        {filteredMaterials.map((material) => (
          <div key={material.id} className="border p-4 rounded-lg shadow-md">
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
    </div>
  );
};

export default Materialspage;
