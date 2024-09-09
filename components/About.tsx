'use client';

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import MagicButton from "@/components/ui/MagicButton";
import { FaTwitter, FaGithub } from 'react-icons/fa'; // Import icons

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);
  const [isGithubFollowed, setIsGithubFollowed] = useState(false);

  // Handle page refresh or initial load for follow buttons
  useEffect(() => {
    const twitterFollowed = localStorage.getItem('isTwitterFollowed');
    const githubFollowed = localStorage.getItem('isGithubFollowed');
    
    if (twitterFollowed) setIsTwitterFollowed(JSON.parse(twitterFollowed));
    if (githubFollowed) setIsGithubFollowed(JSON.parse(githubFollowed));

    // Reset "Read More" state on page load
    setIsExpanded(false);
  }, []);

  // Toggle expand for "Read More"
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  // Handle Twitter follow button click
  const handleTwitterFollow = () => {
    setIsTwitterFollowed(true);
    localStorage.setItem('isTwitterFollowed', JSON.stringify(true));
  };

  // Handle GitHub follow button click
  const handleGithubFollow = () => {
    setIsGithubFollowed(true);
    localStorage.setItem('isGithubFollowed', JSON.stringify(true));
  };

  return (
    <section id="about" className="p-8 lg:py-10 bg-secondary">
      <div className="max-w-3xl mt-8 lg:mt-2 mx-auto text-center"> 
        <div className="flex justify-center items-center p-2 w-full relative">
          <Image 
            src="/profile-img.png" 
            alt="Profile image"
            width={200}
            height={200}
            className="profile_image relative rounded-full"
          />
        </div>
        <div className="mb-10 p-2">
          <h3 className="text-lg lg:text-xl font-medium tracking-wide">Sixtus Aondoakaa</h3>
          <h4 className="text-base tracking-wide">Software Engineer</h4>

          {/* Social Follow Buttons */}
          <div className="flex justify-center gap-4 mt-4">
            {/* Twitter Follow Button */}
            <button 
              className={`flex items-center space-x-2 py-2 px-4 rounded-md text-white ${isTwitterFollowed ? 'bg-blue-500' : 'bg-blue-400'} transition`}
              onClick={handleTwitterFollow}
              disabled={isTwitterFollowed} // Disable if already followed
            >
              <FaTwitter />
              <span>{isTwitterFollowed ? "Following" : "Follow me on Twitter"}</span>
            </button>

            {/* GitHub Follow Button */}
            <button 
              className={`flex items-center space-x-2 py-2 px-4 rounded-md text-white ${isGithubFollowed ? 'bg-gray-800' : 'bg-gray-600'} transition`}
              onClick={handleGithubFollow}
              disabled={isGithubFollowed} // Disable if already followed
            >
              <FaGithub />
              <span>{isGithubFollowed ? "Following" : "Follow me on GitHub"}</span>
            </button>
          </div>
        </div>

        <h2 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider mb-4">About Me</h2>
        <p className="text-base tracking-wide leading-relaxed mb-4">
          Hi, I’m Sixtus Aondoakaa, a passionate Software Engineer, DevOps Engineer and a tech Educator dedicated to crafting scalable and innovative web solutions. My journey in tech began with a fascination for how technology shapes our world. Over the years, I have navigated the complexities of full-stack development, embracing both front-end and back-end technologies to build robust applications.
        </p>

        {isExpanded && (
          <>
            {/* Expanded content */}
            <p className="text-base tracking-wide leading-relaxed mb-4">
              The path has not always been smooth. The tech industry is dynamic and ever-evolving, and staying ahead requires more than just technical skills—it demands resilience and a commitment to continuous learning.
            </p>
            <p className="text-base tracking-wide leading-relaxed mb-4">
              My journey is marked by a dedication to excellence and an insatiable curiosity. Whether it's developing complex systems or simplifying user interfaces, I approach each project with the same enthusiasm and meticulous attention to detail.
            </p>
          </>
        )}

        <a onClick={handleToggle}>
          <MagicButton
            title={isExpanded ? "Less to read" : "More to read"}
            otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base mt-4 text-center"
          />
        </a>
      </div>
    </section>
  );
};

