import { testimonials } from "@/data";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";

import React from "react";

const Clients = () => {
  return (
    <div className="py-8 bg-secondary" id="clients">
      <h1 className="font-bold text-center text-[2rem] lg:text-[2.4rem] leading-snug tracking-widerp-8 lg:p-4">
        <strong>
         Kind words from 
         <span className="text-purple-500">Satisfied Clients</span>
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
