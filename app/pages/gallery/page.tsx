import Footer from "@/components/Footer";
import GalleryHero from "@/components/GalleryHero";
import Navbar from "@/components/Navbar";
import { GallerysNavLinks } from "@/data";
import React from "react";
import GallerySection from "@/components/GallerySection";

const Gallery = () => {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={GallerysNavLinks} />
        <GalleryHero />
        <GallerySection />
        <Footer />
      </div>
    </main>
  );
};

export default Gallery;
