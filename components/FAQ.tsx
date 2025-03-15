"use client";

import React, { useState, useEffect } from "react";
import { faqs } from "@/data/faq-data"; // Import FAQs data
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const router = useRouter();

  const handleChatDirectly = () => {
    router.push("/pages/portfolio/#get-in-touch");
  };

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleFeedback = (response: string) => {
    setFeedback(response);
    setShowModal(true);
  };

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  // Handles smooth scrolling to the contact section and closes modal
  const handleMsgDirectly = () => {
    setShowModal(false); // Close modal
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300); // Delay to allow modal to close smoothly
  };

  return (
    <div id="faq" className="w-full px-4 pt-10 bg-secondary">
      <div className="px-0 md:px-10 max-w-4xl mx-auto py-10">
        <h1 className="text-left text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text mb-4 md:mb-6">
          Frequently Asked Questions (FAQ)
        </h1>
        <p className="text-base lg:text-base mb-8 sm:text-start text-start">
          Welcome to my FAQ section! Here you can find answers to the most
          common questions about my profession.
        </p>
        <div className="rounded-lg p-2 md:p-6 shadow-sm border bg-secondary dark:bg-gray-900">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:shadow-md transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="text-base text-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                  {faq.question}
                </h2>
                <span className="text-2xl text-blue-500">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <div className="p-4 text-sm leading-6">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="py-4 px-2 text-center mt-2 md:mt-4 lg:mt-4">
          <p className="text-sm">
            Could not find what you're looking for?{" "}
            <Link
              href="/#contact"
              className="text-green-500 hover:underline ml-2"
            >
              Send me a message and I'll respond to your concern or discussion.
            </Link>
          </p>
        </div>

        <div className="py-4 text-center mt-2">
          <h2 className="text-center text-sm md:text-base">
            Did you find these Questions and Answers helpful?
          </h2>
          <div className="flex py-4 justify-center items-center gap-6">
            <button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 hover:ease-in-out hover:scale-105 transition-all duration-300 text-white text-base font-semibold h-12 px-6 py-3 rounded-md"
              onClick={() => handleFeedback("yes")}
            >
              Yes, they were
            </button>
            <button
              className="bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 hover:ease-in-out hover:scale-105 transition-all duration-300 text-white text-base font-semibold h-12 px-6 py-3 rounded-md"
              onClick={() => handleFeedback("no")}
            >
              No, they weren't
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Feedback */}
      {showModal && (
        <div
          className="px-2 fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300"
          onClick={() => setShowModal(false)} // Click outside to close
        >
          <div
            className="relative bg-secondary border p-8 rounded-lg max-w-lg w-full text-center"
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing
          >
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 p-2 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {feedback === "yes" ? (
              <>
                <div className="text-4xl text-green-500 mb-4">👍</div>
                <h3 className="lg:text-lg font-semibold text-base">
                  Glad you find it helpful!
                </h3>
                <p className="text-sm mt-4">
                  If you need any other concern or discussion, kindly reach out
                  to me via the Contact link below or chat me live and direct by
                  clicking the WhatsApp or email link within the contact section
                  of this page or at the bottom of my portfolio page.
                </p>
                <Link
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMsgDirectly();
                  }}
                >
                  <button className="h-11 py-2 px-6 items-center mt-4 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-white rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300">
                    Chat me directly
                  </button>
                </Link>
              </>
            ) : (
              <>
                <div className="text-4xl text-red-500 mb-4">👎</div>
                <h3 className="lg:text-lg text-base font-semibold">
                  Sorry to hear that!
                </h3>
                <p className="text-sm mt-4">
                  If you need further concern or discussion, feel free to reach
                  out to me using the Contact link below or chat me live and
                  direct using the WhatsApp or email link within the contact
                  section of this page or at the bottom of my portfolio page.
                </p>

                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleChatDirectly();
                  }}
                >
                  <button className="h-11 py-2 px-6 items-center mt-4 bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full hover:ease-in-out hover:scale-105 transition-all duration-300">
                    Reach out to me
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQPage;
