import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/components/ui/Loader";
import ProjectModal from "./ui/HeroModal";

const Projects = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openProjectModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsProjectModalOpen(true);
    }, 2000);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
  };

  const handleProjectRedirect = () => {
    window.location.href = "https://www.sixtusdev.net/pages/portfolio";
  };

  return (
    <section id="projects" className="py-10 px-4 lg:px-10 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mb-8 text-center md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Personal Blog Platform
        </h2>
        <div className="grid gap-4 md:gap-6 lg:gap-8 space-y-6 md:space-y-0 md:grid-cols-2">
          {/* Project 1 */}
          <div className="flex relative shadow-sm justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 border rounded-lg">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/open-source-icon.png"
                alt="Open Source img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Open Source Contribution</h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium">
                Actively contributed to the{" "}
                <span className="font-semibold">OptiFrame project</span>, an
                open-source initiative, by improving the codebase, refining the
                UI/UX design, and significantly enhancing the project's
                performance. My contributions helped in reducing load times by
                20% and increasing user engagement.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-lg">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/app-icon.png"
                alt="Web App img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Full-Stack Web Application</h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium">
                Developed a full-stack web application called{" "}
                <span className="font-semibold">TaskMaster</span>, designed to
                streamline task management for teams. The app features real-time
                collaboration, task assignment, and progress tracking, built
                using React, Node.js, and MongoDB.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-lg">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/blog-icon.png"
                alt="Blog img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">Personal Blog Platform</h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium">
                Built a personal blog platform named{" "}
                <span className="font-semibold">DevJourney</span>, where I share
                articles on web development and programming. The platform
                supports markdown formatting, social media sharing, and SEO
                optimization. Developed using Next.js and Tailwind CSS.
              </p>
              <a
                href="https://devjourney-blog-khaki.vercel.app/"
                className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text hover:text-yellow-500 hover:no-underline"
                target="_blank"
              >
                See it for yourself &#8594;
              </a>
            </div>
          </div>

          {/* Project 4 */}
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-lg">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/eccomerce-icon.png"
                alt="Ecormmerce img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold">E-Commerce Website</h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium">
                Designed and developed an e-commerce website named{" "}
                <span className="font-semibold">ShopEasy</span>, featuring a
                user-friendly interface, secure payment integration, and
                advanced search functionality. Leveraged Shopify's API for
                product management and order processing.
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <button
            type="button"
            onClick={openProjectModal}
            className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-base h-12 px-6 py-3 rounded-none shadow-lg hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            See All Projects
          </button>
        </div>
      </div>

      {isLoading && <Loader />}

      {/* Hero Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        message="Are you sure you want to leave the site? You will be redirected to my portfolio."
      >
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleProjectRedirect}
            className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full"
          >
            Leave
          </button>
          <button
            onClick={closeProjectModal}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </ProjectModal>
    </section>
  );
};

export default Projects;
