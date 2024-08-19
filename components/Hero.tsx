import React from "react";
import { Boxes } from "@/components/ui/background-boxes"; // Adjust the path if necessary

const MySection = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative z-10 p-8 max-w-xl text-center">
        <h1 className="text-4xl font-bold">Welcome to My Project</h1>
        <p className="mt-4 text-lg">
          This section showcases an innovative and visually appealing design.
        </p>
      </div>
      <Boxes className="absolute inset-0 z-0" />
    </section>
  );
};

export default MySection;
