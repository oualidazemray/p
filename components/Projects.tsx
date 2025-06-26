"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  Image as Imag,
  X,
  Database,
  Code,
  Star,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Cpu,
  Settings,
  Play,
  ArrowUpRight,
  ImageIcon,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: {
    name: string;
    icon?: React.ComponentType<never>;
    color?: string;
  }[];
  githubLink: string;
  liveLink: string;
  images: { url: string; caption?: string }[];
  category?: string;
  featured?: boolean;
}

const portfolioData = {
  projects: [
    {
      title: "Bellavista Web",
      description:
        "Application web de gestion hôtelière complète avec tableau de bord intelligent, système de réservations en temps réel et gestion avancée des chambres.",
      tags: [
        {
          name: "Next.js",
          icon: Code,
          color: "from-blue-800/20 to-blue-900/20",
        },
        {
          name: "Tailwind",
          icon: Settings,
          color: "from-cyan-800/20 to-cyan-900/20",
        },
        {
          name: "Prisma",
          icon: Database,
          color: "from-green-800/20 to-green-900/20",
        },
        {
          name: "PostgreSQL",
          icon: Database,
          color: "from-purple-800/20 to-purple-900/20",
        },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "Web App",
      featured: true,
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
        "Application mobile native offrant une expérience utilisateur exceptionnelle pour la réservation d'hôtel avec interface intuitive et animations fluides.",
      tags: [
        {
          name: "React Native",
          icon: Smartphone,
          color: "from-pink-800/20 to-pink-900/20",
        },
        {
          name: "Redux",
          icon: Settings,
          color: "from-orange-800/20 to-orange-900/20",
        },
        {
          name: "Expo",
          icon: Zap,
          color: "from-yellow-800/20 to-yellow-900/20",
        },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "Mobile App",
      featured: true,
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
        "Solution desktop complète pour la gestion de supermarchés avec interface graphique moderne et fonctionnalités avancées de reporting.",
      tags: [
        {
          name: "JavaFX",
          icon: Monitor,
          color: "from-red-800/20 to-red-900/20",
        },
        {
          name: "Maven",
          icon: Settings,
          color: "from-indigo-800/20 to-indigo-900/20",
        },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "Desktop App",
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
        "Système d'éclairage public intelligent avec capteurs IoT pour l'optimisation énergétique et la maintenance prédictive.",
      tags: [
        {
          name: "IoT",
          icon: Cpu,
          color: "from-emerald-800/20 to-emerald-900/20",
        },
        { name: "C++", icon: Code, color: "from-blue-800/20 to-blue-900/20" },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "IoT",
      images: [],
    },
    {
      title: "8-Queen Solver",
      description:
        "Visualiseur interactif du problème des 8 reines avec algorithme de backtracking et animations en temps réel des solutions.",
      tags: [
        { name: "C", icon: Code, color: "from-gray-800/20 to-gray-900/20" },
        {
          name: "GTK",
          icon: Monitor,
          color: "from-green-800/20 to-green-900/20",
        },
        {
          name: "Algo",
          icon: Cpu,
          color: "from-purple-800/20 to-purple-900/20",
        },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "Algorithm",
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
        "Plateforme de gestion des activités sportives scolaires avec système d'inscription, suivi des performances et événements.",
      tags: [
        {
          name: "Next.js",
          icon: Globe,
          colo1r: "from-blue-800/20 to-blue-900/20",
        },
        {
          name: "Tailwind",
          icon: Settings,
          color: "from-cyan-800/20 to-cyan-900/20",
        },
        {
          name: "PostgreSQL",
          icon: Database,
          color: "from-purple-800/20 to-purple-900/20",
        },
        {
          name: "Prisma",
          icon: Database,
          color: "from-green-800/20 to-green-900/20",
        },
      ],
      githubLink: "#",
      liveLink: "#",
      category: "Web App",
      featured: true,
      images: [
        {
          url: "/enimsports/mainImg.png",
          caption: "Tableau de bord de gestion des activités sportives",
        },
      ],
    },
  ],
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showPhotos, setShowPhotos] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const openPhotos = (project: Project) => {
    setSelectedProject(project);
    setShowPhotos(true);
  };

  const closePhotos = () => {
    setShowPhotos(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: easeInOut,
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0.5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden"
    >
      {/* Animated Background */}

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium text-blue-300 mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Projets Sélectionnés</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 leading-tight">
            Mes Créations
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Chaque ligne de code raconte une histoire. Découvrez mes projets les
            plus ambitieux et innovants.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`group relative ${
                project.featured ? "md:col-span-2 xl:col-span-1" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-300 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                variants={glowVariants}
                initial="initial"
                animate={hoveredCard === index ? "animate" : "initial"}
              />

              {/* Project Card */}
              <div className="relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-slate-700/20 shadow-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-blue-500/10 h-full flex flex-col group-hover:transform group-hover:scale-[1.02]">
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                  ></motion.div>
                )}

                {/* Category Badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                  <div className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20">
                    {project.category}
                  </div>
                </div>

                {/* Image Preview */}
                <div className="relative mb-4 sm:mb-6 rounded-xl overflow-hidden h-40 sm:h-48 bg-slate-900/50 group">
                  {project.images.length > 0 ? (
                    <>
                      <Image
                        src={project.images[0].url}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Play Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
                          <Play className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>

                      {/* Gallery Button */}
                      {project.images.length > 1 && (
                        <motion.button
                          onClick={() => openPhotos(project)}
                          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-white/20 hover:border-blue-400 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="relative flex items-center">
                            <ImageIcon className="w-4 h-4 text-white" />
                            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                              +{project.images.length - 1}
                            </span>
                          </div>
                        </motion.button>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors duration-300">
                      <div className="text-center">
                        <Imag className="w-8 h-8 sm:w-12 sm:h-12 text-slate-600 mx-auto mb-2" />
                        <p className="text-xs text-slate-500">
                          Bientôt disponible
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content */}
                <div className="flex flex-col h-full space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-blue-400" />
                    </motion.div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        className={`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r ${
                          tag.color || "from-blue-500/20 to-purple-500/20"
                        } border border-current/20 rounded-full text-xs font-medium backdrop-blur-sm`}
                        whileHover={{ scale: 1.05 }}
                        style={{
                          background: `linear-gradient(135deg, ${
                            tag.color?.split(" ")[1] || "rgb(59 130 246 / 0.2)"
                          }, ${
                            tag.color?.split(" ")[3] || "rgb(147 51 234 / 0.2)"
                          })`,
                          color:
                            tag.color?.split(" ")[1]?.replace("400", "300") ||
                            "rgb(147 197 253)",
                        }}
                      >
                        {tag.icon && <tag.icon className="w-3 h-3" />}
                        <span className="text-xs">{tag.name}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 sm:gap-3 pt-2">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-200 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 flex-1 font-medium text-xs sm:text-sm"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Code</span>
                    </motion.a>

                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-blue-700/20 border border-slate-600 rounded-lg text-slate-200 hover:bg-blue-700/50 hover:border-slate-500 transition-all duration-300 flex-1 font-medium text-xs sm:text-sm"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>Démo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {showPhotos && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhotos}
          >
            <motion.div
              className="relative bg-slate-800/50 backdrop-blur-2xl rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-700">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <motion.button
                  onClick={closePhotos}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700/50 rounded-full"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(90vh-90px)]">
                {selectedProject.images.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {selectedProject.images.map((photo, photoIndex) => (
                      <motion.div
                        key={photoIndex}
                        className="relative group overflow-hidden rounded-xl bg-slate-900/50 border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: photoIndex * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={photo.url}
                          alt={photo.caption || `Screenshot ${photoIndex + 1}`}
                          className="w-full aspect-video object-cover"
                        />
                        {photo.caption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 sm:p-4">
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
                    <Imag className="w-16 h-16 text-slate-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">
                      Galerie en construction
                    </h4>
                    0.
                    <p className="text-slate-400">
                      Les captures d écran seront bientôt disponible.
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
