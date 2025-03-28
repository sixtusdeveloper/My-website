"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";
import ImageWithFallback from "@/components/ImageWithFallback";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    rating: number;
    quote: string;
    name: string;
    title: string;
    imageUrl: string;
    fallbackImageUrl: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Helper function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="text-yellow-500 text-lg" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-500 text-lg" />
      );
    }
    return stars;
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="shadow-sm w-[85vw] bg-secondary dark:bg-gray-900 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 p-4 lg:p-8 md:w-[45vw]"
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="absolute top-4 right-4 text-3xl">
                <FaQuoteLeft />
              </div>
              <div className="flex justify-between items-center gap-4 mb-4 md:mb-6">
                <span className="flex items-center gap-1 text-yellow-600 text-lg">
                  {renderStars(item.rating)}
                </span>
              </div>
              <span className="relative z-20 text-sm md:text-[15px] text-[14px] leading-[1.6] text-gray-600 dark:text-blue-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex items-center gap-4">
                  {/* Profile photo */}
                  <div className="me-3">
                    <ImageWithFallback
                      src={item.imageUrl}
                      fallbackSrc="/profile.svg"
                      alt="Profile"
                      className="avatar-image"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="text-base">
                    <p className="font-semibold mb-1 text-base text-gray-700 dark:text-blue-50">
                      <a href="#">{item.name}</a>
                    </p>

                    <p className="text-sm text-gray-600 dark:text-blue-100 mb-0">
                      {item.title}
                    </p>
                  </div>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
