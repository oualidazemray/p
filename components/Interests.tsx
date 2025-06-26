// components/Interests.tsx
"use client";
import React from "react";
import { portfolioData } from "@/data";
import { motion } from "framer-motion";

const Interests = () => {
  return (
    <section id="interests" className="py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Centres{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            d ntérêt
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {portfolioData.interests.map((interest, index) => {
          // CORRECTED: Assign the icon directly from the data
          const Icon = interest.icon;

          // Add a check to prevent rendering if the icon is missing
          if (!Icon) return null;

          return (
            <motion.div
              key={index}
              className="text-center p-4"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="w-24 h-24 bg-slate-800/50 rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20">
                <Icon className="text-5xl text-cyan-400" />
              </div>
              <h3 className="font-bold mb-1 text-lg">{interest.name}</h3>
              <p className="text-slate-400 text-sm">{interest.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Interests;
