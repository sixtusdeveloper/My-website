import Image from "next/image";
import Link from "next/link";

const MaterialsHero = () => {
  return (
    // <section className="relative w-full bg-gray-100 dark:bg-black py-20 px-6 lg:px-10 flex items-center justify-center">
    <section
      className="relative py-2 lg:px-0 px-0 md:px-4 md:py-10 flex items-center flex-wrap justify-start md:justify-center w-full min-h-screen lg:min-h-[500px]"
      style={{
        backgroundImage: "url('/herobg-transition2.avif')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Left Side - Hero Content */}
        <div className="text-left pt-8 space-y-6 text-white max-w-3xl p-4 md:p-8  lg:py-8 mt-16 lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-sans font-extrabold text-white">
            Explore and Unlock Free Access To&nbsp;
            <span className="bg-gradient-to-r from-white via-blue-500 to-white bg-clip-text text-transparent">
              Programming
            </span>{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-yellow-600 bg-clip-text text-transparent">
              E-Books
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl">
            Discover a vast collection of programming resources, curated to help
            you master coding and technology. Enhance your skills with
            high-quality materials at no cost.
          </p>
          <button className="px-6 py-3 text-center font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white shadow-lg hover:bg-purple-700 transition">
            <a href="#library" className="">
              Browse Materials
            </a>
          </button>
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
