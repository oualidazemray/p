"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiMapPin,
  FiCalendar,
  FiGlobe,
  FiAward,
  FiCode,
  FiBookOpen,
} from "react-icons/fi";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateAge = (birthDate: string) => {
    const birth = new Date(birthDate.split("/").reverse().join("-"));
    const today = new Date();
    return today.getFullYear() - birth.getFullYear();
  };

  const stats = [
    {
      icon: FiMapPin,
      label: "Origin",
      value: "Azilal, Morocco",
    },
    {
      icon: FiCalendar,
      label: "Age",
      value: `${calculateAge("03/02/2004")} years`,
    },
    {
      icon: FiGlobe,
      label: "Languages",
      value: "Arabic, French, English, Tamazight",
    },
    {
      icon: FiAward,
      label: "Education",
      value: "ENSM Rabat – 2nd Year Engineering",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-8  text-white overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80  rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
        />
        {/* Floating Code Snippets */}
        {[
          "const aboutMe = { name: 'Oualid', dev: true };",
          "function solveProblems() { return true; }",
          "console.log('Welcome');",
          "export default class Engineer extends Human {}",
        ].map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-gray-500/20"
            style={{
              left: `${15 + index * 25}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2  border border-gray-700 rounded-full px-4 py-1 mb-4">
            <FiCode className="text-teal-400" />
            <span className="text-sm">About Me</span>
          </div>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-bold">
            Get to Know{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">
              Me
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-teal-400 mx-auto mt-2 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="md:w-1/2 flex justify-center relative"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/profile-pic.jpg"
              alt="OUALID AZEMRAY"
              width={600}
              height={600}
              className="object-contain w-full h-full  transition-all duration-500"
            />
          </motion.div>

          {/* Bio & Stats */}
          <div className="flex-1 space-y-8">
            {/* Bio */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center space-x-2">
                <FiBookOpen className="text-indigo-400" />
                <span>My Journey</span>
              </h3>
              <p className="text-gray-300 text-base">
                I’m{" "}
                <span className="text-indigo-400 font-semibold">
                  Oualid Azemray
                </span>
                , a second-year student at the{" "}
                <span className="text-teal-400 font-semibold">
                  National Engineering School of Mines, Rabat
                </span>
                . My journey is driven by curiosity, scientific rigor, and a
                passion for creating impactful technological solutions.
              </p>
              <p className="text-gray-300 text-base">
                I love turning abstract ideas into{" "}
                <span className="text-indigo-400 font-semibold">
                  tangible projects
                </span>
                , leveraging a strong foundation in coding and software
                architecture to build solutions that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  className="border border-gray-700 rounded-lg p-4"
                  role="listitem"
                >
                  <div className="flex items-center space-x-3">
                    <s.icon className="text-teal-400 w-5 h-5" />
                    <div>
                      <p className="text-sm text-gray-400">{s.label}</p>
                      <p className="font-medium">{s.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
