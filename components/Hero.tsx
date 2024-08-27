'use client';

import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const Home = () => {
  const { user, isSignedIn } = useUser();

  return (
    <section className="relative pt-6 lg:pt-10 flex items-center justify-center h-screen bg-secondary">
      <div className="relative z-10 p-8 max-w-2xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
          {isSignedIn && user ? (
            <>
              👋 Hey <span className="text-purple">{user.firstName}</span>
            </>
          ) : (
            "👋 Hey there!"
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl tracking-wider font-bold">
          I'm Sixtus, a Passionate Software Engineer
        </h1>
        <p className="py-8 tracking-wide leading-6 text-sm">
          Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
          Welcome to my personal space where technology meets creativity.
        </p>

        <div className="mt-8">
          <a href="#portfolio" className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold tracking-wider rounded-full py-3 px-8 text-center">View My Work</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
