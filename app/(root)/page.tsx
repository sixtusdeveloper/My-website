"use client";

import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { navigation } from "@/data";
import ScrollIndicator from "@/components/ScrollIndicator";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Testimonials from "@/components/PortfolioClients";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Materials from "@/components/Materials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import ExploreMoreCallToAction from "@/components/ExploreMoreCallToAction";
import GalleryCallToAction from "@/components/GalleryCallToAction";

export default function Home() {
  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <NavBar navigation={navigation} />
        <Hero />
        <About />
        <Services />
        <Blog />
        <GalleryCallToAction />
        <Testimonials />
        <Projects />
        <Materials />
        <FAQ />
        <Contact />
        <ExploreMoreCallToAction />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
}
