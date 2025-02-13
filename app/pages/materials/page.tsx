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
import Tutorials from "@/components/Tutorials";
import CallToAction from "@/components/CallToAction";
import ScrollIndicator from "@/components/ScrollIndicator";

const Materialspage = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    // Only redirect if authentication has fully loaded and the user is NOT signed in
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, isLoaded, router]);

  // Prevent rendering the page while auth status is still loading
  if (!isLoaded) {
    return null;
  }

  return (
    <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-screen">
        <Navbar navigation={MaterialsNavLinks} />
        <MaterialsHero />
        <ProgrammingBooks />
        <Tutorials />
        <CallToAction />
        <MaterialsResources />
        <Footer />
        <ScrollIndicator />
      </div>
    </main>
  );
};

export default Materialspage;
