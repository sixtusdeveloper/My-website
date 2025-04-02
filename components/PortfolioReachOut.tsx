import React from "react";
// import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";

const ReachOut = () => {
  return (
    <div
      className="bg-secondary relative lg:py-14 mx-auto w-full px-6 lg:px-16 py-16"
      id="get-in-touch"
    >
      <div className="max-w-2xl mx-auto relative">
        <h1 className="font-bold text-gray-700 dark:text-blue-100 text-center text-[2rem] lg:text-[2.5rem] leading-tight tracking-wide">
          <strong>
            Ready to take your{" "}
            <span className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Digital Presence
            </span>{" "}
            to the Next Level?
          </strong>
        </h1>
        <p className="lg:mt-6 my-5 text-center text-md text-gray-600 dark:text-blue-100">
          Reach out to me today and let's discuss how I can help you achieve
          your goals. I could be more responsive on these platforms 👇
        </p>

        <div className="flex justify-center items-center space-x-4 lg:space-x-8 mt-8">
          <a href="mailto:contact@sixtusdev.net?subject=Let's%20connect!">
            <button className="relative p-[2px] bg-secondary dark:bg-gray-900 rounded-md ring-1 ring-pink-500 shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2 bg-transparent px-4 py-2">
                <Image src="/Gmail.png" alt="Mail" width={20} height={20} />
                <span className="text-[15px] font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Email me
                </span>
              </div>
            </button>
          </a>

          {/* Vertical Divider with Border Gradient */}
          <div className="h-8 w-[2px] bg-gradient-to-b from-pink-500 via-green-500 to-yellow-500"></div>

          <a href="https://wa.me/+2349022048105" target="_blank">
            <button className="relative p-[2px] bg-secondary dark:bg-gray-900 rounded-md ring-1 ring-pink-500 shadow-sm hover:ease-in-out hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-2 bg-transparent px-2 py-2">
                <Image
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                <span className="text-[15px] font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Chat me
                </span>
              </div>
            </button>
          </a>
        </div>

        {/* Appreciation */}
        <div className="flex flex-col items-center mt-8 py-10">
          <Image
            src="/thankyou.png"
            alt="Appreciation icon"
            width={35}
            height={35}
          />
          <p className="font-medium text-center text-base p-4 text-gray-600 dark:text-blue-100">
            Thank you for scrolling this far!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
