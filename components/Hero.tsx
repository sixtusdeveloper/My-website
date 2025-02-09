"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import MagicButton from "@/components/ui/MagicButton";
import Loader from "@/components/ui/Loader";
import { Button } from "@/components/ui/button";
import BlogModal from "@/components/ui/BlogModal";
import { motion } from "framer-motion";
import { backgroundImages } from "@/data";
import AnimatedLaptop from "@/components/ui/AnimatedLaptop";

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(true); // Controls fade-in & fade-out effect
  const [isPaused, setIsPaused] = useState(false);

  // Auto-change background every 10 seconds with fade effect
  useEffect(() => {
    if (isHeroModalOpen || isBlogModalOpen) {
      setIsPaused(true);
      return;
    }

    setIsPaused(false);
    setFade(false); // Start fade-out effect

    const transitionTimeout = setTimeout(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
      setFade(true); // Start fade-in effect
    }, 2000); // Wait 2 seconds for fade effect before changing image

    const interval = setInterval(() => {
      if (!isPaused) {
        setFade(false); // Start fade-out
        setTimeout(() => {
          setBackgroundIndex(
            (prevIndex) => (prevIndex + 1) % backgroundImages.length
          );
          setFade(true); // Start fade-in
        }, 2000);
      }
    }, 6000); // Change background every 10 seconds

    return () => {
      clearTimeout(transitionTimeout);
      clearInterval(interval);
    };
  }, [isHeroModalOpen, isBlogModalOpen, isPaused]);

  const openHeroModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsHeroModalOpen(true);
    }, 2000);
  };

  const closeHeroModal = () => {
    setIsHeroModalOpen(false);
  };

  const handleHeroRedirect = () => {
    window.location.href = "https://www.sixtusdev.net/pages/portfolio";
  };

  const openBlogModal = () => {
    setIsBlogLoading(true);
    setTimeout(() => {
      setIsBlogLoading(false);
      setIsBlogModalOpen(true);
    }, 2000);
  };

  const handleBlogRedirect = () => {
    window.open("https://devjourney-blog-khaki.vercel.app/", "_blank");
    setIsBlogModalOpen(false);
  };

  return (
    <section
      id="portfolio"
      className="relative py-2 lg:px-1 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        opacity: fade ? 1 : 0.95, // Smooth fade-in & fade-out effect
        transition: isPaused ? "none" : "opacity 3s ease-in-out", // Stop transition when paused
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-8 px-4 lg:px-16">
        {/* Left: Text Section */}
        <motion.div
          className="text-white max-w-2xl p-0 lg:py-8 mt-16 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.h3
            className="text-sm py-2 tracking-wide sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 Welcome{" "}
                <span className="font-sans font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </motion.h3>

          {/* Heading */}
          <motion.h1
            className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <strong>
              I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
                Sixtus
              </span>
              , a Passionate{" "}
              <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
                Software Engineer
              </span>{" "}
              Crafting Innovative Solutions
            </strong>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            className="lg:pt-4 pt-2 font-sans leading-6 text-base"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            As a software engineer, I specialize in creating tailored software
            solutions to meet your specific business needs. This includes
            developing applications, managing databases, and ensuring seamless
            integration across various platforms.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="my-6 space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <a onClick={openHeroModal}>
              <Button className="h-12 px-4 py-3 cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white font-sans">
                Visit My Portfolio
              </Button>
            </a>
            <a onClick={openBlogModal}>
              <MagicButton
                title={isBlogLoading ? "Loading..." : "Visit My Blog"}
                otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base font-sans text-center"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Animated Laptop */}
        <motion.div
          className="hidden lg:flex w-full lg:w-1/2 justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <AnimatedLaptop />
        </motion.div>
      </div>

      {/* Loader for Blog Modal */}
      {isBlogLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
        </div>
      )}

      {/* Blog Modal */}
      <BlogModal
        isOpen={isBlogModalOpen}
        onClose={() => setIsBlogModalOpen(false)}
        message="You are about to visit my full blog website. Do you want to continue?"
      >
        <div className="flex justify-center gap-4 p-4 mt-4">
          <button
            onClick={handleBlogRedirect}
            className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full"
          >
            Yes, Visit Blog
          </button>
          <button
            onClick={() => setIsBlogModalOpen(false)}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </BlogModal>

      {isLoading && <Loader />}

      {/* Hero Modal */}
      <HeroModal
        isOpen={isHeroModalOpen}
        onClose={closeHeroModal}
        message="Are you sure you want to leave the site? You will be redirected to my portfolio."
      >
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleHeroRedirect}
            className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full"
          >
            Leave
          </button>
          <button
            onClick={closeHeroModal}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
          >
            Cancel
          </button>
        </div>
      </HeroModal>
    </section>
  );
};

export default Home;

// "use client";

// import React, { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import HeroModal from "@/components/ui/HeroModal";
// import MagicButton from "@/components/ui/MagicButton";
// import Loader from "@/components/ui/Loader";
// import { Button } from "@/components/ui/button";
// import BlogModal from "@/components/ui/BlogModal";
// import { motion } from "framer-motion";
// import { backgroundImages } from "@/data";
// import AnimatedLaptop from "@/components/ui/AnimatedLaptop";

// const Home = () => {
//   const { user, isSignedIn } = useUser();
//   const [isHeroModalOpen, setIsHeroModalOpen] = useState(false);
//   const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isBlogLoading, setIsBlogLoading] = useState(false);
//   const [backgroundIndex, setBackgroundIndex] = useState(0);
//   const [fade, setFade] = useState(true); // Controls fade-in & fade-out effect
//   const [isPaused, setIsPaused] = useState(false);

