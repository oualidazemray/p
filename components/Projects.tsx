"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiImage,
  FiX,
  FiDatabase,
  FiCode,
} from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tags: { name: string; icon?: React.ComponentType }[];
  githubLink: string;
  liveLink: string;
  images: { url: string; caption?: string }[];
}

const portfolioData = {
  projects: [
    {
      title: "Bellavista Web",
      description:
        "Application web de gestion hôtelière pour les administrateurs, agents de réception et clients, avec tableau de bord personnalisé, réservations en ligne et gestion complète des chambres.",
      tags: [
        { name: "Next.js", icon: FiCode },
        { name: "Tailwind CSS", icon: FiCode },
        { name: "Prisma", icon: FiCode },
        { name: "PostgreSQL", icon: FiDatabase },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [
        {
          url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1974",
          caption: "Tableau de bord de gestion des réservations",
        },
      ],
    },
    {
      title: "Bellavista Mobile",
      description:
        "Application mobile multiplateforme pour les clients de l'hôtel, offrant la réservation, le suivi des séjours et la gestion de profil avec une interface intuitive.",
      tags: [
        { name: "React Native", icon: FiCode },
        { name: "Redux", icon: FiCode },
        { name: "Expo", icon: FiCode },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [
        {
          url: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=1974",
          caption: "Interface mobile pour réserver et gérer son séjour",
        },
      ],
    },

    {
      title: "GESTMARKET",
      description:
        "Application desktop pour la gestion de supermarchés (stocks, ventes, achats) avec une interface graphique riche.",
      tags: [
        { name: "JavaFX", icon: FiCode },
        { name: "Maven", icon: FiCode },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [
        {
          url: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?q=80&w=1974",
          caption: "Interface de gestion des stocks",
        },
      ],
    },

    {
      title: "SMART-POLES",
      description:
        "Projet d'éclairage public intelligent utilisant des capteurs IoT pour optimiser la consommation d'énergie.",
      tags: [
        { name: "IoT", icon: FiCode },
        { name: "C++", icon: FiCode },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [],
    },
    {
      title: "8-Queen Solver",
      description:
        "Application desktop en C utilisant JTK pour résoudre le problème des 8 reines avec visualisation graphique de chaque étape de l’algorithme de backtracking.",
      tags: [
        { name: "C", icon: FiCode },
        { name: "JTK", icon: FiCode },
        { name: "Backtracking", icon: FiCode },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [
        {
          url: "https://images.unsplash.com/photo-1601121142514-2c09fdcda7d2?q=80&w=1974",
          caption: "Interface graphique montrant les placements des reines",
        },
      ],
    },
    {
      title: "EnimSports",
      description:
        "Application web dédiée à la gestion des activités sportives au sein de l’école, permettant l’inscription, le suivi des présences et la gestion des événements sportifs.",
      tags: [
        { name: "Next.js", icon: FiCode },
        { name: "Tailwind CSS", icon: FiCode },
        { name: "PostgreSQL", icon: FiDatabase },
        { name: "Prisma", icon: FiCode },
      ],
      githubLink: "#",
      liveLink: "#",
      images: [
        {
          url: "/enimsports/mainImg.png",
          caption: "Tableau de bord de gestion des activités sportives",
        },
      ],
    },
  ] as Project[],
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPhotos, setShowPhotos] = useState(false);

  const openPhotos = (project: Project) => {
    setSelectedProject(project);
    setShowPhotos(true);
  };

  const closePhotos = () => {
    setShowPhotos(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="projects" className="py-24 relative font-votrag">
      {/* Section Header */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-valorant text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Mes Projets
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Chaque projet est une aventure. Voici quelques-unes de mes
          réalisations.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative"
          >
            {/* Project Card */}
            <div className="relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-500/80 hover:shadow-blue-500/10 h-full flex flex-col">
              {/* Image Preview */}
              <div className="relative mb-6 rounded-xl overflow-hidden h-48 bg-slate-900/50">
                {project.images.length > 0 ? (
                  <>
                    <img
                      src={project.images[0].url}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gallery Button */}
                    {project.images.length > 1 && (
                      <motion.button
                        onClick={() => openPhotos(project)}
                        className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:border-blue-400 transition-colors duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        title="View more images"
                      >
                        <div className="relative flex items-center">
                          <FiImage className="w-5 h-5 text-white" />
                          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            +{project.images.length - 1}
                          </span>
                        </div>
                      </motion.button>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800/50">
                    <FiImage className="w-12 h-12 text-slate-600" />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-valorant text-2xl text-slate-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <div
                      key={tagIndex}
                      className="flex items-center gap-1.5 px-3 py-1 bg-blue-900/50 border border-blue-800/60 rounded-full text-xs font-medium text-blue-300"
                    >
                      {tag.icon && <tag.icon className="w-3 h-3" />}
                      <span>{tag.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <div className="flex gap-3 flex-1">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 flex-1 font-medium"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600/80 border border-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all duration-300 flex-1 font-medium"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                      <span>Démo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {showPhotos && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-50 flex items-center justify-center p-4 font-votrag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhotos}
          >
            <motion.div
              className="relative bg-slate-800/50 backdrop-blur-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-700">
                <h3 className="font-valorant text-2xl text-white">
                  {selectedProject.title}
                </h3>
                <motion.button
                  onClick={closePhotos}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-full"
                  whileHover={{ rotate: 90 }}
                >
                  <FiX className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="p-6 overflow-y-auto max-h-[calc(90vh-90px)]">
                {selectedProject.images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.images.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        className="relative group overflow-hidden rounded-xl bg-slate-900/50 border border-slate-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: photoIndex * 0.1 }}
                      >
                        <img
                          src={photo.url}
                          alt={photo.caption || `Screenshot ${photoIndex + 1}`}
                          className="w-full h-auto object-cover aspect-video"
                        />
                        {photo.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                            <p className="text-white text-sm font-medium">
                              {photo.caption}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <FiImage className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                    <h4 className="font-valorant text-2xl text-white mb-2">
                      Aucune photo
                    </h4>
                    <p className="text-slate-400">
                      La galerie pour ce projet est en cours de construction.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
