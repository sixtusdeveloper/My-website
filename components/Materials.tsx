// "use client";

// import React, { useState } from "react";
// import { FaTimes, FaExclamationCircle } from "react-icons/fa";
// import { useUser, useClerk } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";

// export default function CallToAction() {
//   const { redirectToSignUp, openSignIn } = useClerk();
//   const { user, isSignedIn } = useUser();
//   const router = useRouter();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showErrorModal, setShowErrorModal] = useState(false);

//   const openModal = () => {
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
//   };

//   const handleLoggedInClick = () => {
//     if (isSignedIn) {
//       router.push("/pages/materials");
//     } else {
//       setShowErrorModal(true);
//     }
//   };

//   const closeErrorModal = () => {
//     setShowErrorModal(false);
//     document.body.style.overflow = "auto";
//   };

//   return (
//     <>
//       <div className="flex flex-col sm:flex-row p-2 md:p-6 border justify-center items-center bg-gradient-to-r from-yellow-800 via-green-800 to-purple-800 shadow-lg">
//         <div className="flex-1 flex flex-col justify-center p-4 order-last sm:order-first">
//           <h2 className="text-3xl font-bold text-white mb-3">
//             Expand Your Programming Knowledge for Free!
//           </h2>
//           <p className="text-gray-300 mb-5">
//             Join our learning community and access a vast collection of{" "}
//             <strong>free programming e-books</strong> designed to help you
//             master coding. Whether you’re a beginner or an advanced developer,
//             there's something here for everyone. Start your learning journey
//             today!
//           </p>

//           <button
//             type="button"
//             onClick={openModal}
//             className="rounded-tl-xl text-base rounded-bl-none px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white w-full rounded-md"
//           >
//             Access Free E-Books
//           </button>
//         </div>
//         <div className="p-4 flex-1 order-first sm:order-last">
//           <img
//             src="/materials.png"
//             alt="Programming Books"
//             className="rounded-3xl"
//             width={500}
//             height={500}
//           />
//         </div>
//       </div>

//       {/* Main Modal */}
//       {isModalOpen && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           onClick={closeModal} // Close modal when clicking outside
//         >
//           <div
//             className="bg-secondary p-4 md:p-8 border rounded-lg shadow-lg w-[90%] max-w-md relative"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           >
//             <button onClick={closeModal} className="absolute top-2 right-2">
//               <FaTimes className="hover:text-red-500" size={20} />
//             </button>

//             <h3 className="text-xl font-semibold mb-4">
//               Sign in to Access Free E-Books
//             </h3>
//             <p className="mb-4">
//               You need to be signed in to explore and download our programming
//               e-books.
//             </p>

//             <div className="flex justify-between">
//               <button
//                 onClick={handleLoggedInClick}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%] text-center"
//               >
//                 I've Logged in
//               </button>

//               <button
//                 onClick={() => router.push("/sign-in")}
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
//               >
//                 Let me log in
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Error Modal */}
//       {showErrorModal && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
//           onClick={closeErrorModal} // Close error modal when clicking outside
//         >
//           <div
//             className="bg-secondary p-4 md:p-8 rounded-lg shadow-lg w-[90%] max-w-md relative"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           >
//             <button
//               onClick={closeErrorModal}
//               className="absolute top-3 right-3"
//             >
//               <FaTimes className="hover:text-red-500" size={20} />
//             </button>

//             <div className="flex flex-col items-center">
//               <FaExclamationCircle className="text-red-500 text-4xl mb-3" />
//               <h3 className="text-xl font-semibold mb-4">
//                 No, You Haven't Logged In!
//               </h3>
//               <p className="mb-4 text-center">
//                 Please sign in to access the free programming books.
//               </p>

//               <button
//                 onClick={() => router.push("/sign-in")}
//                 className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full text-center"
//               >
//                 Log in Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// Enhancing the User Experience with Modals
"use client";

