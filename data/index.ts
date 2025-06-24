// data/index.ts
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiJava,
  SiPython,
  SiCplusplus,
  SiLinux,
  SiGit,
  SiFigma,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import {
  FaJava,
  FaCampground,
  FaPaintBrush,
  FaFutbol,
  FaSeedling,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const portfolioData = {
  name: "Oualid Azemray",
  firstName: "AZEMRAY",
  title: "Génie Informatique",
  location: "Rabat, Morocco",
  email: "oualid.azemray@enim.ac.ma",
  github: "https://github.com/oualidazemray", // Replace with your actual GitHub username
  linkedin: "https://linkedin.com/in/oualid-azemray", // Replace with your actual LinkedIn username
  profile:
    "Étudiant en 2e année à l'École Nationale Supérieure des Mines de Rabat, spécialisé en informatique et technologies de l'information. Passionné par l'innovation numérique, je suis motivé à mettre en pratique mes connaissances techniques et à contribuer à des projets innovants dans le domaine des technologies de l'information.",

  skills: [
    { name: "Python", icon: SiPython, level: 85 },
    { name: "Java & JavaFX", icon: FaJava, level: 80 },
    { name: "JavaScript", icon: SiJavascript, level: 80 },
    { name: "TypeScript", icon: SiTypescript, level: 75 },
    { name: "C/C++", icon: SiCplusplus, level: 70 },
    { name: "HTML5", icon: SiHtml5, level: 95 },
    { name: "CSS3 & Tailwind", icon: SiTailwindcss, level: 90 },
    { name: "React.js", icon: SiReact, level: 85 },
    { name: "Next.js", icon: SiNextdotjs, level: 80 },
    { name: "SQL & NoSQL", icon: GrMysql, level: 80 },
    { name: "MongoDB", icon: SiMongodb, level: 75 },
    { name: "Linux", icon: SiLinux, level: 80 },
    { name: "Git", icon: SiGit, level: 85 },
    { name: "Figma", icon: SiFigma, level: 70 },
  ],

  projects: [
    {
      title: "ENIMSPORTS - Plateforme Web",
      description:
        "Développement d'une plateforme web dynamique pour la gestion des activités sportives, incluant la réservation de terrains et le suivi des résultats en temps réel.",
      tags: [
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      githubLink: "https://github.com/your-username/enimsports", // Replace with your link
      liveLink: "https://enimsports.vercel.app", // Replace with your link
    },
    {
      title: "E-madaris - Gestion Scolaire",
      description:
        "Développement du front-end d'un site web pour la gestion scolaire, créant une interface utilisateur intuitive et réactive.",
      tags: [
        { name: "React.js", icon: SiReact },
        { name: "HTML", icon: SiHtml5 },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
      githubLink: "https://github.com/your-username/e-madaris", // Replace with your link
      liveLink: "https://e-madaris.vercel.app", // Replace with your link
    },
    {
      title: "GESTMARKET - Application Desktop",
      description:
        "Conception d'une application desktop pour la gestion de supermarchés (stocks, ventes, achats) avec une interface graphique riche.",
      tags: [
        { name: "JavaFX", icon: FaJava },
        { name: "Maven", icon: SiJava },
        { name: "FXML", icon: SiJava },
      ],
      githubLink: "https://github.com/your-username/gestmarket", // Replace with your link
      liveLink: "#", // Desktop apps usually don't have a live link
    },
    {
      title: "SMART-POLES - Projet IoT",
      description:
        "Projet d'éclairage public intelligent utilisant des capteurs IoT pour optimiser la consommation d'énergie et permettre une maintenance préventive.",
      tags: [
        { name: "IoT", icon: SiDocker }, // Using a representative icon
        { name: "C++", icon: SiCplusplus },
        { name: "Proteus", icon: SiCplusplus }, // Using a fallback icon
      ],
      githubLink: "https://github.com/your-username/smart-poles", // Replace with your link
      liveLink: "#",
    },
  ],

  experience: [
    {
      role: "Étudiant Ingénieur - Génie Informatique",
      company: "École Nationale Supérieure des Mines de Rabat",
      period: "2023 - Présent",
      description:
        "Spécialisation en développement logiciel, architecture des systèmes et technologies de l'information.",
    },
    {
      role: "Stage d'initiation",
      company: "Développement Front-End (E-madaris)",
      period: "2024",
      description:
        "Développement de l'interface utilisateur d'un site de gestion scolaire avec HTML, Tailwind CSS et React.js.",
    },
    {
      role: "Classes Préparatoires (CPGE)",
      company: "IBN BAJJA - Beni Mellal",
      period: "2021 - 2022",
      description:
        "Filière Technologie et Sciences Industrielles (TSI), préparant aux concours des grandes écoles d'ingénieurs.",
    },
    {
      role: "Baccalauréat",
      company: "Lycée Technique Mohamed VI - Azilal",
      period: "2018 - 2021",
      description: "Baccalauréat en Sciences et Technologies Électriques.",
    },
  ],

  interests: [
    {
      name: "Plantation",
      description: "Passionné par l'agriculture durable et l'environnement.",
      icon: FaSeedling,
    },
    {
      name: "Camping",
      description:
        "Amateur d'aventures en plein air et d'exploration de la nature.",
      icon: FaCampground,
    },
    {
      name: "Décoration intérieure",
      description: "Création d'espaces fonctionnels et esthétiques.",
      icon: FaPaintBrush,
    },
    {
      name: "Football",
      description:
        "Pratique régulière pour l'esprit d'équipe et la forme physique.",
      icon: FaFutbol,
    },
  ],
};
