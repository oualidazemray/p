"use client";
import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Navigation links
const navLinks = [
  { name: "Accueil", href: "#home" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Parcours", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass effect and container */}
      <div
        className="
        mx-auto px-4
        flex justify-between items-center
        h-16 sm:h-20
        bg-white/10 dark:bg-slate-900/10
        backdrop-blur-lg
        border-b border-slate-200/30 dark:border-slate-700/10

        rounded-b-4xl
        transition-all
      "
      >
        {/* Logo */}
        <Link
          href="#home"
          className="
            text-2xl sm:text-3xl font-extrabold tracking-tight
            text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-500
            drop-shadow-lg select-none
            hover:scale-105 hover:drop-shadow-[0_0_20px_#22d3ee88]
            transition-all duration-300
          "
        >
          {portfolioData.name.split(" ")[0]}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-3 xl:space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`
                relative px-3 py-1.5 rounded-md font-medium text-slate-200
                hover:text-blue-400 transition-all duration-200
                group
              `}
            >
              <span className="relative z-10">{link.name}</span>
              {/* Glass/Neon hover effect */}
              <span
                className={`
                  absolute inset-0 rounded-md
                  opacity-0 group-hover:opacity-100
                  group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-cyan-400/10
                  group-hover:ring-2 group-hover:ring-blue-400/20
                  transition-all duration-200
                  pointer-events-none
                `}
              />
              {/* Glow underline animation */}
              <span className="absolute left-1/2 -bottom-1 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-200 group-hover:w-4/5 group-hover:-translate-x-1/2" />
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            md:hidden inline-flex items-center justify-center
            text-3xl text-blue-300 rounded-lg
            hover:bg-blue-400/20 hover:text-cyan-300
            transition-colors duration-200 p-2
            focus:outline-none focus:ring-2 focus:ring-blue-400/60
          `}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.28 }}
            className="
              md:hidden fixed top-0 left-0 right-0 z-40 pt-20 pb-8 px-4
              bg-gradient-to-b from-blue-950/80 via-slate-900/80 to-slate-900/90
              backdrop-blur-lg shadow-2xl
              rounded-b-3xl
            "
          >
            <nav className="flex flex-col gap-2 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    w-full text-center py-3 rounded-xl text-lg font-semibold
                    text-slate-200 hover:text-cyan-300
                    bg-gradient-to-r from-blue-500/10 to-cyan-400/10
                    hover:bg-gradient-to-l hover:from-blue-400/20 hover:to-cyan-300/10
                    shadow-md shadow-blue-500/5
                    transition-all duration-200
                    active:scale-95
                  "
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