import React, { useState, useEffect } from "react";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";
import { useUser, useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function CallToAction() {
  const { redirectToSignUp, openSignIn } = useClerk();
  const { user, isSignedIn } = useUser();
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loadingState, setLoadingState] = useState<string | null>(null);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
    document.body.style.overflow = "auto";
  };

  // When "Let me log in" is clicked
  const handleLoginClick = () => {
    setLoadingState("Please wait...");
    setTimeout(() => {
      setLoadingState("Checking user existence...");
      setTimeout(() => {
        setLoadingState(null);
        if (isSignedIn) {
          alert(
            `Hey ${user?.firstName} ${user?.lastName}, you're already logged in!`
          );
        } else {
          router.push("/sign-in");
        }
      }, 2000);
    }, 2000);
  };

  // When "I've Logged in" is clicked (Instant Redirect for Signed-in Users)
  const handleLoggedInClick = () => {
    if (isSignedIn) {
      router.push("/pages/materials");
    } else {
      setShowErrorModal(true);
    }
  };

  // const handleLoginClick = () => {
  //   if (isSignedIn) {
  //     setLoadingState("Please wait...");
  //     setTimeout(() => {
  //       setLoadingState("Checking user existence...");
  //       setTimeout(() => {
  //         setLoadingState(null);
  //         alert(
  //           `Hey ${user?.firstName} ${user?.lastName}, you're already logged in!`
  //         );
  //       }, 2000);
  //     }, 2000);
  //   } else {
  //     setLoadingState("Please wait...");
  //     setTimeout(() => {
  //       setLoadingState("Checking user existence...");
  //       setTimeout(() => {
  //         setLoadingState(null);
  //         router.push("/sign-in");
  //       }, 2000);
  //     }, 2000);
  //   }
  // };

  return (
    <>
      <div className="flex flex-col sm:flex-row p-2 md:p-6 border justify-center items-center bg-gradient-to-r from-yellow-800 via-green-800 to-purple-800 shadow-lg">
        <div className="flex-1 flex flex-col justify-center p-4 order-last sm:order-first">
          <h2 className="text-3xl font-bold text-white mb-3">
            Expand Your Programming Knowledge for Free!
          </h2>
          <p className="text-gray-300 mb-5">
            Join our learning community and access a vast collection of{" "}
            <strong>free programming e-books</strong> designed to help you
            master coding. Whether you’re a beginner or an advanced developer,
            there's something here for everyone. Start your learning journey
            today!
          </p>

          <button
            type="button"
            onClick={openModal}
            className="rounded-tl-xl text-base rounded-bl-none px-6 py-3 mx-auto bg-gradient-to-r from-green-600 via-indigo-500 to-purple-700 hover:scale-95 text-white w-full rounded-md"
          >
            Access Free E-Books
          </button>
        </div>
        <div className="p-4 flex-1 order-first sm:order-last">
          <img
            src="/materials.png"
            alt="Programming Books"
            className="rounded-3xl"
            width={500}
            height={500}
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-secondary p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2">
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <h3 className="text-xl font-semibold mb-4">
              Sign in to Access Free E-Books
            </h3>
            <p className="mb-4">
              You need to be signed in to explore and download our programming
              e-books.
            </p>
            {loadingState ? (
              <div className="flex flex-col items-center">
                <CircularProgress />
                <p className="mt-2 text-sm font-semibold">{loadingState}</p>
              </div>
            ) : (
              <div className="flex justify-between">
                <button
                  onClick={handleLoginClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-[48%]"
                >
                  Let me log in
                </button>
                <button
                  onClick={() => router.push("/sign-in")}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md w-[48%]"
                >
                  I've Logged in
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showErrorModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeErrorModal}
        >
          <div
            className="bg-secondary p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeErrorModal}
              className="absolute top-2 right-2"
            >
              <FaTimes className="hover:text-red-500" size={20} />
            </button>
            <div className="flex flex-col items-center">
              <FaExclamationCircle className="text-red-500 text-4xl mb-3" />
              <h3 className="text-xl font-semibold mb-4">
                No, You Haven't Logged In!
              </h3>
              <p className="mb-4 text-center">
                Please sign in to access the free programming books.
              </p>
              <button
                onClick={() => router.push("/sign-in")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full"
              >
                Log in Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
