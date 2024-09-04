'use client';

import React from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import NavBar from "@/components/Navbar";
import { portfolioNavLinks  } from '@/data';
import ScrollIndicator from '@/components/ScrollIndicator';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Testimonials from '@/components/Testimonials';
import Projects from '@/components/Projects';

export default function Home() {

  return (
    <>
      <SignedIn>
        <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={portfolioNavLinks } />
            <Hero />
            <About />
            <Blog />
            <Testimonials />
            <Projects />
            <Footer />
            <ScrollIndicator />
          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
