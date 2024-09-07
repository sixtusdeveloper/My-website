import React from "react";
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 px-8 bg-secondary">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider mb-8">Kind words from Clients and Collaborators.</h2>
        <div className="grid gap-8 md:grid-cols-3">
            <blockquote className="mb-6">
                <p className="italic text-base leading-relaxed tracking-wide">"Sixtus is a fantastic developer who always delivers on time. His attention to detail and problem-solving skills are top-notch!"</p>
                <div className="flex justify-center gap-4 items-center">
                    <Image 
                        src="/user01.jpg"
                        alt="Testimonial"
                        width={40}
                        height={40}
                        className="rounded-full avatar-img"
                        style={{objectFit: 'cover'}}
                    />
                    <span className=" py-2 flex flex-col justify-start items-center">
                        <span className="mt-2 text-[14px] tracking-wide">Joseph Anderson</span>
                        <span className="text-[14px] tracking-wide">Database Admin</span>
                   </span>
                </div>
            </blockquote>
            <blockquote className="mb-6">
                <p className="italic text-base leading-relaxed tracking-wide">"Working with Sixtus has been an incredible experience. His creativity and ability to bring ideas to life are unparalleled. I highly recommend him for any project."</p>
                <div className="flex justify-center gap-4 items-center">
                    <Image 
                        src="/user02.jpg"
                        alt="Testimonial"
                        width={40}
                        height={40}
                        className="rounded-full avatar-img"
                        style={{objectFit: 'cover'}}
                    />
                    <span className=" py-2 flex flex-col justify-start items-center">
                        <span className="mt-2 text-[14px] tracking-wide">Emily Carter</span>
                        <span className="text-[14px] tracking-wide">Product Manager</span>
                   </span>
                </div>
            </blockquote>
            <blockquote className="mb-6">
                <p className="italic text-base leading-relaxed tracking-wide">"Sixtus has a deep understanding of technology and how to leverage it to solve complex problems. His professionalism and work ethic are truly commendable."</p>
                <div className="flex justify-center gap-4 items-center">
                    <Image 
                        src="/user03.jpg"
                        alt="Testimonial"
                        width={40}
                        height={40}
                        className="rounded-full avatar-img"
                        style={{objectFit: 'cover'}}
                    />
                    <span className=" py-2 flex flex-col justify-start items-center">
                        <span className="mt-2 text-[14px] tracking-wide">Michael Smith</span>
                        <span className="text-[14px] tracking-wide">CTO</span>
                   </span>
                </div>
            </blockquote>
          
        </div>
      </div>
    </section>
  );
};

export default Testimonials;










