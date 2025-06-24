"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiMonitor,
  FiTool,
  FiCloud,
  FiStar,
} from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";
import {
  SiApachemaven,
  SiMathworks,
  SiExpo,
  SiC,
  SiPlotly,
  SiJira,
  SiPython,
  SiJava,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiLinux,
  SiGit,
  SiFigma,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

// Interface for typing our skill objects
interface Skill {
  name: string;
  icon: React.ElementType;
  category: "ai_ml" | "ai_libs" | "programming" | "web" | "database" | "tools";
  experience: string;
  description: string;
  projects: string[];
  color: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const allSkills: Skill[] = [
    {
      name: "Prisma",
      icon: SiPrisma,
      category: "tools",
      experience: "1+ an",
      description:
        "ORM moderne pour TypeScript et Node.js, facilitant les requêtes avec autocomplétion et typage.",
      projects: ["Bellavista", "ENIMSPORTS"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      category: "tools",
      experience: "1+ an",
      description:
        "Backend as a Service open-source basé sur PostgreSQL, offrant authentification, stockage, et API temps réel.",
      projects: ["Bellavista"],
      color: "from-green-500 to-emerald-600",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "database",
      experience: "1.5+ ans",
      description:
        "Système de gestion de base de données relationnelle robuste, puissant et open-source.",
      projects: ["Bellavista", "ENIMSPORTS"],
      color: "from-blue-700 to-cyan-700",
    },

    {
      name: "Deep Learning",
      icon: FaBrain,
      category: "ai_ml",
      experience: "2+ ans",
      description:
        "Réseaux de neurones, CNN, RNN, Transformers pour l'analyse d'images et de texte.",
      projects: ["Computer Vision", "NLP Projects"],
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Machine Learning",
      icon: FaBrain,
      category: "ai_ml",
      experience: "2+ ans",
      description:
        "Apprentissage supervisé/non-supervisé, optimisation et mise en production de modèles.",
      projects: ["Predictive Analytics", "Classification Models"],
      color: "from-blue-400 to-indigo-500",
    },
    {
      name: "NumPy",
      icon: SiNumpy,
      category: "ai_libs",
      experience: "2+ ans",
      description:
        "Calcul scientifique, manipulation de tableaux multidimensionnels et d'opérations mathématiques.",
      projects: ["Tous les projets Data"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Pandas",
      icon: SiPandas,
      category: "ai_libs",
      experience: "2+ ans",
      description:
        "Analyse et manipulation de données, structures de données (DataFrame) performantes.",
      projects: ["Data Cleaning", "Data Analysis"],
      color: "from-gray-500 to-blue-500",
    },
    {
      name: "Scikit-learn",
      icon: SiScikitlearn,
      category: "ai_libs",
      experience: "2+ ans",
      description:
        "Bibliothèque complète pour le Machine Learning classique : classification, régression, clustering.",
      projects: ["Predictive Models"],
      color: "from-orange-400 to-orange-600",
    },
    {
      name: "TensorFlow/PyTorch",
      icon: SiTensorflow,
      category: "ai_libs",
      experience: "1.5+ ans",
      description:
        "Frameworks de Deep Learning pour la création et l'entraînement de réseaux de neurones.",
      projects: ["Image Recognition", "NLP"],
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Python",
      icon: SiPython,
      category: "programming",
      experience: "3+ ans",
      description:
        "Développement backend, scripts d'automatisation, et pilier de la data science.",
      projects: ["E-MADARIS", "SMART-POLES"],
      color: "from-blue-400 to-yellow-500",
    },
    {
      name: "Java",
      icon: SiJava,
      category: "programming",
      experience: "2+ ans",
      description:
        "Applications d'entreprise robustes, développement Android et applications desktop.",
      projects: ["GESTMARKET"],
      color: "from-orange-500 to-red-500",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "programming",
      experience: "2+ ans",
      description:
        "Langage essentiel du web pour créer des applications interactives et dynamiques.",
      projects: ["ENIMSPORTS", "Portfolio"],
      color: "from-yellow-400 to-yellow-500",
    },
    {
      name: "Maven",
      icon: SiApachemaven,
      category: "tools",
      experience: "1+ an",
      description:
        "Outil de gestion de projets Java, gestion des dépendances et du cycle de vie de build.",
      projects: ["GESTMARKET"],
      color: "from-red-500 to-gray-700",
    },
    {
      name: "MATLAB",
      icon: SiMathworks,
      category: "programming",
      experience: "1+ an",
      description:
        "Calcul scientifique, traitement du signal, et modélisation mathématique.",
      projects: ["Analyse numérique"],
      color: "from-yellow-400 to-red-400",
    },
    {
      name: "Expo / React Native",
      icon: SiExpo,
      category: "web",
      experience: "1+ an",
      description:
        "Développement d'applications mobiles multiplateformes avec React Native et Expo.",
      projects: ["Prototypes mobiles"],
      color: "from-black to-gray-600",
    },
    {
      name: "JTK (C)",
      icon: SiC,
      category: "programming",
      experience: "1 an",
      description:
        "Bibliothèque pour le développement d'interfaces graphiques en C.",
      projects: ["Interfaces bas niveau"],
      color: "from-gray-700 to-blue-500",
    },
    {
      name: "Matplotlib",
      icon: SiPlotly, // SiMatplotlib doesn't exist, Plotly is closest
      category: "ai_libs",
      experience: "2+ ans",
      description:
        "Visualisation de données en Python : courbes, histogrammes, et plus.",
      projects: ["Data Visualization"],
      color: "from-pink-400 to-purple-500",
    },
    {
      name: "Jira",
      icon: SiJira,
      category: "tools",
      experience: "1+ an",
      description:
        "Outil de gestion de projet agile pour le suivi des tâches, sprints et bugs.",
      projects: ["Suivi d'équipe"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "programming",
      experience: "1.5+ ans",
      description:
        "JavaScript typé pour des applications à grande échelle, plus robustes et maintenables.",
      projects: ["ENIMSPORTS"],
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "C/C++",
      icon: SiCplusplus,
      category: "programming",
      experience: "1+ an",
      description:
        "Programmation système, algorithmes performants et applications bas niveau.",
      projects: ["8 Reines Solver"],
      color: "from-gray-500 to-blue-600",
    },
    {
      name: "React",
      icon: SiReact,
      category: "web",
      experience: "2+ ans",
      description:
        "Bibliothèque UI pour construire des interfaces utilisateur réactives avec des composants.",
      projects: ["E-MADARIS", "Portfolio"],
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "web",
      experience: "1.5+ ans",
      description:
        "Framework React pour la production avec rendu côté serveur (SSR) et génération statique (SSG).",
      projects: ["ENIMSPORTS"],
      color: "from-black to-gray-700",
    },
    {
      name: "HTML5/CSS3",
      icon: SiHtml5,
      category: "web",
      experience: "3+ ans",
      description:
        "Fondations du web pour la structure sémantique et le design moderne et responsive.",
      projects: ["Tous les projets web"],
      color: "from-orange-500 to-pink-500",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "database",
      experience: "1+ an",
      description:
        "Base de données NoSQL orientée document, flexible et scalable pour les applications modernes.",
      projects: ["ENIMSPORTS"],
      color: "from-green-400 to-green-600",
    },
    {
      name: "SQL (MySQL)",
      icon: SiMysql,
      category: "database",
      experience: "2+ ans",
      description:
        "Langage de requêtes pour bases de données relationnelles, garantissant la cohérence des données.",
      projects: ["GESTMARKET"],
      color: "from-blue-500 to-orange-400",
    },
    {
      name: "Linux",
      icon: SiLinux,
      category: "tools",
      experience: "2+ ans",
      description:
        "Administration système, ligne de commande, et environnement de développement principal.",
      projects: ["Développement général"],
      color: "from-yellow-400 to-gray-400",
    },
    {
      name: "Git",
      icon: SiGit,
      category: "tools",
      experience: "3+ ans",
      description:
        "Système de contrôle de version essentiel pour la collaboration et le suivi des projets.",
      projects: ["Tous les projets"],
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Figma",
      icon: SiFigma,
      category: "tools",
      experience: "1.5+ ans",
      description:
        "Outil de design collaboratif pour la création d'interfaces UI/UX et de prototypes.",
      projects: ["Design des interfaces"],
      color: "from-purple-400 to-pink-500",
    },
    {
      name: "Cloud",
      icon: FiCloud,
      category: "tools",
      experience: "1+ an",
      description:
        "Déploiement et gestion d'applications sur des plateformes comme Vercel, AWS, Azure.",
      projects: ["Hébergement projets"],
      color: "from-sky-400 to-blue-500",
    },
  ];

  const categories = [
    { id: "all", name: "Toutes", icon: FiStar },
    { id: "ai_ml", name: "Concepts AI", icon: FaBrain },
    { id: "ai_libs", name: "Bibliothèques AI", icon: FiCode },
    { id: "programming", name: "Programmation", icon: FiCode },
    { id: "web", name: "Web", icon: FiMonitor },
    { id: "database", name: "Base de données", icon: FiDatabase },
    { id: "tools", name: "Outils", icon: FiTool },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-x-clip">
      <motion.div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{
          scaleX: 1,
          opacity: [0, 0.8, 0],
          transition: { duration: 2.5, times: [0, 0.5, 1] },
        }}
        viewport={{ once: false, amount: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{
          scaleX: 1,
          opacity: [0, 0.8, 0],
          transition: { duration: 2.5, times: [0, 0.5, 1] },
        }}
        viewport={{ once: false, amount: 0.3 }}
      />

      <div className="relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Showcase d'
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
              Expertise
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise pour construire
            des solutions innovantes.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-slate-800/50 rounded-full border border-slate-700/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center space-x-2 px-4 py-2 text-sm md:px-6 md:py-3 md:text-base rounded-full transition-colors duration-300 focus:outline-none ${
                  activeCategory === category.id
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="active-category-pill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">
                  <category.icon />
                </span>
                <span className="relative z-10 font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredSkills.map((skill) => {
              // --- THIS IS THE FIX ---
              // We create a capitalized variable for the icon component.
              // And we add a safety check.
              const Icon = skill.icon;
              if (!Icon) return null;

              return (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  className="group relative p-6 rounded-xl bg-slate-900/50 border border-slate-700/50 overflow-hidden cursor-pointer bg-[image:radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_50%)] hover:border-blue-500/80 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="relative z-10">
                    <Icon className="text-5xl text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                    <h3 className="mt-4 text-lg font-bold text-slate-200">
                      {skill.name}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400 line-clamp-2 h-10">
                      {skill.description}
                    </p>
                    <div className="mt-4 border-t border-slate-700/50 pt-3">
                      <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                        {skill.experience} d'expérience
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-2xl p-6 md:p-8 max-w-md w-full border border-slate-700 shadow-2xl shadow-blue-500/10"
              variants={{
                hidden: { scale: 0.9, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300, damping: 25 },
                },
                exit: { scale: 0.9, opacity: 0 },
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${selectedSkill.color} flex items-center justify-center`}
                  >
                    <selectedSkill.icon className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedSkill.name}</h3>
                    <p className="text-slate-400">
                      {selectedSkill.experience} d'expérience
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <p className="text-slate-300 mb-6">{selectedSkill.description}</p>
              <div>
                <h4 className="font-semibold mb-3">
                  Projets réalisés avec cette technologie
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.projects.map((project, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
