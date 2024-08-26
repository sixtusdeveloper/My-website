import React from "react";
import { useUser } from "@clerk/nextjs";

const Home = () => {
  const { user, isSignedIn } = useUser();
  return (
    <section className="relative flex items-center justify-center h-screen bg-secondary">
      
      <div className="relative z-10 p-8 max-w-xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
            {isSignedIn && user ? (
              <>
                👋 Hey <span className="text-purple">{user.firstName}</span>
              </>
            ) : (
              "👋 Hey there!"
            )}
        </h3>
        <h1 className="text-3xl lg:text-4xl tracking-wide font-bold">Welcome to my website</h1>
        <p className="mt-4 text-lg">
          This section showcases an innovative and visually appealing design.
        </p>
      </div>
    </section>
  );
};

export default Home;
