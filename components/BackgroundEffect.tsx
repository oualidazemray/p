"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  "const aboutMe = { name: 'Oualid', dev: true };",
  "function solveProblems() { return true; }",
  "console.log('Bienvenue');",
  "export default class Engineer extends Human {}",
];

// ✅ Fixed variant: ease is now a valid type
const particleVariants = {
  animate: {
    opacity: [0, 1, 0],
    y: [0, -10, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut" as const, // ✅ use correct easing type
    },
  },
};

export default function BackgroundEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono text-slate-500/30 whitespace-nowrap"
          style={{
            left: `${10 + index * 20}%`,
            top: `${20 + index * 15}%`,
          }}
          variants={particleVariants}
          animate="animate"
        >
          {snippet}
        </motion.div>
      ))}

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-4 h-4 border border-blue-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" as const }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-6 h-6 border border-cyan-400/30 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
