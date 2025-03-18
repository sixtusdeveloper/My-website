import React, { useState } from "react";
import Image from "next/image";
import Loader from "@/components/ui/Loader";
import ProjectModal from "./ui/HeroModal";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);
  const router = useRouter();

  const openProjectModal = () => {
    setIsLoading(true);
    setIsProjectsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsProjectsLoading(true);
      setIsProjectModalOpen(true);
    }, 2000);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setIsProjectsLoading(false);
  };

  const handleProjectRedirect = () => {
    router.push("/pages/portfolio/#projects");
  };

  return (
    <section id="projects" className="py-10 px-4 lg:px-10 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mb-8 text-center md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
          Some of My Personal Projects
        </h2>
        <div className="grid gap-4 md:gap-6 lg:gap-8 space-y-6 md:space-y-0 md:grid-cols-2">
          {/* Project 1 */}
          <div className="flex relative shadow-sm justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 border rounded-2xl transition-transform transform hover:scale-105">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/open-source-icon.png"
                alt="Open Source img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
                Open Source Contribution
              </h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium text-gray-600 dark:text-gray-200">
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
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-2xl transition-transform transform hover:scale-105">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/app-icon.png"
                alt="Web App img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
                Full-Stack Web Application
              </h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium text-gray-600 dark:text-gray-200">
                Developed a full-stack web application called{" "}
                <span className="font-semibold">TaskMaster</span>, designed to
                streamline task management for teams. The app features real-time
                collaboration, task assignment, and progress tracking, built
                using React, Node.js, and MongoDB.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-2xl transition-transform transform hover:scale-105">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/blog-icon.png"
                alt="Blog img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
                Personal Blog Platform
              </h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium text-gray-600 dark:text-gray-200">
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
          <div className="flex justify-center gap-4 p-4 md:p-6 lg:p-8 bg-secondary dark:bg-gray-900 shadow-sm border rounded-2xl transition-transform transform hover:scale-105">
            <div className="lg:text-start text-center lg:items-start items-center relative">
              <Image
                src="/eccomerce-icon.png"
                alt="Ecormmerce img"
                width={180}
                height={180}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-700 dark:text-gray-100">
                E-Commerce Website
              </h3>
              <p className="py-2 leading-6 mb-0 text-sm font-medium text-gray-600 dark:text-gray-200">
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
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              openProjectModal();
            }}
          >
            <button
              type="button"
              className="ring-1 ring-blue-500 hover:ring-0 text-blue-500 dark:text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:via-pink-500 hover:to-purple-600 hover:text-white font-semibold text-base h-12 px-6 py-3 rounded-md shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300"
            >
              {isProjectsLoading ? "Loading..." : "See All Projects"}
            </button>
          </Link>
        </div>
      </div>

      {isLoading && <Loader />}

      {/* Hero Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        message="Are you sure you want to leave this page? You will be navigated to my portfolio page."
      >
        <div className="flex gap-4 mt-4">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleProjectRedirect();
            }}
          >
            <button className="text-base bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-blue-500 text-white py-2 px-8 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300">
              Leave
            </button>
          </Link>
          <button
            onClick={closeProjectModal}
            className="text-base bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </ProjectModal>
    </section>
  );
};

export default Projects;
