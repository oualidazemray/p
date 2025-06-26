// components/Experience.tsx
"use client";
import React, { useState } from "react";
import { portfolioData } from "@/data";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaAward,
  FaStar,
} from "react-icons/fa";

import type { Variants } from "framer-motion";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const filteredExperience = portfolioData.experience.filter((exp) => {
    if (activeTab === "all") return true;
    if (activeTab === "education")
      return (
        exp.role.toLowerCase().includes("étudiant") ||
        exp.role.toLowerCase().includes("baccalauréat")
      );
    if (activeTab === "work")
      return (
        !exp.role.toLowerCase().includes("étudiant") &&
        !exp.role.toLowerCase().includes("baccalauréat")
      );
    return true;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div
            className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaStar className="text-yellow-400 text-xs sm:text-sm" />
            <span className="text-xs sm:text-sm text-blue-300 font-medium">
              My Professional Journey
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent px-2">
            Experience &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <motion.div
            className="w-20 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>

          <p className="text-slate-300 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Discover my journey through professional experiences and academic
            background
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full p-1 sm:p-2 gap-1 sm:gap-2">
            {[
              { key: "all", label: "All", icon: FaAward },
              { key: "work", label: "Work", icon: FaBriefcase },
              { key: "education", label: "Education", icon: FaGraduationCap },
            ].map(({ key, label, icon: Icon }) => (
              <motion.button
                key={key}
                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
                onClick={() => setActiveTab(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="text-xs sm:text-sm" />
                <span className="hidden xs:inline">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line - Desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-30 hidden lg:block"></div>

          {/* Timeline Line - Mobile */}
          <div className="absolute left-4 sm:left-8 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-30 lg:hidden"></div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              {filteredExperience.map((exp, index) => {
                const isEducation =
                  exp.role.toLowerCase().includes("étudiant") ||
                  exp.role.toLowerCase().includes("baccalauréat");
                const isExpanded = expandedItems.includes(index);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${activeTab}-${index}`}
                    variants={itemVariants}
                    className={`relative flex items-center ${
                      isEven ? "lg:flex-row-reverse" : ""
                    } flex-col lg:flex-row`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Content Card */}
                    <div
                      className={`w-full lg:w-5/12 ml-10 sm:ml-16 lg:ml-0 ${
                        isEven ? "lg:mr-8" : "lg:ml-8"
                      }`}
                    >
                      <motion.div
                        className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
                        whileHover={{
                          y: -4,
                          boxShadow:
                            "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Floating Badge */}
                        <motion.div
                          className={`absolute -top-2 sm:-top-3 ${
                            isEven ? "right-3 sm:right-6" : "left-3 sm:left-6"
                          } bg-gradient-to-r ${
                            isEducation
                              ? "from-emerald-500 to-teal-500"
                              : "from-blue-500 to-cyan-500"
                          } text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs font-semibold shadow-lg`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3, type: "spring" }}
                        >
                          {isEducation ? "Education" : "Experience"}
                        </motion.div>

                        {/* Header */}
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-1 sm:gap-2 mb-2">
                              <FaCalendarAlt className="text-blue-400 text-xs sm:text-sm" />
                              <span className="text-blue-400 font-semibold text-xs sm:text-sm bg-blue-500/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                {exp.period}
                              </span>
                            </div>
                            <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors leading-tight">
                              {exp.role}
                            </h3>
                            <div className="flex items-center gap-1 sm:gap-2 text-slate-400">
                              <FaMapMarkerAlt className="text-xs sm:text-sm flex-shrink-0" />
                              <span className="text-xs sm:text-sm">
                                {exp.company}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="relative">
                          <p
                            className={`text-slate-300 leading-relaxed transition-all duration-300 text-xs sm:text-sm ${
                              isExpanded ? "" : "line-clamp-2"
                            }`}
                          >
                            {exp.description}
                          </p>

                          {exp.description.length > 150 && (
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium mt-2 transition-colors"
                            >
                              {isExpanded ? "Show less" : "Show more"}
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <FaChevronDown className="text-xs" />
                              </motion.div>
                            </button>
                          )}
                        </div>

                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                      </motion.div>
                    </div>

                    {/* Timeline Icon */}
                    <div className="absolute left-4 sm:left-8 lg:left-1/2 lg:-translate-x-1/2 z-10">
                      <motion.div
                        className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full border-2 sm:border-4 flex items-center justify-center shadow-2xl ${
                          isEducation
                            ? "bg-gradient-to-br from-emerald-500 to-teal-500 border-emerald-400/50 shadow-emerald-500/25"
                            : "bg-gradient-to-br from-blue-500 to-cyan-500 border-blue-400/50 shadow-blue-500/25"
                        }`}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.3 },
                        }}
                      >
                        {isEducation ? (
                          <FaGraduationCap className="text-sm sm:text-lg lg:text-2xl text-white" />
                        ) : (
                          <FaBriefcase className="text-sm sm:text-lg lg:text-2xl text-white" />
                        )}
                      </motion.div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="hidden lg:block w-5/12"></div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 sm:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
