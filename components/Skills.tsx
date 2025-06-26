"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
  FiCode,
  FiDatabase,
  FiMonitor,
  FiTool,
  FiCloud,
  FiCpu,
} from "react-icons/fi";
import { FaBrain } from "react-icons/fa6";
import {
  SiApachemaven,
  SiExpo,
  SiC,
  SiPlotly,
  SiJira,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiPrisma,
  SiSupabase,
  SiPostgresql,
  SiNextdotjs,
  SiHtml5,
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

interface Skill {
  name: string;
  icon: React.ElementType;
  category: "ai_ml" | "ai_libs" | "programming" | "web" | "database" | "tools";
  experience: string;
  description: string;
  projects: string[];
  color: string;
  proficiency: number;
  yearStarted: number;
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [searchQuery] = useState("");

  const allSkills: Skill[] = [
    {
      name: "Apache Maven",
      icon: SiApachemaven,
      category: "tools",
      experience: "1+ an",
      description:
        "Gestion de dépendances et automatisation de builds pour projets Java",
      projects: ["GESTMARKET"],
      color: "from-red-500 to-orange-600",
      proficiency: 75,
      yearStarted: 2022,
    },
    {
      name: "Expo",
      icon: SiExpo,
      category: "web",
      experience: "1+ an",
      description: "Développement multiplateforme d'applications React Native",
      projects: ["Application mobile"],
      color: "from-gray-600 to-black",
      proficiency: 70,
      yearStarted: 2023,
    },
    {
      name: "C",
      icon: SiC,
      category: "programming",
      experience: "1+ an",
      description: "Programmation système et développement bas niveau",
      projects: ["Projets académiques"],
      color: "from-blue-600 to-blue-800",
      proficiency: 65,
      yearStarted: 2021,
    },
    {
      name: "Plotly",
      icon: SiPlotly,
      category: "ai_libs",
      experience: "1+ an",
      description: "Visualisation de données interactives et dashboards",
      projects: ["Data Analysis"],
      color: "from-purple-500 to-pink-500",
      proficiency: 75,
      yearStarted: 2022,
    },
    {
      name: "Jira",
      icon: SiJira,
      category: "tools",
      experience: "1+ an",
      description: "Gestion de projets agile et suivi des tâches",
      projects: ["Tous les projets"],
      color: "from-blue-400 to-blue-600",
      proficiency: 80,
      yearStarted: 2022,
    },
    {
      name: "C++",
      icon: SiCplusplus,
      category: "programming",
      experience: "1+ an",
      description: "Programmation orientée objet et algorithmes performants",
      projects: ["Projets académiques"],
      color: "from-blue-700 to-blue-900",
      proficiency: 70,
      yearStarted: 2021,
    },
    {
      name: "Supabase",
      icon: SiSupabase,
      category: "database",
      experience: "1+ an",
      description: "Backend as a Service avec base de données temps réel",
      projects: ["Bellavista"],
      color: "from-green-500 to-green-700",
      proficiency: 75,
      yearStarted: 2023,
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      category: "web",
      experience: "3+ ans",
      description: "Sémantique HTML avancée et intégration web",
      projects: ["Tous les projets web"],
      color: "from-orange-500 to-orange-700",
      proficiency: 90,
      yearStarted: 2021,
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "database",
      experience: "1+ an",
      description: "Base de données NoSQL et modélisation de documents",
      projects: ["SMART-POLES"],
      color: "from-green-400 to-green-600",
      proficiency: 75,
      yearStarted: 2022,
    },
    {
      name: "MySQL",
      icon: SiMysql,
      category: "database",
      experience: "1+ an",
      description: "Base de données relationnelle et optimisation SQL",
      projects: ["GESTMARKET"],
      color: "from-blue-500 to-blue-700",
      proficiency: 78,
      yearStarted: 2022,
    },
    {
      name: "Linux",
      icon: SiLinux,
      category: "tools",
      experience: "2+ ans",
      description: "Administration système et scripting shell",
      projects: ["Déploiements"],
      color: "from-yellow-600 to-black",
      proficiency: 80,
      yearStarted: 2021,
    },
    {
      name: "Figma",
      icon: SiFigma,
      category: "tools",
      experience: "1+ an",
      description: "Design d'interface et prototypage",
      projects: ["ENIMSPORTS", "Portfolio"],
      color: "from-purple-400 to-pink-400",
      proficiency: 70,
      yearStarted: 2022,
    },
    {
      name: "NumPy",
      icon: SiNumpy,
      category: "ai_libs",
      experience: "2+ ans",
      description:
        "Calcul scientifique et manipulation de tableaux multidimensionnels",
      projects: ["Data Analysis", "ML Projects"],
      color: "from-blue-400 to-blue-600",
      proficiency: 85,
      yearStarted: 2022,
    },
    {
      name: "Pandas",
      icon: SiPandas,
      category: "ai_libs",
      experience: "2+ ans",
      description: "Manipulation et analyse de données",
      projects: ["Data Analysis", "ML Projects"],
      color: "from-red-400 to-red-600",
      proficiency: 88,
      yearStarted: 2022,
    },
    {
      name: "scikit-learn",
      icon: SiScikitlearn,
      category: "ai_libs",
      experience: "2+ ans",
      description: "Algorithmes de machine learning traditionnels",
      projects: ["Predictive Analytics"],
      color: "from-orange-500 to-orange-700",
      proficiency: 85,
      yearStarted: 2022,
    },
    {
      name: "Code",
      icon: FiCode,
      category: "tools",
      experience: "3+ ans",
      description: "Développement logiciel et bonnes pratiques",
      projects: ["Tous les projets"],
      color: "from-gray-500 to-gray-700",
      proficiency: 90,
      yearStarted: 2021,
    },
    {
      name: "Database",
      icon: FiDatabase,
      category: "database",
      experience: "2+ ans",
      description: "Conception et optimisation de bases de données",
      projects: ["Tous les projets"],
      color: "from-blue-300 to-blue-500",
      proficiency: 85,
      yearStarted: 2022,
    },
    {
      name: "Monitor",
      icon: FiMonitor,
      category: "tools",
      experience: "2+ ans",
      description: "Développement frontend et UI/UX",
      projects: ["Tous les projets web"],
      color: "from-indigo-400 to-indigo-600",
      proficiency: 80,
      yearStarted: 2022,
    },
    {
      name: "Tool",
      icon: FiTool,
      category: "tools",
      experience: "3+ ans",
      description: "Automatisation et outils de développement",
      projects: ["Tous les projets"],
      color: "from-gray-600 to-gray-800",
      proficiency: 85,
      yearStarted: 2021,
    },
    {
      name: "Cloud",
      icon: FiCloud,
      category: "tools",
      experience: "1+ an",
      description: "Déploiement et infrastructure cloud",
      projects: ["ENIMSPORTS"],
      color: "from-blue-300 to-blue-500",
      proficiency: 70,
      yearStarted: 2023,
    },
    {
      name: "CPU",
      icon: FiCpu,
      category: "tools",
      experience: "3+ ans",
      description: "Optimisation des performances et algorithmes efficaces",
      projects: ["Tous les projets"],
      color: "from-purple-400 to-purple-600",
      proficiency: 80,
      yearStarted: 2021,
    },
    {
      name: "Deep Learning",
      icon: FaBrain,
      category: "ai_ml",
      experience: "2+ ans",
      description:
        "Architectures avancées de réseaux de neurones, optimisation et déploiement de modèles complexes",
      projects: ["Computer Vision", "NLP Projects"],
      color: "from-purple-400 to-pink-500",
      proficiency: 85,
      yearStarted: 2022,
    },
    {
      name: "Machine Learning",
      icon: FaBrain,
      category: "ai_ml",
      experience: "2+ ans",
      description:
        "Conception et implémentation d'algorithmes ML, feature engineering, et MLOps",
      projects: ["Predictive Analytics", "Classification Models"],
      color: "from-blue-400 to-indigo-500",
      proficiency: 90,
      yearStarted: 2022,
    },
    {
      name: "Python",
      icon: SiPython,
      category: "programming",
      experience: "3+ ans",
      description:
        "Développement full-stack, automatisation, data science et architecture de microservices",
      projects: ["E-MADARIS", "SMART-POLES"],
      color: "from-blue-400 to-yellow-500",
      proficiency: 95,
      yearStarted: 2021,
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "programming",
      experience: "1.5+ ans",
      description:
        "Applications enterprise-grade avec typage strict et patterns de conception avancés",
      projects: ["ENIMSPORTS"],
      color: "from-blue-500 to-blue-700",
      proficiency: 88,
      yearStarted: 2022,
    },
    {
      name: "React",
      icon: SiReact,
      category: "web",
      experience: "2+ ans",
      description:
        "Architectures complexes, state management, performance optimization et patterns avancés",
      projects: ["E-MADARIS", "Portfolio"],
      color: "from-cyan-400 to-blue-500",
      proficiency: 92,
      yearStarted: 2022,
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "web",
      experience: "1.5+ ans",
      description:
        "Applications full-stack avec SSR/SSG, optimisation SEO et déploiement edge",
      projects: ["ENIMSPORTS"],
      color: "from-black to-gray-700",
      proficiency: 85,
      yearStarted: 2022,
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "database",
      experience: "1.5+ ans",
      description:
        "Conception de schémas complexes, optimisation de requêtes et administration avancée",
      projects: ["Bellavista", "ENIMSPORTS"],
      color: "from-blue-700 to-cyan-700",
      proficiency: 82,
      yearStarted: 2022,
    },
    {
      name: "Java",
      icon: FaJava,
      category: "programming",
      experience: "2+ ans",
      description:
        "Applications enterprise, design patterns et architecture distribuée",
      projects: ["GESTMARKET"],
      color: "from-orange-500 to-red-500",
      proficiency: 80,
      yearStarted: 2022,
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "programming",
      experience: "2+ ans",
      description:
        "ES6+, async programming, DOM manipulation et optimisation performance",
      projects: ["ENIMSPORTS", "Portfolio"],
      color: "from-yellow-400 to-yellow-500",
      proficiency: 90,
      yearStarted: 2022,
    },
    {
      name: "TensorFlow",
      icon: SiTensorflow,
      category: "ai_libs",
      experience: "1.5+ ans",
      description:
        "Deep learning pipelines, model deployment et production ML systems",
      projects: ["Image Recognition", "NLP"],
      color: "from-orange-500 to-yellow-500",
      proficiency: 78,
      yearStarted: 2022,
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      category: "database",
      experience: "1+ an",
      description:
        "ORM moderne avec migrations avancées et optimisation de requêtes",
      projects: ["Bellavista", "ENIMSPORTS"],
      color: "from-indigo-500 to-purple-500",
      proficiency: 85,
      yearStarted: 2023,
    },
    {
      name: "Git",
      icon: SiGit,
      category: "tools",
      experience: "3+ ans",
      description:
        "Workflows avancés, Git hooks, monorepo management et CI/CD integration",
      projects: ["Tous les projets"],
      color: "from-red-500 to-orange-500",
      proficiency: 95,
      yearStarted: 2021,
    },
  ];

  const categories = [
    { id: "all", name: "Toutes Technologies", icon: FiCode },
    { id: "ai_ml", name: "Intelligence Artificielle", icon: FaBrain },
    { id: "ai_libs", name: "Frameworks ML", icon: FiCpu },
    { id: "programming", name: "Langages", icon: FiCode },
    { id: "web", name: "Développement Web", icon: FiMonitor },
    { id: "database", name: "Bases de Données", icon: FiDatabase },
    { id: "tools", name: "DevOps & Outils", icon: FiTool },
  ];

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory =
      selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getExperienceColor = (proficiency: number) => {
    if (proficiency >= 90) return "text-emerald-400";
    if (proficiency >= 80) return "text-blue-400";
    if (proficiency >= 70) return "text-yellow-400";
    return "text-orange-400";
  };

  const getExperienceLevel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Avancé";
    if (proficiency >= 70) return "Intermédiaire";
    return "Débutant";
  };

  return (
    <section id="skills" className="py-24 relative min-h-screen ">
      {/* Animated Background Grid */}
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/70 rounded-full"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Expertise Technique
          </h2>
          <p className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Technologies maîtrisées et architectures développées au cours de mon
            parcours de développement
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          className="mb-12 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-2 md:px-6 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border border-slate-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Timeline/Grid Hybrid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 p-4 md:p-6 rounded-2xl bg-gradient-to-r from-slate-900/50 to-slate-800/30 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Icon and Name */}
                    <div className="flex items-start gap-4 lg:gap-6 min-w-0 flex-1">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-r ${skill.color} p-0.5 flex-shrink-0`}
                      >
                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                          <Icon className="text-lg md:text-2xl text-white" />
                        </div>
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                          {skill.description}
                        </p>

                        {/* Projects Tags */}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {skill.projects.map((project, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 md:px-3 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Experience Metrics */}
                    <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 flex-shrink-0 lg:w-40">
                      <div className="text-left lg:text-right">
                        <div
                          className={`text-base md:text-lg font-bold ${getExperienceColor(
                            skill.proficiency
                          )}`}
                        >
                          {getExperienceLevel(skill.proficiency)}
                        </div>
                        <div className="text-slate-400 text-xs md:text-sm">
                          {skill.experience}
                        </div>
                        <div className="text-slate-400 text-xs md:text-sm lg:mt-2">
                          Depuis {skill.yearStarted}
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="w-24 lg:w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-2xl pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Summary Stats */}
        <motion.div
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50">
            <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
              {allSkills.length}
            </div>
            <div className="text-sm md:text-base text-slate-300">
              Technologies Maîtrisées
            </div>
          </div>

          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50">
            <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
              {allSkills.filter((s) => s.proficiency >= 90).length}
            </div>
            <div className="text-sm md:text-base text-slate-300">
              Expertises Avancées
            </div>
          </div>

          <div className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
              3+
            </div>
            <div className="text-sm md:text-base text-slate-300">
              Années d Expérience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
