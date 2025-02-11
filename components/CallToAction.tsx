import React from "react";
import Image from "next/image";
import Link from "next/link";
import codingGuyImage from "@/public/coding-guy.png";

const CallToAction = () => {
  return (
    <section id="my-blog" className="py-12 bg-secondary">
      <div className="container mx-auto px-4 lg:px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2  pl-0 lg:pl-2 ">
          <h2 className="font-extrabold font-sans text-start text-[2rem] lg:text-[2.5rem] leading-tight mb-4">
            Learn Through One of the Most Effective Ways by Sharing and
            Collaborating with Others
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
