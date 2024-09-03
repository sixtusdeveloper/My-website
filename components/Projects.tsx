import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Personal Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="flex lg:flex-row flex-col-1 relative justify-center gap-4 p-4 bg-secondary border rounded-lg shadow">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image 
                src="/project01.png"
                alt="Open Source img"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Open Source Contribution</h3>
              <p className="mt-2 text-base leading-relaxed">
                Actively contributed to the <span className="font-semibold">OptiFrame project</span>, an open-source initiative, by improving the codebase, refining the UI/UX design, and significantly enhancing the project's performance. My contributions helped in reducing load times by 20% and increasing user engagement.
              </p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="flex lg:flex-row flex-col-1 justify-center gap-4 p-4 bg-secondary border rounded-lg shadow">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image 
                src="/project02.png"
                alt="Web App img"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Full-Stack Web Application</h3>
              <p className="mt-2 text-base leading-relaxed">
                Developed a full-stack web application called <span className="font-semibold">TaskMaster</span>, designed to streamline task management for teams. The app features real-time collaboration, task assignment, and progress tracking, built using React, Node.js, and MongoDB.
              </p>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="flex lg:flex-row flex-col-1 justify-center gap-4 p-4 bg-secondary border rounded-lg shadow">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image 
                src="/project03.png"
                alt="Blog img"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Personal Blog Platform</h3>
              <p className="mt-2 text-base leading-relaxed">
                Built a personal blog platform named <span className="font-semibold">DevJourney</span>, where I share articles on web development and programming. The platform supports markdown formatting, social media sharing, and SEO optimization. Developed using Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
          
          {/* Project 4 */}
          <div className="flex lg:flex-row flex-col justify-center gap-4 p-4 bg-secondary border rounded-lg shadow">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image 
                src="/project04.png"
                alt="Ecormmerce img"
                width={200}
                height={200}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">E-Commerce Website</h3>
              <p className="mt-2 text-base leading-relaxed">
                Designed and developed an e-commerce website named <span className="font-semibold">ShopEasy</span>, featuring a user-friendly interface, secure payment integration, and advanced search functionality. Leveraged Shopify's API for product management and order processing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;








