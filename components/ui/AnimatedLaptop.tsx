// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// // import { Card, CardContent } from "@/components/ui/Card";
// const codeSnippets: string[] = [
//   "// Fetching data from an API",
//   "const fetchData = async () => {",
//   "  try {",
//   "    const res = await fetch('/api/data');",
//   "    if (!res.ok) throw new Error('Failed to fetch data');",
//   "    const data = await res.json();",
//   "    console.log(data);",
//   "  } catch (error) {",
//   "    console.error('Error fetching data:', error);",
//   "  }",
//   "};",
//   "fetchData();",
//   "",
//   "// Mapping over an array of objects",
//   "const users = [",
//   "  { id: 1, name: 'Alice' },",
//   "  { id: 2, name: 'Bob' },",
//   "];",
//   "users.forEach(user => console.log(user.name));",
//   "",
//   "// Using useState in React",
//   "import { useState } from 'react';",
//   "const Counter = () => {",
//   "  const [count, setCount] = useState(0);",
//   "  return (",
//   "    <button onClick={() => setCount(count + 1)}>Count: {count}</button>",
//   "  );",
//   "};",
//   "",
//   "// Filtering an array",
//   "const numbers = [1, 2, 3, 4, 5];",
//   "const evenNumbers = numbers.filter(num => num % 2 === 0);",
//   "console.log(evenNumbers); // [2, 4]",
// ];

// // const codeSnippets: string[] = [
// //   "const fetchData = async () => {",
// //   "  const res = await fetch('/api/data');",
// //   "  const data = await res.json();",
// //   "  console.log(data);",
// //   "};",
// //   "fetchData();",
// // ];

// export default function AnimatedLaptop(): JSX.Element {
//   const [displayedText, setDisplayedText] = useState<string>("");
//   const [index, setIndex] = useState<number>(0);
//   const [charIndex, setCharIndex] = useState<number>(0);

//   useEffect(() => {
//     if (index < codeSnippets.length) {
//       if (charIndex < codeSnippets[index].length) {
//         setTimeout(() => {
//           setDisplayedText((prev) => prev + codeSnippets[index][charIndex]);
//           setCharIndex(charIndex + 1);
//         }, 100);
//       } else {
//         setTimeout(() => {
//           setDisplayedText((prev) => prev + "\n");
//           setIndex(index + 1);
//           setCharIndex(0);
//         }, 500);
//       }
//     } else {
//       setTimeout(() => {
//         setDisplayedText("");
//         setIndex(0);
//         setCharIndex(0);
//       }, 2000);
//     }
//   }, [charIndex, index]);

//   return (
//     <div className="max-w-xl mx-auto relative bg-transparent">
//       <div>
//         {/* Laptop Image */}
//         <div className="relative">
//           <Image
//             src="/laptop-code.png" // Make sure your image is stored in /public
//             alt="Laptop"
//             width={500}
//             height={300}
//             className="mx-auto"
//           />

//           {/* Animated Code Overlay */}
//           <div className="absolute top-3 left-[3.5rem] w-[16.1rem] h-[9.6rem] bg-black bg-opacity-80 p-4 rounded-lg text-green-400 font-sans text-[8px]">
//             <motion.pre
//               animate={{ opacity: [0, 1] }}
//               className="whitespace-pre-wrap"
//             >
//               {displayedText}
//             </motion.pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const codeSnippets: string[] = [
//   "// Fetching data from an API",
//   "const fetchData = async () => {",
//   "  try {",
//   "    const res = await fetch('/api/data');",
//   "    if (!res.ok) throw new Error('Failed to fetch data');",
//   "    const data = await res.json();",
//   "    console.log(data);",
//   "  } catch (error) {",
//   "    console.error('Error fetching data:', error);",
//   "  }",
//   "};",
//   "fetchData();",
//   "",
//   "// Mapping over an array of objects",
//   "const users = [",
//   "  { id: 1, name: 'Alice' },",
//   "  { id: 2, name: 'Bob' },",
//   "];",
//   "users.forEach(user => console.log(user.name));",
//   "",
//   "// Using useState in React",
//   "import { useState } from 'react';",
//   "const Counter = () => {",
//   "  const [count, setCount] = useState(0);",
//   "  return (",
//   "    <button onClick={() => setCount(count + 1)}>Count: {count}</button>",
//   "  );",
//   "};",
//   "",
//   "// Filtering an array",
//   "const numbers = [1, 2, 3, 4, 5];",
//   "const evenNumbers = numbers.filter(num => num % 2 === 0);",
//   "console.log(evenNumbers); // [2, 4]",
// ];

// export default function AnimatedLaptop(): JSX.Element {
//   const [displayedText, setDisplayedText] = useState<string[]>([]);
//   const [index, setIndex] = useState<number>(0);
//   const [charIndex, setCharIndex] = useState<number>(0);
//   const scrollRef = useRef<HTMLPreElement>(null);

