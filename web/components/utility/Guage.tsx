import React from "react";
import { motion } from "framer-motion";

interface GaugeProps {
  progress: number; // Value between 0 and 100
}

const Gauge: React.FC<GaugeProps> = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  // Function to interpolate color between red, yellow, and green based on progress
  const interpolateColor = (progress: number): string => {
    // Define the RGB components of the start and end colors
    const startColor = { r: 245, g: 101, b: 101 }; // Red
    const middleColor = { r: 236, g: 201, b: 75 }; // Yellow
    const endColor = { r: 72, g: 187, b: 120 }; // Green

    // Calculate the color ratio based on progress
    const ratio = progress / 100;
    let r, g, b;
    if (ratio < 0.5) {
      // Transition from red to yellow
      r = startColor.r + ratio * (middleColor.r - startColor.r) * 2;
      g = startColor.g + ratio * (middleColor.g - startColor.g) * 2;
      b = startColor.b + ratio * (middleColor.b - startColor.b) * 2;
    } else {
      // Transition from yellow to green
      r = middleColor.r + (ratio - 0.5) * (endColor.r - middleColor.r) * 2;
      g = middleColor.g + (ratio - 0.5) * (endColor.g - middleColor.g) * 2;
      b = middleColor.b + (ratio - 0.5) * (endColor.b - middleColor.b) * 2;
    }

    // Return the interpolated color
    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };

  // Variants for the Framer Motion animation
  const gaugeVariants = {
    hidden: { strokeDashoffset: circumference },
    visible: {
      strokeDashoffset: circumference - (progress / 100) * circumference,
      transition: { duration: 1 },
    },
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg width="120" height="120" className="rotate-[-90deg]">
        {/* Remaining progress circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#393939" // Tailwind CSS color 'gray-900' for the background circle
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          stroke={interpolateColor(progress)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeLinecap="round"
          initial="hidden"
          animate="visible"
          variants={gaugeVariants}
        />
      </svg>
      <span className="absolute text-2xl font-semibold text-white">{`${progress}%`}</span>
    </div>
  );
};

export default Gauge;
