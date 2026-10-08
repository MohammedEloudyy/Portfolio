export const personalData = {
  name: "Mohammed Eloudyy",
  title: "Développeur Web Full Stack Junior (Laravel / React)",
  degree: "Technicien Spécialisé (DTS) en Développement Digital",
  location: "Casablanca, Maroc",
  email: "mohamedeloudyypro@gmail.com",
  phone: "+212 6 00 22 45 14",
  phoneClean: "+212600224514",
  status: "Disponible pour opportunités (CDI, CDD & Freelance)",
  bio: "Pour moi, développer une application ne consiste pas simplement à écrire du code, mais à construire une solution qui répond à un besoin concret. Technicien Spécialisé en Développement Digital, je m’intéresse particulièrement au développement web Full Stack et à la création d’interfaces simples, modernes et utiles. J’aime comprendre le problème avant de chercher la solution, puis transformer une idée en application fonctionnelle, de la conception du backend avec Laravel & MySQL jusqu’à l’interface avec React.js.",
  avatar: "/MED_PIC_PRO.webp",
  cv: "/CV_Mohammed_Eloudyy_DEVOWF.pdf",
  socials: {
    github: "https://github.com/MohammedEloudyy",
    linkedin: "https://linkedin.com/in/mohammed-eloudyy-170585208",
    email: "mailto:mohamedeloudyypro@gmail.com",
    phone: "tel:+212600224514"
  }
};

export const statsData = [
  { label: "Années de Formation", value: "2024-2026" },
  { label: "Projets Réalisés", value: "3+ Projets Clés" },
  { label: "Stack Principale", value: "Laravel / React" },
  { label: "Localisation", value: "Casablanca" }
];

export const educationData = [
  {
    period: "2024 – 2026",
    degree: "Diplôme de Technicien Spécialisé (DTS) en Développement Digital",
    institution: "ISTA ISAG Casablanca — OFPPT",
    description: "Formation approfondie en développement web Full Stack (Laravel, React.js), bases de données relationnelles MySQL, API REST, modélisation UML et bonnes pratiques de génie logiciel."
  },
  {
    period: "2024",
    degree: "Baccalauréat Libre — Sciences Physiques (PC)",
    institution: "Lycée",
    description: "Filière Sciences Physiques"
  },
  {
    period: "2023",
    degree: "Baccalauréat — Sciences de la Vie et de la Terre (SVT)",
    institution: "Lycée May Ziyada",
    description: "Filière Sciences de la Vie et de la Terre."
  }
];

export const experienceData = [
  {
    role: "Projet de Fin d'Études – Syndic Management System",
    company: "Application SaaS Web Full Stack",
    period: "2026",
    highlights: [
      "Conception et développement d'une solution web SaaS centralisée pour la gestion de copropriétés et d'immeubles.",
      "Développement d'une API REST sécurisée avec Laravel Sanctum pour l'authentification et le contrôle d'accès par rôles.",
      "Création d'une interface utilisateur réactive et responsive en React.js et Tailwind CSS.",
      "Mise en place des modules métier : gestion des copropriétaires, résidents, suivi des paiements, dépenses et dashboards de reporting.",
      "Modélisation et optimisation de la base de données relationnelle MySQL."
    ],
    tags: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "Laravel Sanctum", "API REST", "SaaS"]
  },
  {
    role: "Mio Padre Ristorante | Développeur Frontend Freelance",
    company: "Projet client, Casablanca",
    period: "2026",
    highlights: [
      "Application web responsive avec menu digital interactif pour un restaurant italien haut de gamme.",
      "Développement de l'interface avec React 19, Vite 8 et Tailwind CSS 4.",
      "Animations sur mesure avec Framer Motion (intro de marque élégante, carrousel média infini).",
      "Menu interactif dynamique : recherche, filtres par catégories, détails des ingrédients, temps de préparation et accords mets-vins.",
      "Intégration directe des réservations de table via WhatsApp et navigation Google Maps."
    ],
    tags: ["React 19", "Vite 8", "Tailwind CSS 4", "Framer Motion", "React Router", "JavaScript ES6+"]
  },
  {
    role: "Stage en Informatique",
    company: "Attawfiq Microfinance",
    period: "Avril 2026",
    highlights: [
      "Support technique de premier niveau et assistance aux utilisateurs du réseau d'entreprise.",
      "Diagnostic, maintenance préventive et dépannage des équipements informatiques.",
      "Application et sensibilisation aux consignes de cybersécurité."
    ],
    tags: ["Support IT", "Réseaux", "Cybersécurité", "Maintenance Système"]
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Syndic Management System (SaaS)",
    category: "Full Stack",
    description: "Solution SaaS web centralisée et complète pour la gestion de copropriétés et d'immeubles : résidents, cotisations, dépenses, sécurité et reporting financier.",
    image: "/Syndic.webp",
    tags: ["Laravel", "React.js", "Tailwind CSS", "MySQL", "Laravel Sanctum", "API REST"],
    features: [
      "Conception et développement d'une architecture SaaS multi-copropriétés",
      "API REST sécurisée avec Laravel Sanctum & contrôle d'accès basé sur les rôles",
      "Interface utilisateur réactive et responsive développée avec React.js & Tailwind CSS",
      "Gestion complète : copropriétaires, résidents, suivi des paiements, dépenses & dashboards"
    ],
    github: "https://github.com/MohammedEloudyy/Syndic-Management"
  },
  {
    id: 2,
    title: "Mio Padre Ristorante",
    category: "Frontend",
    description: "Application web responsive premium pour un restaurant italien avec menu digital interactif, animations Framer Motion et système de réservation WhatsApp.",
    image: "/Mio_padre.webp",
    tags: ["React 19", "Vite 8", "Tailwind CSS 4", "Framer Motion", "React Router"],
    features: [
      "Menu digital interactif avec filtres par catégorie, ingrédients & accords mets-vins",
      "Animations fluides avec Framer Motion (intro de marque & carrousel média infini)",
      "Intégration directe des réservations WhatsApp et cartographie Google Maps",
      "Design haut de gamme et 100% responsive sur mobile, tablette et desktop"
    ],
    github: "https://github.com/MohammedEloudyy/Mio_Padre_Ristoranti"
  }
];

export const skillsData = {
  langages: [
    { name: "PHP", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "SQL", level: 88 }
  ],
  frameworks: [
    { name: "Laravel", level: 90 },
    { name: "React.js", level: 92 },
    { name: "React Router", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Bootstrap", level: 85 }
  ],
  backendDb: [
    { name: "API REST", level: 92 },
    { name: "MySQL", level: 90 },
    { name: "Laravel Sanctum", level: 88 },
    { name: "Modélisation UML", level: 88 }
  ],
  tools: [
    { name: "Vite", level: 92 },
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 90 },
    { name: "Jira", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 82 }
  ]
};

export const softSkillsData = [
  "Esprit d'équipe",
  "Autonomie",
  "Rigueur",
  "Résolution de problèmes",
  "Veille technologique"
];

export const languagesData = [
  { name: "Arabe", level: "Langue maternelle", percent: 100 },
  { name: "Français", level: "Niveau intermédiaire", percent: 75 },
  { name: "Anglais", level: "Niveau intermédiaire", percent: 70 }
];

export const interestsData = [
  "Développement Web Full Stack",
  "Architecture SaaS & API REST",
  "Nouvelles Technologies & Veille Tech",
  "Projets Open Source",
  "Lecture & Apprentissage continu"
];

