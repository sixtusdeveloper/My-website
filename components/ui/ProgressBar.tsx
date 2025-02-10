"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const categories = [
  { name: "Projects Completed", count: 50 },
  { name: "Courses Taken", count: 30 },
  { name: "Clients Served", count: 20 },
];

export default function PortfolioProgress() {
  const [progress, setProgress] = useState(
    categories.map(() => 0) // Initialize progress for each category
  );

  useEffect(() => {
    const intervals = categories.map((category, i) => {
      return setInterval(() => {
        setProgress((prev) => {
          const newProgress = [...prev];
          if (newProgress[i] < category.count) {
            newProgress[i] += 1;
          }
          return newProgress;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-6">
      {categories.map((category, index) => (
        <div key={category.name} className="w-32 h-32">
          <motion.div
            animate={{ scale: [0.8, 1] }}
            transition={{ duration: 0.5 }}
          >
            <CircularProgressbar
              value={progress[index]}
              maxValue={category.count}
              text={`${progress[index]}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#4CAF50",
                trailColor: "rgba(255, 255, 255, 0.2)",
                textSize: "16px",
              })}
            />
          </motion.div>
          <p className="text-center text-white mt-2 text-sm">{category.name}</p>
        </div>
      ))}
    </div>
  );
}
