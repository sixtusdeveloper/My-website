import React from "react";
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";

const ReachOut = () => {
  return (
    <div className="relative lg:pt-10 mx-auto max-w-4xl px-6 lg:px-16 pb-20" id="ReachOut">
      <h1 className="text-white font-bold text-center text-[2.4rem] leading-snug tracking-wider">
        Ready to take your <span className="text-purple">digital presence</span> to the next level?
      </h1>
      <p className='text-white-100 lg:mt-6 my-5 text-center text-md'>
        Reach out to me today and let's discuss how I can help you achieve your goals. I could be more responsive on these platforms 👇
      </p>
      
      <div className="flex justify-center items-center space-x-8 mt-8">
        <a href="mailto:sixtusushrey@gmail.com?subject=Let's%20connect!" className="text-white-100 flex items-center space-x-2 hover:text-purple">
            <Image 
                src="/Gmail.png"
                alt="Mail" 
                width={28} 
                height={28} 
            />
            <span className="text-sm tracking-wide">Email</span>
        </a>
        
        {/* Vertical Divider */}
        <div className="border-l border-gray-700 h-8"></div>
        
        <a href="https://wa.me/+2349022048105" target="_blank" className="text-white-100 flex items-center space-x-2 hover:text-purple">
            <Image 
                src="/whatsapp-icon.png" 
                alt="WhatsApp" 
                width={28} 
                height={28} />
            <span className="text-sm tracking-wide">WhatsApp</span>
        </a>
      </div>
      
      <div className="flex flex-col items-center mt-8 py-10">
          <Image 
            src="/thankyou.png" 
            alt="Appreciation icon" 
            width={35} 
            height={35} />
          <h3 className="text-center text-sm text-white-100 p-4 tacking-wide">Thank you for scrolling this far!</h3>
      </div>
    </div>
  );
};

export default ReachOut;



