'use client';

import React from 'react';
import Hero from '@/components/PortfolioHero';
import Footer from '@/components/Footer';
import NavBar from "@/components/Navbar";
import { portfolioNavLinks  } from '@/data';
import ScrollIndicator from '@/components/ScrollIndicator';
import Clients from "@/components/PortfolioClients";
import Services from "@/components/PortfolioServices";
import ClientComponenies from '@/components/PortfolioClientComponies';
import Experience from '@/components/PortfolioExperiences';
import Skills from '@/components/PortfolioSkills';
import Projects from '@/components/PortfolioProjects';
import ReachOut from '@/components/PortfolioReachOut';
import PortfolioCertifications from '@/components/PortfolioCertifications';

export default function Home() {

  return (
    <>
      <main className="relative bg-secondary-foreground flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-screen">
          <NavBar navigation={portfolioNavLinks } />
          <Hero />
          <Services />
          <Experience />
          <Clients />
          <ClientComponenies />
          <Projects />
          <Skills />
          <PortfolioCertifications />
          <ReachOut />
          <Footer />
          <ScrollIndicator />
        </div>
      </main>
     
    </>
  );
}
