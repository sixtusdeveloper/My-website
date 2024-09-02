'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to handle "Read More" / "That's it from me" button clicks
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  // Function to handle page refresh or initial load
  useEffect(() => {
    // Reset state on page load to ensure default view
    setIsExpanded(false);
  }, []);

  return (
    <section id="about" className="p-8 lg:py-10 bg-secondary">
      <div className="max-w-3xl mt-8 lg:mt-2 mx-auto text-center"> 
        <div className="flex justify-center items-center my-4 p-2 w-full relative">
          <Image 
          src="/profile-img.png" 
          alt="Profile image"
          width={200}
          height={200}
          className="profile_image relative rounded-full"
          />
        </div>
        <h2 className="text-3xl tracking-wider font-bold mb-4">About Me</h2>
        <p className="text-base tracking-wide leading-relaxed mb-4">
          Hi, I’m Sixtus Aondoakaa, a passionate Software Engineer dedicated to crafting scalable and innovative web solutions. My journey in tech began with a fascination for how technology shapes our world. Over the years, I have navigated the complexities of full-stack development, embracing both front-end and back-end technologies to build robust applications.
        </p>
        {isExpanded && (
          <>
            <p className="text-base tracking-wide leading-relaxed mb-4">
              The path has not always been smooth. The tech industry is dynamic and ever-evolving, and staying ahead requires more than just technical skills—it demands resilience and a commitment to continuous learning. I have faced and overcome numerous challenges, from mastering new frameworks to debugging intricate issues. Each obstacle has been a stepping stone, contributing to my growth as a software engineer.
            </p>
            <p className="text-base tracking-wide leading-relaxed mb-4">
              My journey is marked by a dedication to excellence and an insatiable curiosity. Whether it's developing complex systems or simplifying user interfaces, I approach each project with the same enthusiasm and meticulous attention to detail. I believe that technology should not only solve problems but also create seamless and delightful user experiences.
            </p>
            <p className="text-base tracking-wide leading-relaxed mb-4">
              Today, I am proud of the work I have accomplished and the professional growth I have achieved. I am excited about the future and eager to continue pushing the boundaries of what is possible in the tech world. Thank you for visiting my site, and I look forward to connecting with like-minded individuals and exploring new opportunities.
            </p>
          </>
        )}
        <button 
          onClick={handleToggle} 
          className="text-blue-600 hover:no-underline tracking-wide text-base mt-4 button ring-1 py-2 px-8 rounded-full"
        >
          {isExpanded ? "That's it from me" : "More to read"}
        </button>
      </div>
    </section>
  );
};

export default About;