//   // Auto-change background every 10 seconds with fade effect
//   useEffect(() => {
//     if (isHeroModalOpen || isBlogModalOpen) {
//       setIsPaused(true);
//       return;
//     }

//     setIsPaused(false);
//     setFade(false); // Start fade-out effect

//     const transitionTimeout = setTimeout(() => {
//       setBackgroundIndex(
//         (prevIndex) => (prevIndex + 1) % backgroundImages.length
//       );
//       setFade(true); // Start fade-in effect
//     }, 2000); // Wait 2 seconds for fade effect before changing image

//     const interval = setInterval(() => {
//       if (!isPaused) {
//         setFade(false); // Start fade-out
//         setTimeout(() => {
//           setBackgroundIndex(
//             (prevIndex) => (prevIndex + 1) % backgroundImages.length
//           );
//           setFade(true); // Start fade-in
//         }, 2000);
//       }
//     }, 6000); // Change background every 10 seconds

//     return () => {
//       clearTimeout(transitionTimeout);
//       clearInterval(interval);
//     };
//   }, [isHeroModalOpen, isBlogModalOpen, isPaused]);

//   const openHeroModal = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setIsHeroModalOpen(true);
//     }, 2000);
//   };

//   const closeHeroModal = () => {
//     setIsHeroModalOpen(false);
//   };

//   const handleHeroRedirect = () => {
//     window.location.href = "https://www.sixtusdev.net/pages/portfolio";
//   };

//   const openBlogModal = () => {
//     setIsBlogLoading(true);
//     setTimeout(() => {
//       setIsBlogLoading(false);
//       setIsBlogModalOpen(true);
//     }, 2000);
//   };

//   const handleBlogRedirect = () => {
//     window.open("https://devjourney-blog-khaki.vercel.app/", "_blank");
//     setIsBlogModalOpen(false);
//   };

//   return (
//     <section
//       id="portfolio"
//       className="relative py-2 lg:px-8 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
//         opacity: fade ? 1 : 0.95, // Smooth fade-in & fade-out effect
//         transition: isPaused ? "none" : "opacity 3s ease-in-out", // Stop transition when paused
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       <motion.div
//         className="relative text-white p-4 lg:py-8 mt-16 max-w-3xl lg:max-w-4xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         {/* Greeting */}
//         <motion.h3
//           className="text-sm py-2 tracking-wide sm:text-base"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           {isSignedIn && user ? (
//             <>
//               👋 Hi{" "}
//               <span className="font-sans font-bold">
//                 {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
//               </span>
//             </>
//           ) : (
//             "👋 Hi there!"
//           )}
//         </motion.h3>

//         {/* Heading Animation */}
//         <motion.h1
//           className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <strong>
//             I&apos;m{" "}
//             <span className="bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
//               Sixtus
//             </span>
//             , a Passionate{" "}
//             <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
//               Software Engineer
//             </span>{" "}
//             Crafting Innovative Solutions
//           </strong>
//         </motion.h1>

//         {/* Paragraph Animation */}
//         <motion.p
//           className="lg:pt-4 pt-2 font-sans leading-6 text-base"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           As a software engineer, I specialize in creating tailored software
//           solutions to meet your specific business needs. This includes
//           developing applications, managing databases, and ensuring seamless
//           integration across various platforms. My goal is to deliver efficient
//           and scalable solutions that enhance your operations and drive success.
//         </motion.p>

//         {/* Buttons Animation */}
//         <motion.div
//           className="my-6 space-x-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.1, ease: "easeOut" }}
//         >
//           <a onClick={openHeroModal}>
//             <Button className="h-12 px-4 py-3 cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white font-sans">
//               Visit My Portfolio
//             </Button>
//           </a>

//           <a onClick={openBlogModal}>
//             <MagicButton
//               title={isBlogLoading ? "Loading..." : "Visit My Blog"}
//               otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base font-sans text-center"
//             />
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Loader for Blog Modal */}
//       {isBlogLoading && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
//         </div>
//       )}

//       {/* Blog Modal */}
//       <BlogModal
//         isOpen={isBlogModalOpen}
//         onClose={() => setIsBlogModalOpen(false)}
//         message="You are about to visit my full blog website. Do you want to continue?"
//       >
//         <div className="flex justify-center gap-4 p-4 mt-4">
//           <button
//             onClick={handleBlogRedirect}
//             className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-600 text-white py-2 px-4 rounded-full"
//           >
//             Yes, Visit Blog
//           </button>
//           <button
//             onClick={() => setIsBlogModalOpen(false)}
//             className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
//           >
//             Cancel
//           </button>
//         </div>
//       </BlogModal>

//       {isLoading && <Loader />}

//       {/* Hero Modal */}
//       <HeroModal
//         isOpen={isHeroModalOpen}
//         onClose={closeHeroModal}
//         message="Are you sure you want to leave the site? You will be redirected to my portfolio."
//       >
//         <div className="flex gap-4 mt-4">
//           <button
//             onClick={handleHeroRedirect}
//             className="bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 hover:bg-indigo-800 text-white py-2 px-8 rounded-full"
//           >
//             Leave
//           </button>
//           <button
//             onClick={closeHeroModal}
//             className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-8 rounded-full"
//           >
//             Cancel
//           </button>
//         </div>
//       </HeroModal>
//     </section>
//   );
// };

// export default Home;
