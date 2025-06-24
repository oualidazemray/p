"use client";
import React from "react";
import { portfolioData } from "@/data";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Me{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Contacter
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            action="https://formspree.io/f/movwpawk" // 🔁 Replace with your actual Formspree endpoint
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Votre Nom"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre Email"
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Votre Message"
              rows={5}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-medium text-white hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Envoyer le Message
            </button>
          </form>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-slate-800/50 p-8 rounded-lg h-full space-y-6 border border-slate-700">
            <div className="flex items-start gap-4">
              <FiMail className="text-2xl text-blue-400 mt-1" />
              <div>
                <h4 className="font-bold">Email</h4>
                <a
                  href="mailto:oualidazemray@gmail.com"
                  className="text-slate-300 hover:text-blue-400 transition"
                >
                  oualidazemray@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiPhone className="text-2xl text-blue-400 mt-1" />
              <div>
                <h4 className="font-bold">Téléphone</h4>
                <p className="text-slate-300">+212 652 224 810</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FiMapPin className="text-2xl text-blue-400 mt-1" />
              <div>
                <h4 className="font-bold">Adresse</h4>
                <p className="text-slate-300">
                  Dr Ibraghene, Beni Hassan, Azilal, Maroc
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
