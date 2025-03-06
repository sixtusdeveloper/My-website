"use client";

import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  onClick,
  otherClasses,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  onClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`relative inline-flex h-12 w-40 cursor-pointer overflow-hidden rounded-none p-[3px] focus:outline-none md:w-40 ${otherClasses}`}
      onClick={onClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex text-white h-full w-full cursor-pointer items-center justify-center rounded-none bg-gradient-to-r from-blue-500 via-purple-500 to-green-600 hover:bg-blue-600 hover:ease-in-out hover:scale-105 transition-all duration-300 px-4 text-[0.98rem] font-medium backdrop-blur-3xl gap-2">
        {title}
      </span>
    </button>
  );
};

export default MagicButton;
