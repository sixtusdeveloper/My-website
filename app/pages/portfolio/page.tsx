'use client';

import React from 'react';
import Hero from '@/components/PortfolioHero';
import Footer from '@/components/Footer';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import NavBar from "@/components/Navbar";
import { portfolioNavLinks  } from '@/data';
import ScrollIndicator from '@/components/ScrollIndicator';
import  Clients from "@/components/PortfolioClients";
// import ClientComponenies from "@/components/PortfolioClientComponenies";
import Projects from '@/components/PortfolioProjects';

// import About from '@/components/About';
// import Blog from '@/components/Blog';


export default function Home() {

  return (
    <>
      <SignedIn>
        <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={portfolioNavLinks } />
            <Hero />
            {/* <About /> */}
            {/* <Blog /> */}
            <Clients />
            {/* <ClientComponenies /> */}
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
