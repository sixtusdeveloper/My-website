import React from "react";
import Image from "next/image";
import Link from "next/link";
import codingGuyImage from "@/public/coding-guy.png";

const CallToAction = () => {
  return (
    <section id="my-blog" className="py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="text-left w-full md:w-1/2  pl-0 lg:pl-2 ">
          <h2 className="mb-4 font-bold text-left text-[1.9rem] lg:text-[2.5rem] leading-tight tracking-wide">
            <strong>
              Learn Through Some of the Most{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Effective Ways{" "}
              </span>
              by Sharing and{" "}
              <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Collaborating with Others
              </span>
            </strong>
          </h2>
          <p className="text-base leading-snug mb-6">
            Sharing your knowledge not only helps others grow but also
            reinforces what you have learned. Engage with the community, write
            about your experiences, and collaborate with fellow learners. Start
            your blogging journey today!
          </p>
          <Link
            href="https://devjourney-blog-khaki.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="h-12 px-6 py-3 rounded-md bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:bg-yellow-600 text-white font-semibold text-sm md:text-base hover:ease-in-out hover:scale-105 transition-all duration-300">
              Visit My Blog
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src={codingGuyImage}
            width={600}
            height={400}
            alt="A young man learning to code while sitting on a field"
            className="call-to-action-img rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