//   useEffect(() => {
//     if (index < codeSnippets.length) {
//       if (charIndex < codeSnippets[index].length) {
//         setTimeout(() => {
//           setDisplayedText((prev) => [...prev, codeSnippets[index][charIndex]]);
//           setCharIndex(charIndex + 1);
//         }, 80);
//       } else {
//         setTimeout(() => {
//           setDisplayedText((prev) => [...prev, "\n"]);
//           setIndex(index + 1);
//           setCharIndex(0);
//         }, 300);
//       }
//     } else {
//       // Scroll to the bottom before restarting
//       setTimeout(() => {
//         scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
//         setDisplayedText([]);
//         setIndex(0);
//         setCharIndex(0);
//       }, 2000);
//     }
//   }, [charIndex, index]);

//   useEffect(() => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollTo({
//         top: scrollRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [displayedText]);

//   return (
//     <div className="max-w-xl mx-auto relative bg-transparent">
//       <div>
//         {/* Laptop Image */}
//         <div className="relative">
//           <Image
//             src="/laptop-code.png" // Ensure the image is stored in /public
//             alt="Laptop"
//             width={500}
//             height={300}
//             className="mx-auto"
//           />

//           {/* Animated Code Overlay */}
//           <div className="absolute top-3 left-[3.5rem] w-[16.1rem] h-[9.6rem] bg-black bg-opacity-80 p-4 rounded-lg text-green-400 font-mono text-[8px] overflow-hidden">
//             <motion.pre
//               ref={scrollRef}
//               className="whitespace-pre-wrap h-full overflow-y-auto scrollbar-hide"
//             >
//               {displayedText.join("")}
//             </motion.pre>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const codeSnippets: string[] = [
  "// Fetching data from an API",
  "const fetchData = async () => {",
  "  try {",
  "    const res = await fetch('/api/data');",
  "    if (!res.ok) throw new Error('Failed to fetch data');",
  "    const data = await res.json();",
  "    console.log(data);",
  "  } catch (error) {",
  "    console.error('Error fetching data:', error);",
  "  }",
  "};",
  "fetchData();",
  "",
  "// Mapping over an array of objects",
  "const users = [",
  "  { id: 1, name: 'Alice' },",
  "  { id: 2, name: 'Bob' },",
  "];",
  "users.forEach(user => console.log(user.name));",
  "",
  "// Using useState in React",
  "import { useState } from 'react';",
  "const Counter = () => {",
  "  const [count, setCount] = useState(0);",
  "  return (",
  "    <button onClick={() => setCount(count + 1)}>Count: {count}</button>",
  "  );",
  "};",
  "",
  "// Filtering an array",
  "const numbers = [1, 2, 3, 4, 5];",
  "const evenNumbers = numbers.filter(num => num % 2 === 0);",
  "console.log(evenNumbers); // [2, 4]",
];

export default function AnimatedLaptop(): JSX.Element {
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const scrollRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    if (index < codeSnippets.length) {
      if (charIndex < codeSnippets[index].length) {
        setTimeout(() => {
          setDisplayedText((prev) => [...prev, codeSnippets[index][charIndex]]);
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        setTimeout(() => {
          setDisplayedText((prev) => [...prev, "\n"]);
          setIndex(index + 1);
          setCharIndex(0);
        }, 250);
      }
    } else {
      setTimeout(() => {
        setIsScrolling(true);
      }, 1000);
    }
  }, [charIndex, index]);

  useEffect(() => {
    if (isScrolling && scrollRef.current) {
      let scrollStep = 0.5; // Super slow, smooth scrolling
      let scrollUp = () => {
        if (scrollRef.current) {
          if (scrollRef.current.scrollTop > 0) {
            scrollRef.current.scrollTop -= scrollStep;
            requestAnimationFrame(scrollUp); // Smoother than setInterval
          } else {
            setIsScrolling(false);
            setTimeout(() => {
              setDisplayedText([]);
              setIndex(0);
              setCharIndex(0);
            }, 1500);
          }
        }
      };
      requestAnimationFrame(scrollUp);
    } else if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [isScrolling, displayedText]);

  return (
    <div className="max-w-xl mx-auto relative bg-transparent">
      <div>
        {/* Laptop Image */}
        <div className="relative">
          <Image
            src="/laptop-code.png"
            alt="Laptop"
            width={500}
            height={300}
            className="mx-auto"
            priority // ✅ This tells Next.js to preload the image
          />

          {/* Animated Code Overlay */}
          <div className="absolute top-3 left-[3.5rem] w-[16.1rem] h-[9.6rem] bg-black bg-opacity-80 p-4 rounded-lg text-green-400 font-mono text-[8px] overflow-hidden">
            <motion.pre
              ref={scrollRef}
              className="whitespace-pre-wrap h-full overflow-y-auto no-scrollbar"
            >
              {displayedText.join("")}
            </motion.pre>
          </div>
        </div>
      </div>

      {/* Fully Hidden Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Hide scrollbar for Chrome, Safari */
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for IE, Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </div>
  );
}
