"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// import { Card, CardContent } from "@/components/ui/Card";

const codeSnippets: string[] = [
  "const fetchData = async () => {",
  "  const res = await fetch('/api/data');",
  "  const data = await res.json();",
  "  console.log(data);",
  "};",
  "fetchData();",
];

export default function AnimatedLaptop(): JSX.Element {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (index < codeSnippets.length) {
      if (charIndex < codeSnippets[index].length) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + codeSnippets[index][charIndex]);
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setIndex(index + 1);
          setCharIndex(0);
        }, 500);
      }
    } else {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
        setCharIndex(0);
      }, 2000);
    }
  }, [charIndex, index]);

  return (
    <div className="max-w-xl mx-auto relative bg-transparent">
      <div>
        {/* Laptop Image */}
        <div className="relative">
          <Image
            src="/laptop-code.png" // Make sure your image is stored in /public
            alt="Laptop"
            width={500}
            height={300}
            className="mx-auto"
          />

          {/* Animated Code Overlay */}
          <div className="absolute top-2 left-[4.3rem] w-[19rem] h-[11.8rem] bg-black bg-opacity-80 p-4 rounded-lg text-green-400 font-mono text-xs">
            <motion.pre
              animate={{ opacity: [0, 1] }}
              className="whitespace-pre-wrap"
            >
              {displayedText}
            </motion.pre>
          </div>
        </div>
      </div>
    </div>
  );
}
