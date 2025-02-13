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

// Unique gradient colors for each progress bar
const gradientColors = [
  ["#ff7e5f", "#feb47b"], // Orange Gradient
  ["#4CAF50", "#00C853"], // Green Gradient
  ["#6a11cb", "#2575fc"], // Blue-Purple Gradient
];

export default function PortfolioProgress() {
  const [progress, setProgress] = useState(categories.map(() => 0));

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
      {categories.map((category, index) => {
        const [startColor, endColor] = gradientColors[index]; // Unique gradient per bar
        return (
          <div key={category.name} className="w-32 h-32 relative">
            {/* Unique Gradient Definition for Each Progress Bar */}
            <svg width={0} height={0}>
              <defs>
                <linearGradient
                  id={`gradient-${index}`}
                  gradientTransform="rotate(90)"
                >
                  <stop offset="0%" stopColor={startColor} />
                  <stop offset="100%" stopColor={endColor} />
                </linearGradient>
              </defs>
            </svg>

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
                  pathColor: `url(#gradient-${index})`, // Unique gradient applied
                  trailColor: "rgba(255, 255, 255, 0.2)",
                  textSize: "16px",
                })}
              />
            </motion.div>
            <p className="text-center text-white mt-2 text-sm">
              {category.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}
