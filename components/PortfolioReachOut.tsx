import React from "react";
// import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";

const ReachOut = () => {
  return (
    <div className="bg-secondary relative lg:pt-10 mx-auto w-full px-6 lg:px-16 pb-20" id="ReachOut">
      <div className="max-w-2xl mx-auto relative">
        <h1 className="font-bold text-center text-[2rem] lg:text-[2.5rem] leading-snug tracking-wide">
          <strong>Ready to take your <span className="bg-gradient-to-r from-purple-800 via-blue-500 to-purple-600 bg-clip-text text-transparent">Digital Presence</span> to the Next Level?</strong>
        </h1>
        <p className='lg:mt-6 my-5 text-center text-md'>
          Reach out to me today and let's discuss how I can help you achieve your goals. I could be more responsive on these platforms 👇
        </p>
        
        <div className="flex justify-center items-center space-x-8 mt-8">
          <a href="mailto:contact@sixtusdev.net?subject=Let's%20connect!">
            <button className="relative flex items-center cursor-pointer space-x-2 p-2 rounded-md border-none">
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-800 animate-spin-slow"></span>
              <span className="relative z-10 flex items-center">
                <Image src="/Gmail.png" alt="Mail" width={28} height={28} />
                <span className="text-base tracking-wide">Email me</span>
              </span>
            </button>
          </a>

          {/* Vertical Gradient Divider */}
          <div className="h-8 w-[2px] bg-gradient-to-b from-indigo-600 via-blue-500 to-purple-800"></div>

          <a href="https://wa.me/+2349022048105" target="_blank">
            <button className="relative flex items-center cursor-pointer space-x-2 p-2 rounded-md border-none">
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-indigo-600 via-blue-500 to-purple-800 animate-spin-slow"></span>
              <span className="relative z-10 flex items-center">
                <Image src="/whatsapp-icon.png" alt="WhatsApp" width={28} height={28} />
                <span className="text-base tracking-wide">Chat me</span>
              </span>
            </button>
          </a>
        </div>
  
        {/* Appreciation */}
        <div className="flex flex-col items-center mt-8 py-10">
            <Image 
              src="/thankyou.png" 
              alt="Appreciation icon" 
              width={35} 
              height={35} />
            <h3 className="text-center text-base p-4 tacking-wide">Thank you for scrolling this far!</h3>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;



