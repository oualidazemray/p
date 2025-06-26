// components/Hero.tsx
"use client";
import React, { useEffect, useState } from "react";
import { portfolioData } from "@/data";
import { TypeAnimation } from "react-type-animation";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMapPin,
  FiCode,
  FiStar,
  FiZap,
} from "react-icons/fi";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Floating particles animation
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center pt-20 relative overflow-hidden"
    >
      {/* Main Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Status Badge */}
        <motion.div
          className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-slate-300">
            Disponible pour opportunités
          </span>
        </motion.div>

        {/* Name with enhanced styling */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="relative">
            {portfolioData.name.split(" ")[0]}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-lg blur-lg"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-pulse">
            {portfolioData.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Enhanced Type Animation */}
        <motion.div
          className="text-xl md:text-3xl text-slate-300 mb-8 h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FiCode className="mr-3 text-blue-400" />
          <TypeAnimation
            sequence={[
              "Développeur Full-Stack",
              2000,
              "Ingénieur Logiciel",
              2000,
              "Passionné de Technologie",
              2000,
              "Créateur d'Innovations",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent"
          />
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="flex justify-center space-x-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">2+</div>
            <div className="text-xs text-slate-400">Années d études</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">10+</div>
            <div className="text-xs text-slate-400">Projets réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">∞</div>
            <div className="text-xs text-slate-400">Passion</div>
          </div>
        </motion.div>

        {/* Location with enhanced styling */}
        <motion.div
          className="flex items-center justify-center space-x-2 mb-10 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiMapPin className="text-cyan-400" />
          </motion.div>
          <span className="font-medium">{portfolioData.location}</span>
          <motion.div
            className="w-1 h-1 bg-cyan-400 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Link
            href="#contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-medium text-white overflow-hidden transition-all duration-300 transform hover:scale-105"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
            />
            <span className="relative flex items-center space-x-2">
              <FiZap />
              <span>Contactez-moi</span>
            </span>
          </Link>

          <a
            href="/path-to-your-cv.pdf"
            download
            className="group px-8 py-4 border border-blue-400/50 rounded-full font-medium text-blue-400 hover:bg-blue-900/30 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <FiStar />
              </motion.div>
              <span>Télécharger CV</span>
            </span>
          </a>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 text-2xl text-slate-400 hover:text-blue-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="absolute inset-0 bg-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            <FiLinkedin className="relative" />
          </motion.a>

          <motion.a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 text-2xl text-slate-400 hover:text-cyan-400 transition-colors duration-300"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div className="absolute inset-0 bg-cyan-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
            <FiGithub className="relative" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-slate-400/50 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
