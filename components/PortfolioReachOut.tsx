import React from "react";
// import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";

const ReachOut = () => {
  return (
    <div className="bg-secondary relative lg:pt-10 mx-auto w-full px-6 lg:px-16 pb-20" id="ReachOut">
      <div className="max-w-2xl mx-auto relative">
        <h1 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider">
          Ready to take your <span className="text-purple">Digital Presence</span> to the Next Level?
        </h1>
        <p className='lg:mt-6 my-5 text-center text-md'>
          Reach out to me today and let's discuss how I can help you achieve your goals. I could be more responsive on these platforms 👇
        </p>
        
        <div className="flex justify-center items-center space-x-8 mt-8">
          <a href="mailto:sixtusushrey@gmail.com?subject=Let's%20connect!" className="flex items-center cursor-pointer space-x-2 border p-2 rounded-md">
              <Image 
                  src="/Gmail.png"
                  alt="Mail" 
                  width={28} 
                  height={28} 
              />
              <span className="text-base tracking-wide">Email</span>
          </a>
          
          {/* Vertical Divider */}
          <div className="border-l h-8"></div>
          
          <a href="https://wa.me/+2349022048105" target="_blank" className="flex items-center space-x-2 cursor-pointer border p-2 rounded-md">
              <Image 
                  src="/whatsapp-icon.png" 
                  alt="WhatsApp" 
                  width={28} 
                  height={28} />
              <span className="text-base tracking-wide">WhatsApp</span>
          </a>
        </div>
        
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