export default About;











// 'use client';

// import React, { useState, useEffect } from "react";
// import Image from 'next/image';
// import MagicButton from "@/components/ui/MagicButton";
// import { FaTwitter, FaGithub } from 'react-icons/fa'; // Import icons

// const About = () => {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isTwitterFollowed, setIsTwitterFollowed] = useState(false);
//   const [isGithubFollowed, setIsGithubFollowed] = useState(false);

//   // Handle page refresh or initial load for follow buttons
//   useEffect(() => {
//     const twitterFollowed = localStorage.getItem('isTwitterFollowed');
//     const githubFollowed = localStorage.getItem('isGithubFollowed');
    
//     if (twitterFollowed) setIsTwitterFollowed(JSON.parse(twitterFollowed));
//     if (githubFollowed) setIsGithubFollowed(JSON.parse(githubFollowed));

//     // Reset "Read More" state on page load
//     setIsExpanded(false);
//   }, []);

//   // Twitter Follow Component
//   useEffect(() => {
//     if (window.twttr) {
//       window.twttr.widgets.load();
//     } else {
//       // Load the Twitter widget script if not already loaded
//       const script = document.createElement('script');
//       script.src = "https://platform.twitter.com/widgets.js";
//       script.async = true;
//       script.charset = "utf-8";
//       document.body.appendChild(script);
//     }
//   }, []);

//   // Toggle expand for "Read More"
//   const handleToggle = () => {
//     setIsExpanded(prev => !prev);
//   };

//   // Handle Twitter follow button click (Now functional via Twitter widget)
//   const handleTwitterFollow = () => {
//     setIsTwitterFollowed(true);
//     localStorage.setItem('isTwitterFollowed', JSON.stringify(true));
//   };

//   // Handle GitHub follow button click (Now functional via GitHub link)
//   const handleGithubFollow = () => {
//     setIsGithubFollowed(true);
//     localStorage.setItem('isGithubFollowed', JSON.stringify(true));
//   };

//   return (
//     <section id="about" className="p-8 lg:py-10 bg-secondary">
//       <div className="max-w-3xl mt-8 lg:mt-2 mx-auto text-center"> 
//         <div className="flex justify-center items-center p-2 w-full relative">
//           <Image 
//             src="/profile-img.png" 
//             alt="Profile image"
//             width={200}
//             height={200}
//             className="profile_image relative rounded-full"
//           />
//         </div>
//         <div className="mb-10 p-2">
//           <h3 className="text-lg lg:text-xl font-medium tracking-wide">Sixtus Aondoakaa</h3>
//           <h4 className="text-base tracking-wide">Software Engineer</h4>

//           {/* Social Follow Buttons */}
//           <div className="flex md:flex-nowrap flex-wrap items-center justify-center gap-4 mt-4">
//             {/* Twitter Follow Button */}
//             <div className={`flex items-center space-x-2 py-2 px-4 rounded-md ${isTwitterFollowed ? 'bg-blue-500' : 'bg-blue-400'} transition`}>
//               <FaTwitter />
//               <a 
//                 href="https://twitter.com/develites01?ref_src=twsrc%5Etfw"
//                 className="twitter-follow-button"
//                 data-show-count="false"
//                 data-size="large"
//               >
//                 Follow @yourTwitterHandle
//               </a>
//             </div>

//             {/* GitHub Follow Button */}
//             <div className={`flex items-center space-x-2 py-2 px-4 rounded-md ${isGithubFollowed ? 'bg-blue-500 text-white hover:bg-blue-800' : 'bg-transparent border'} transition`}>
//               <FaGithub />
//               <a 
//                 href="https://github.com/sixtusdeveloper"
//                 target="_blank"
//                 className="btn-github-follow"
//                 rel="noopener noreferrer"
//               >
//                 Follow me on GitHub
//               </a>
//             </div>
//           </div>
//         </div>

//         <h2 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider mb-4">About Me</h2>
//         <p className="text-base tracking-wide leading-relaxed mb-4">
//           Hi, I’m Sixtus Aondoakaa, a passionate Software Engineer, DevOps Engineer and a tech Educator dedicated to crafting scalable and innovative web solutions. My journey in tech began with a fascination for how technology shapes our world. Over the years, I have navigated the complexities of full-stack development, embracing both front-end and back-end technologies to build robust applications.
//         </p>

