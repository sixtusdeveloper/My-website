"use client";

import { Button } from "@/components/ui/button";
import MagicButton from "@/components/ui/MagicButton";
import { GoArrowRight } from "react-icons/go";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import HireMeModal from "@/components/ui/HireMeModal";
import ReadMoreModal from "@/components/ui/ReadMoreModal";
import Image from "next/image";
import { cvImages, backgroundImages } from "@/data";
import Loader from "@/components/ui/Loader";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isReadMoreModalOpen, setReadMoreModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReadMoreLoading, setIsReadMoreLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [fade, setFade] = useState(true); // Controls fade-in & fade-out effect
  const [isPaused, setIsPaused] = useState(false);

  const totalPages = cvImages.length;
  const currentPageNumber = currentPage + 1;

  // Auto-change background every 10 seconds with fade effect
  useEffect(() => {
    if (isModalOpen || isReadMoreModalOpen) {
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
    }, 10000); // Change background every 10 seconds

    return () => {
      clearTimeout(transitionTimeout);
      clearInterval(interval);
    };
  }, [isModalOpen, isReadMoreModalOpen, isPaused]);

  const handleHireMeClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModalOpen(true);
    }, 2000);
  };

  const handleReadMoreClick = () => {
    setIsReadMoreLoading(true);
    setTimeout(() => {
      setIsReadMoreLoading(false);
      setReadMoreModalOpen(true);
    }, 2000);
  };

  const handleModalToggle = () => setModalOpen(!isModalOpen);
  const handleReadMoreModalToggle = () =>
    setReadMoreModalOpen(!isReadMoreModalOpen);

  return (
    <section
      id="hero"
      className="relative py-2 lg:px-10 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
        opacity: fade ? 1 : 0.3, // Smooth fade-in & fade-out effect
        transition: isPaused ? "none" : "opacity 3s ease-in-out", // Stop transition when paused
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <motion.div
        className="text-white relative p-4 lg:py-8 mt-16 max-w-3xl lg:max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h3
          className="text-sm tracking-wider sm:text-base md:mt-8"
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

        <motion.div
          className="hidden sm:mt-4 sm:mb-2 sm:flex sm:justify-start"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="relative rounded-full px-3 py-1 text-sm leading-tight font-semibold hover:text-indigo-600 border border-gray-700 bg-gradient-to-r from-yellow-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
            Engineering excellence in every line of code.{" "}
            <a
              href="https://github.com/sixtusdeveloper/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold font-sans text-purple cursor-pointer"
            >
              <span aria-hidden="true" className="absolute inset-0" />
              Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </motion.div>

        <motion.h1
          className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <strong>
            Explore{" "}
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              Innovation and Creativity
            </span>{" "}
            in My Portfolio
          </strong>
        </motion.h1>

        <motion.p
          className="py-4 leading-6 font-sans text-base"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
          passion for crafting efficient and scalable solutions. Here, you'll
          find a showcase of my work, ranging from innovative web applications
          to complex backend systems. Whether you're a potential employer,
          collaborator, or just curious about my work, I invite you to explore
          my projects and see how I turn ideas into reality. Let's create
          something amazing together!
        </motion.p>

        <motion.div
          className="flex flex-row justify-start items-center my-3 space-x-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          <a onClick={handleHireMeClick}>
            <Button className="h-12 px-8 py-3 tracking-wide cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
              Hire Me
            </Button>
          </a>
          <a onClick={handleReadMoreClick}>
            <MagicButton
              title="Read More"
              icon={<GoArrowRight className="text-lg" />}
              otherClasses="text-[1.4rem] flex justify-center items-center text-center"
            />
          </a>
        </motion.div>
      </motion.div>

      {isLoading && <Loader />}
      {isReadMoreLoading && <Loader />}

      <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
        <div className="p-4 bg-secondary max-h-[80vh] overflow-auto no-scrollbar">
          <h2 className="text-2xl font-bold tracking-wide text-center">
            Hire Me Let's Work Together
          </h2>
          <p className="text-center text-base px-6 py-2 leading-6">
            Thank you for considering me for your project! I'm eager to work
            with you and bring your ideas to life. Below you can preview my CV:
          </p>
          <div className="flex justify-center my-2">
            <Image
              src={cvImages[currentPage]}
              alt="CV Preview"
              width={500}
              height={600}
              className="rounded-lg shadow-md object-cover"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <span className="items-center">{`Page ${currentPageNumber} of ${totalPages}`}</span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(prev + 1, cvImages.length - 1)
                )
              }
              className={`px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 ${
                currentPage === cvImages.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={currentPage === cvImages.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </HireMeModal>

      <ReadMoreModal
        isOpen={isReadMoreModalOpen}
        onClose={handleReadMoreModalToggle}
      >
        <div className="p-4 max-h-[80vh] overflow-auto no-scrollbar">
          <Image
            src="/profile-img.png"
            alt="Sixtus Aondoakaa"
            width={200}
            height={200}
            className="rounded-full border-2 mx-auto profile_img"
            style={{ width: "auto", height: "auto" }}
          />
          <h2 className="text-lg lg:text-xl mb-1 font-semibold tracking-wide text-center">
            Sixtus Aondoakaa
          </h2>
          <p className="text-base font-medium text-center">Software Engineer</p>
        </div>
      </ReadMoreModal>
    </section>
  );
};

export default Hero;

// "use client";

// import { Button } from "@/components/ui/button";
// import MagicButton from "@/components/ui/MagicButton";
// import { GoArrowRight } from "react-icons/go";
// import { useUser } from "@clerk/nextjs";
// import { useState, useEffect } from "react";
// import HireMeModal from "@/components/ui/HireMeModal";
// import ReadMoreModal from "@/components/ui/ReadMoreModal";
// import Image from "next/image";
// import { cvImages, backgroundImages } from "@/data";
// import Loader from "@/components/ui/Loader";
// import { motion, AnimatePresence } from "framer-motion";

// const Hero = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [isReadMoreModalOpen, setReadMoreModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isReadMoreLoading, setIsReadMoreLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [backgroundIndex, setBackgroundIndex] = useState(0);
//   const [fade, setFade] = useState(true); // Controls fade-in & fade-out effect

//   // Auto-change background image every 7 seconds with smooth transition
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFade(false); // Start fade-out effect
//       setTimeout(() => {
//         setBackgroundIndex(
//           (prevIndex) => (prevIndex + 1) % backgroundImages.length
//         );
//         setFade(true); // Start fade-in effect
//       }, 1000); // Wait for fade-out before changing image
//     }, 7000); // Change every 7 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const totalPages = cvImages.length;
//   const currentPageNumber = currentPage + 1;

//   const handleHireMeClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setModalOpen(true);
//     }, 2000);
//   };

//   const handleReadMoreClick = () => {
//     setIsReadMoreLoading(true);
//     setTimeout(() => {
//       setIsReadMoreLoading(false);
//       setReadMoreModalOpen(true);
//     }, 2000);
//   };

//   const handleModalToggle = () => setModalOpen(!isModalOpen);
//   const handleReadMoreModalToggle = () =>
//     setReadMoreModalOpen(!isReadMoreModalOpen);

//   return (
//     <section
//       id="hero"
//       className="relative py-2 lg:px-10 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px] bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: `url(${backgroundImages[backgroundIndex]})`,
//         opacity: fade ? 1 : 0.3, // Smooth fade-in & fade-out effect
//         transition: "opacity 2s ease-in-out", // Makes transition slow & seamless
//       }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-70"></div>

//       <motion.div
//         className="text-white relative p-4 lg:py-8 mt-16 max-w-3xl lg:max-w-4xl"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         <motion.h3
//           className="text-sm tracking-wider sm:text-base md:mt-8"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           {isSignedIn && user ? (
//             <>
//               👋 Welcome{" "}
//               <span className="font-sans font-bold">
//                 {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
//               </span>
//             </>
//           ) : (
//             "👋 Hi there!"
//           )}
//         </motion.h3>

//         <motion.div
//           className="hidden sm:mt-4 sm:mb-2 sm:flex sm:justify-start"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <div className="relative rounded-full px-3 py-1 text-sm leading-tight font-semibold hover:text-indigo-600 border border-gray-700 bg-gradient-to-r from-yellow-600 via-blue-600 to-pink-600 bg-clip-text text-transparent">
//             Engineering excellence in every line of code.{" "}
//             <a
//               href="https://github.com/sixtusdeveloper/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="font-semibold font-sans text-purple cursor-pointer"
//             >
//               <span aria-hidden="true" className="absolute inset-0" />
//               Check my codebase&nbsp;<span aria-hidden="true">&rarr;</span>
//             </a>
//           </div>
//         </motion.div>

//         <motion.h1
//           className="text-[2rem] leading-tight lg:text-[3rem] font-extrabold font-sans"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, ease: "easeOut" }}
//         >
//           <strong>
//             Explore{" "}
//             <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
//               Innovation and Creativity
//             </span>{" "}
//             in My Portfolio
//           </strong>
//         </motion.h1>

//         <motion.p
//           className="py-4 leading-6 font-sans text-base"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           Hello, I'm Sixtus Aondoakaa, a dedicated software engineer with a
//           passion for crafting efficient and scalable solutions. Here, you'll
//           find a showcase of my work, ranging from innovative web applications
//           to complex backend systems. Whether you're a potential employer,
//           collaborator, or just curious about my work, I invite you to explore
//           my projects and see how I turn ideas into reality. Let's create
//           something amazing together!
//         </motion.p>

//         <motion.div
//           className="flex flex-row justify-start items-center my-3 space-x-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.1, ease: "easeOut" }}
//         >
//           <a onClick={handleHireMeClick}>
//             <Button className="h-12 px-8 py-3 tracking-wide cursor-pointer text-base rounded-lg hover:bg-indigo-800 bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 text-white">
//               Hire Me
//             </Button>
//           </a>
//           <a onClick={handleReadMoreClick}>
//             <MagicButton
//               title="Read More"
//               icon={<GoArrowRight className="text-lg" />}
//               otherClasses="text-[1.4rem] flex justify-center items-center text-center"
//             />
//           </a>
//         </motion.div>
//       </motion.div>

//       {isLoading && <Loader />}
//       {isReadMoreLoading && <Loader />}

//       <HireMeModal isOpen={isModalOpen} onClose={handleModalToggle}>
//         <div className="p-4 bg-secondary max-h-[80vh] overflow-auto no-scrollbar">
//           <h2 className="text-2xl font-bold tracking-wide text-center">
//             Hire Me Let's Work Together
//           </h2>
//           <p className="text-center text-base px-6 py-2 leading-6">
//             Thank you for considering me for your project! I'm eager to work
//             with you and bring your ideas to life. Below you can preview my CV:
//           </p>
//           <div className="flex justify-center my-2">
//             <Image
//               src={cvImages[currentPage]}
//               alt="CV Preview"
//               width={500}
//               height={600}
//               className="rounded-lg shadow-md object-cover"
//               style={{ width: "auto", height: "auto" }}
//             />
//           </div>
//           <div className="flex items-center justify-center space-x-4 mt-4">
//             <button
//               onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
//               className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
//               disabled={currentPage === 0}
//             >
//               Prev
//             </button>
//             <span className="items-center">{`Page ${currentPageNumber} of ${totalPages}`}</span>
//             <button
//               onClick={() =>
//                 setCurrentPage((prev) =>
//                   Math.min(prev + 1, cvImages.length - 1)
//                 )
//               }
//               className={`px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 ${
//                 currentPage === cvImages.length - 1
//                   ? "opacity-50 cursor-not-allowed"
//                   : ""
//               }`}
//               disabled={currentPage === cvImages.length - 1}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </HireMeModal>

//       <ReadMoreModal
//         isOpen={isReadMoreModalOpen}
//         onClose={handleReadMoreModalToggle}
//       >
//         <div className="p-4 max-h-[80vh] overflow-auto no-scrollbar">
//           <Image
//             src="/profile-img.png"
//             alt="Sixtus Aondoakaa"
//             width={200}
//             height={200}
//             className="rounded-full border-2 mx-auto profile_img"
//             style={{ width: "auto", height: "auto" }}
//           />
//           <h2 className="text-lg lg:text-xl mb-1 font-semibold tracking-wide text-center">
//             Sixtus Aondoakaa
//           </h2>
//           <p className="text-base font-medium text-center">Software Engineer</p>
//         </div>
//       </ReadMoreModal>
//     </section>
//   );
// };

// export default Hero;
