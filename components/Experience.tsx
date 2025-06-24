// components/Experience.tsx
"use client";
import React from "react";
import { portfolioData } from "@/data";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Mon{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Parcours
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-slate-700 hidden md:block"></div>

        {portfolioData.experience.map((exp, index) => (
          <motion.div
            key={index}
            className={`mb-8 flex justify-between items-center w-full ${
              index % 2 === 0 ? "flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Desktop View */}
            <div className="hidden md:block w-5/12"></div>
            <div className="hidden md:flex justify-center w-1/12">
              <div className="z-10 bg-slate-800 border-2 border-blue-500 rounded-full w-12 h-12 flex items-center justify-center">
                {exp.role.toLowerCase().includes("étudiant") ||
                exp.role.toLowerCase().includes("baccalauréat") ? (
                  <FaGraduationCap className="text-xl text-blue-400" />
                ) : (
                  <FaBriefcase className="text-xl text-blue-400" />
                )}
              </div>
            </div>
            <div className="w-full md:w-5/12 bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <p className="text-blue-400 font-semibold mb-1">{exp.period}</p>
              <h3 className="text-lg font-bold">{exp.role}</h3>
              <p className="text-sm text-slate-400 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-300">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
