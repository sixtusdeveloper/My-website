import React from 'react';
import { FaCode, FaLaptopCode, FaProjectDiagram, FaUsers, FaLightbulb } from 'react-icons/fa';
import Image from 'next/image';
import "./auth-styles.css";
import { SparklesCore } from './ui/sparkles'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth-page relative min-h-screen h-full bg-black dark:bg-black-100 bg-grid dark:bg-grid-white/[0.03] bg-grid-black/[0.2] overflow-y-auto">

        <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full"
                particleColor="#FFFFFF"
            />
        </div>

      <div className="flex flex-col lg:flex-row min-h-screen h-full w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center md:py-6 p-6 sm:p-10 text-white z-10">
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/Logo-icon.png"
              alt="Sixtusdev Logo"
              width={40}
              height={40}
              className="mb-0 entry-logo"
              priority={true}
              style={{ width: 'auto', height: 'auto' }} // Maintain aspect ratio
            />
            <span className="text-white font-medium tracking-wide text-xl">Sixtusdev</span>
          </div>

            <ul className="mt-5 space-y-4 p-8">
                <li className="flex items-center py-2 sm:py-4">
                    {/* <FaLaptopCode className="text-blue-600 text-xl sm:text-2xl" /> */}
                    <Image 
                      src="/auth01.png"
                      alt="Laptop Code icon"
                      width={30}
                      height={30}
                      style={ { width: 'auto', height: 'auto' } }
                      className='overflow-hidden'
                    />
                    <span className="ml-2 sm:ml-5 text-sm sm:text-base text-gray-200">
                    Crafting seamless and responsive user experiences on the web
                    </span>
                </li>
                <li className="flex items-center py-2 sm:py-4">
                    {/* <FaCode className="text-blue-600 text-xl sm:text-2xl" /> */}
                    <Image 
                      src="/auth02.png"
                      alt="Code icon"
                      width={30}
                      height={30}
                      style={ { width: 'auto', height: 'auto' } }
                      className='overflow-hidden'
                    />
                    <span className="ml-2 sm:ml-5 text-sm sm:text-base text-gray-200">
                    Engineering robust and scalable software solutions
                    </span>
                </li>
                <li className="flex items-center py-2 sm:py-4">
                    {/* <FaProjectDiagram className="text-blue-600 text-xl sm:text-2xl" /> */}
                    <Image 
                      src="/auth03.png"
                      alt="Project icon"
                      width={30}
                      height={30}
                      style={ { width: 'auto', height: 'auto' } }
                      className='overflow-hidden'
                    />
                    <span className="ml-2 sm:ml-5 text-sm sm:text-base text-gray-200">
                    Managing full-cycle software projects from inception to delivery
                    </span>
                </li>
                <li className="flex items-center py-2 sm:py-4">
                    {/* <FaUsers className="text-blue-600 text-xl sm:text-2xl" /> */}
                    <Image 
                      src="/auth04.png"
                      alt="Collaboration icon"
                      width={30}
                      height={30}
                      style={ { width: 'auto', height: 'auto' } }
                      className='overflow-hidden'
                    />
                    <span className="ml-2 sm:ml-5 text-sm sm:text-base text-gray-200">
                    Collaborating with teams to deliver impactful digital solutions
                    </span>
                </li>
                <li className="flex items-center py-2 sm:py-4">
                    {/* <FaLightbulb className="text-blue-600 text-xl sm:text-2xl" /> */}
                    <Image 
                      src="/auth05.png"
                      alt="Innovation icon"
                      width={30}
                      height={30}
                      style={ { width: 'auto', height: 'auto' } }
                      className='overflow-hidden'
                    />
                    <span className="ml-2 sm:ml-5 text-sm sm:text-base text-gray-200">
                    Innovating through continuous learning and creative problem-solving
                    </span>
                </li>
            </ul>

        </div>
        <div className="w-full bg-black-100 overflow-y-auto shadow-md flex items-center justify-center md:py-10 lg:py-20 p-6 sm:p-10 lg:w-1/2">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