//         {isExpanded && (
//           <>
//             {/* Expanded content */}
//             <p className="text-base tracking-wide leading-relaxed mb-4">
//               The path has not always been smooth. The tech industry is dynamic and ever-evolving, and staying ahead requires more than just technical skills—it demands resilience and a commitment to continuous learning.
//             </p>
//             <p className="text-base tracking-wide leading-relaxed mb-4">
//               My journey is marked by a dedication to excellence and an insatiable curiosity. Whether it's developing complex systems or simplifying user interfaces, I approach each project with the same enthusiasm and meticulous attention to detail.
//             </p>
//           </>
//         )}

//         <a onClick={handleToggle}>
//           <MagicButton
//             title={isExpanded ? "Less to read" : "More to read"}
//             otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base mt-4 text-center"
//           />
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About;
















// 'use client';

// import React, { useState, useEffect } from "react";
// import Image from 'next/image';
// import MagicButton from "@/components/ui/MagicButton";

// const About = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   // Function to handle "Read More" / "That's it from me" button clicks
//   const handleToggle = () => {
//     setIsExpanded(prev => !prev);
//   };

//   // Function to handle page refresh or initial load
//   useEffect(() => {
//     // Reset state on page load to ensure default view
//     setIsExpanded(false);
//   }, []);

//   return (
//     <section id="about" className="p-8 lg:py-10 bg-secondary">
//       <div className="max-w-3xl mt-8 lg:mt-2 mx-auto text-center"> 
//         <div className="flex justify-center items-center p-2 w-full relative">
//           <Image 
//           src="/profile-img.png" 
//           alt="Profile image"
//           width={200}
//           height={200}
//           className="profile_image relative rounded-full"
//           />
//         </div>
//         <div className="mb-10 p-2">
//           <h3 className="text-lg lg:text-xl font-medium tracking-wide">Sixtus Aondoakaa</h3>
//           <h4 className="text-base tracking-wide">Software Engineer</h4>
//         </div>
//         <h2 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider mb-4">About Me</h2>
//         <p className="text-base tracking-wide leading-relaxed mb-4">
//           Hi, I’m Sixtus Aondoakaa, a passionate Software Engineer, DevOps Engineer and a tech Educator dedicated to crafting scalable and innovative web solutions. My journey in tech began with a fascination for how technology shapes our world. Over the years, I have navigated the complexities of full-stack development, embracing both front-end and back-end technologies to build robust applications.
//         </p>
//         {isExpanded && (
//           <>
//             <p className="text-base tracking-wide leading-relaxed mb-4">
//               The path has not always been smooth. The tech industry is dynamic and ever-evolving, and staying ahead requires more than just technical skills—it demands resilience and a commitment to continuous learning. I have faced and overcome numerous challenges, from mastering new frameworks to debugging intricate issues. Each obstacle has been a stepping stone, contributing to my growth as a software engineer.
//             </p>
//             <p className="text-base tracking-wide leading-relaxed mb-4">
//               My journey is marked by a dedication to excellence and an insatiable curiosity. Whether it's developing complex systems or simplifying user interfaces, I approach each project with the same enthusiasm and meticulous attention to detail. I believe that technology should not only solve problems but also create seamless and delightful user experiences.
//             </p>
//             <p className="text-base tracking-wide leading-relaxed mb-4">
//               Today, I am proud of the work I have accomplished and the professional growth I have achieved. I am excited about the future and eager to continue pushing the boundaries of what is possible in the tech world. Thank you for visiting my site, and I look forward to connecting with like-minded individuals and exploring new opportunities.
//             </p>
//           </>
//         )}
//         <a 
//             onClick={handleToggle}  
//           >
//             <MagicButton
//               title= {isExpanded ? "Less to read" : "More to read"}
//               otherClasses="text-[1.4rem] flex justify-center rounded-full items-center text-base mt-4 text-center"
//             />
//           </a>
//       </div>
//     </section>
//   );
// };

// export default About;



