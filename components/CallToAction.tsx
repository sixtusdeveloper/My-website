import React from "react";
import Image from "next/image";
import Link from "next/link";
import codingGuyImage from "@/public/coding-guy.png";

const CallToAction = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-start md:text-left mb-4">
            Learn the Best Way by Sharing and Collaborating with Others
          </h2>
          <p className="text-base leading-snug mb-6">
            Sharing your knowledge not only helps others grow but also
            reinforces what you have learned. Engage with the community, write
            about your experiences, and collaborate with fellow learners. Start
            your blogging journey today!
          </p>
          <Link href="/blog">
            <button className="px-6 py-3 text-center font-sans bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-600 rounded-lg text-white">
              Visit My Blog
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={codingGuyImage}
            alt="A young man learning to code while sitting on a field"
            className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
