// /components/Home.tsx

'use client';

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import HeroModal from "@/components/ui/HeroModal";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Home = () => {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLeave = () => {
    window.location.href = 'https://www.sixtusfolio.com'; // Redirect to portfolio
  };

  return (
    <section id="portfolio" className="relative pt-6 lg:pt-10 flex items-center justify-center h-screen bg-secondary">
      <div className="relative z-10 p-8 max-w-2xl text-center">
        <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
          {isSignedIn && user ? (
            <>
              👋 Hey <span className="text-purple">{user.firstName}</span>
            </>
          ) : (
            "👋 Hey there!"
          )}
        </h3>
        <h1 className="text-3xl lg:text-4xl leading-relaxed tracking-wider font-bold lg:font-bolder">
          I'm Sixtus, a passionate Software Engineer
        </h1>
        <p className="py-8 tracking-wide leading-6 text-sm">
          Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
          Welcome to my personal space where technology meets creativity.
        </p>

        <div className="mt-8">
          <a onClick={openModal} className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold tracking-wider rounded-full py-3 px-8 text-center">View My Work</a>
        </div>
      </div>
      <HeroModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        message="Are you sure you want to leave the site? You will be redirected to my portfolio."
      >
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleLeave}
            className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full"
          >
            Leave
          </button>
          <button
            onClick={closeModal}
            className="bg-gray-600 hover:bg-gray-800 text-white py-2 px-4 rounded-full"
          >
            Cancel
          </button>
        </div>
      </HeroModal>
    </section>
  );
};

export default Home;










// 'use client';

// import React, { useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import Modal from "@/components/ui/HeroModal";
// import { Button } from "@/components/ui/button";

// const Home = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section id="portfolio" className="relative pt-6 lg:pt-10 flex items-center justify-center h-screen bg-secondary">
//       <div className="relative z-10 p-8 max-w-2xl text-center">
//         <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
//           {isSignedIn && user ? (
//             <>
//               👋 Hey <span className="text-purple">{user.firstName}</span>
//             </>
//           ) : (
//             "👋 Hey there!"
//           )}
//         </h3>
//         <h1 className="text-3xl lg:text-4xl leading-relaxed tracking-wider font-bold lg:font-bolder">
//           I'm Sixtus, a passionate Software Engineer
//         </h1>
//         <p className="py-8 tracking-wide leading-6 text-sm">
//           Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
//           Welcome to my personal space where technology meets creativity.
//         </p>

//         <div className="mt-8">
//           <a onClick={openModal} className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold tracking-wider rounded-full py-3 px-8 text-center">View My Work</a>
//         </div>
//       </div>
//       <Modal 
//         isOpen={isModalOpen}
//         onClose={closeModal}
//         message="Are you sure you want to leave the site? You will be redirected to my portfolio."
//       />
//     </section>
//   );
// };

// export default Home;












// 'use client';

// import React, { useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import Modal from "./ui/modal"; // Import the Modal component

// const Home = () => {
//   const { user, isSignedIn } = useUser();
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleViewMyWorkClick = () => {
//     setIsModalOpen(true); // Open the modal when the button is clicked
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close the modal
//   };

//   const handleLeaveSite = () => {
//     window.location.href = "https://www.sixtusfolio.com"; // Redirect to your portfolio website
//   };

//   return (
//     <section id="portfolio" className="relative pt-6 lg:pt-10 flex items-center justify-center h-screen bg-secondary">
//       <div className="relative z-10 p-8 max-w-2xl text-center">
//         <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
//           {isSignedIn && user ? (
//             <>
//               👋 Hey <span className="text-purple">{user.firstName}</span>
//             </>
//           ) : (
//             "👋 Hey there!"
//           )}
//         </h3>
//         <h1 className="text-3xl lg:text-4xl leading-relaxed tracking-wider font-bold lg:font-bolder">
//           I'm Sixtus, a passionate Software Engineer
//         </h1>
//         <p className="py-8 tracking-wide leading-6 text-sm">
//           Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
//           Welcome to my personal space where technology meets creativity.
//         </p>

//         <div className="mt-8">
//           <button 
//             onClick={handleViewMyWorkClick} 
//             className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold tracking-wider rounded-full py-3 px-8 text-center"
//           >
//             View My Work
//           </button>
//         </div>
//       </div>

//       {/* Modal for confirming navigation */}
//       <Modal
//         isOpen={isModalOpen}
//         onClose={handleCloseModal}
//         message="Are you sure you want to leave this site?"
//       >
//         <div className="flex justify-between mt-4">
//           <button 
//             onClick={handleLeaveSite} 
//             className="bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full py-2 px-4"
//           >
//             Leave
//           </button>
//           <button 
//             onClick={handleCloseModal} 
//             className="bg-gray-600 hover:bg-gray-800 text-white font-semibold rounded-full py-2 px-4"
//           >
//             Cancel
//           </button>
//         </div>
//       </Modal>
//     </section>
//   );
// };

// export default Home;














// 'use client';

// import React from "react";
// import { useUser } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";

// const Home = () => {
//   const { user, isSignedIn } = useUser();

//   return (
//     <section id="portfolio" className="relative pt-6 lg:pt-10 flex items-center justify-center h-screen bg-secondary">
//       <div className="relative z-10 p-8 max-w-2xl text-center">
//         <h3 className="text-[1rem] py-6 font-bold tracking-wider sm:text-[1.2rem]">
//           {isSignedIn && user ? (
//             <>
//               👋 Hey <span className="text-purple">{user.firstName}</span>
//             </>
//           ) : (
//             "👋 Hey there!"
//           )}
//         </h3>
//         <h1 className="text-3xl lg:text-4xl leading-relaxed tracking-wider font-bold lg:font-bolder">
//           I'm Sixtus, a passionate Software Engineer
//         </h1>
//         <p className="py-8 tracking-wide leading-6 text-sm">
//           Crafting elegant solutions with a focus on clean, efficient code and innovative design. 
//           Welcome to my personal space where technology meets creativity.
//         </p>

//         <div className="mt-8">
//           <a href="#portfolio" className="bg-blue-600 hover:bg-blue-800 cursor-pointer text-white text-sm font-semibold tracking-wider rounded-full py-3 px-8 text-center">View My Work</a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Home;
