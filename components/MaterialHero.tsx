import { motion } from "framer-motion";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

const MaterialsHero = () => {
  const { user, isSignedIn } = useUser();

  // Get current hour
  const currentHour = new Date().getHours();
  let greeting = "Good evening";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  }

  return (
    <section
      className="relative py-2 lg:px-0 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px]"
      style={{
        backgroundImage: "url('/herobg-transition2.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left Side - Hero Content */}
        <div className="text-left pt-8 space-y-6 text-white max-w-3xl p-4 md:p-8 lg:py-8 mt-16 lg:text-left">
          {/* Dynamic Greeting */}
          <motion.h3
            className="text-sm tracking-wide sm:text-base"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isSignedIn && user ? (
              <>
                👋 {greeting},{" "}
                <span className="font-sans font-bold">
                  {`${user.firstName || ""} ${user.lastName || ""}`.trim()}
                </span>
              </>
            ) : (
              "👋 Hi there!"
            )}
          </motion.h3>
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Explore and Unlock Free Access To&nbsp;
            <span className="bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
              Programming
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              E-Books
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-200 max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Discover a vast collection of programming resources, curated to help
            you master coding and technology. Enhance your skills with
            high-quality materials at no cost.
          </motion.p>

          <motion.div
            className="flex gap-2 items-center flex-nowrap my-6 space-x-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <a href="#library" className="block">
              <button className="px-6 py-3 text-center font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white shadow-lg hover:bg-purple-700 transition">
                Browse Materials
              </button>
            </a>

            <a href="/">
              <button className="py-3 px-6 font-semibold rounded-md text-white hover:text-white dark:text-white text-sm ring-2 ring-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-blue-500 md:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
                More About Me
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="flex justify-center lg:justify-end mt-10 md:mt-16">
          <Image
            src="/materials-hero-img.png"
            alt="Woman reading a programming book"
            width={600}
            height={500}
            className="rounded-lg shadow-lg object-cover material-hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default MaterialsHero;
