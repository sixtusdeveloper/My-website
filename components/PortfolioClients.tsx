import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

import React from "react";

const Clients = () => {
  return (
    <div className="py-8 bg-secondary" id="clients">
      <h1 className="font-extrabold font-sans text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-wider p-8 lg:p-4 px-2">
        <strong>
          Kind words from
          <span className="bg-gradient-to-r from-yellow-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            &nbsp;Satisfied Clients
          </span>
        </strong>
      </h1>
      <div className="flex flex-col items-center mt-8 lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
