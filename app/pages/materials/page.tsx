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

const Materialspage = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  //   TODO: Implement a redirect to the sign-in page if the user is not signed in

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  return (
    <>
      <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <Navbar navigation={MaterialsNavLinks} />
          <MaterialsHero />
          <ProgrammingBooks />
          <Tutorials />
          <CallToAction />
          <MaterialsResources />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Materialspage;
