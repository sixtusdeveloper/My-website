import React from "react";
// import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";

const ReachOut = () => {
  return (
    <div
      className="bg-secondary relative lg:pt-10 mx-auto w-full px-6 lg:px-16 pb-20"
      id="ReachOut"
    >
      <div className="max-w-2xl mx-auto relative">
        <h1 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide">
          <strong>
            Ready to take your{" "}
            <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Presence
            </span>{" "}
            to the Next Level?
          </strong>
        </h1>
        <p className="lg:mt-6 my-5 text-center text-md">
          Reach out to me today and let's discuss how I can help you achieve
          your goals. I could be more responsive on these platforms 👇
        </p>

        <div className="flex justify-center items-center space-x-4 lg:space-x-8 mt-8">
          <a href="mailto:contact@sixtusdev.net?subject=Let's%20connect!">
            <button className="relative p-[2px] rounded-md bg-gradient-to-r from-purple-800 via-blue-500 to-green-600">
              <div className="flex items-center space-x-2 bg-transparent rounded-lg px-4 py-2">
                <Image src="/Gmail.png" alt="Mail" width={20} height={20} />
                <span className="text-base text-white font-bold">Email me</span>
              </div>
            </button>
          </a>

          {/* Vertical Divider with Border Gradient */}
          <div className="h-8 w-[2px] bg-gradient-to-b from-blue-500 via-green-500 to-purple-800"></div>

          <a href="https://wa.me/+2349022048105" target="_blank">
            <button className="relative p-[2px] rounded-lg bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-800">
              <div className="flex items-center space-x-2 bg-transparent rounded-md px-2 py-2">
                <Image
                  src="/whatsapp-icon.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                />
                <span className="text-base text-white font-bold">Chat me</span>
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
          <h3 className="text-center text-base p-4 tacking-wide">
            Thank you for scrolling this far!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
