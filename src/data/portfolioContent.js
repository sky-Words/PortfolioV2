import { Brain, BriefcaseBusiness, Database, Globe, GraduationCap } from "lucide-react";

export const portfolioContent = {
  fr: {
    lang: "FR",
    altLang: "EN",
    nav: [
      { label: "Projets", href: "#projects" },
      { label: "Parcours", href: "#journey" },
      { label: "Compétences", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badgePrimary: "Casablanca",
      badgeSecondary: "IA • Data Science • Full Stack",
      title: "Profil orienté IA, Data Science et produits intelligents",
      description:
        "Je construis des applications qui relient données, APIs et intelligence artificielle pour créer des produits utiles, fiables et clairs pour les utilisateurs.",
      primaryCta: "Me contacter",
      secondaryCta: "Voir mes projets",
      focus: ["IA appliquée", "Data science", "Systèmes de recommandation", "APIs et backend"],
      recruiterCardTitle: "Ce qu'un recruteur voit vite",
      recruiterCardText:
        "Base full stack solide, orientation claire vers l'IA, et expérience sur des projets concrets.",
      stats: [
        { value: "4+", label: "Projets web et IA" },
        { value: "2025-26", label: "Licence Data Science & IA" },
        { value: "3", label: "Langues de travail" },
      ],
    },
    recruiter: {
      kicker: "Pour recruteur",
      title: "Pourquoi mon profil est intéressant pour une équipe produit ou data.",
      points: [
        "Je combine développement applicatif et intérêt réel pour l'IA et la data science.",
        "Je peux contribuer autant sur la logique backend que sur l'intégration d'assistants et de recommandations.",
        "J'apprends vite et je suis déjà positionné sur des projets concrets, pas seulement théoriques.",
      ],
      availabilityTitle: "Recherche",
      availabilityText:
        "Opportunités en IA appliquée, data science junior, backend intelligent ou produits web enrichis par l'IA.",
    },
    intro: {
      kicker: "Profil",
      title: "Une base technique solide, avec un cap clair vers l'intelligence artificielle.",
      description:
        "Mon parcours m'a permis de travailler sur des APIs, des interfaces React, des bases SQL et NoSQL, ainsi que des architectures web complètes. Aujourd'hui, je veux évoluer davantage vers l'analyse de données, les assistants IA, les modèles intelligents et les systèmes de recommandation.",
      location: "Casablanca, Maroc",
      email: "elmehdi.sadki@outlook.fr",
      phone: "0612667045",
    },
    projects: {
      kicker: "Projets",
      title: "Des projets qui montrent ma capacité à relier produit, backend et IA.",
      items: [
        {
          title: "Application Web Médicale Cloud Native",
          meta: "Projet académique · 2025",
          description:
            "Application médicale en microservices avec prise de rendez-vous, consultation, messagerie sécurisée et assistant IA.",
          points: [
            "Assistant IA via LLaMA pour recommandations personnalisées",
            "Backend Express.js, MongoDB et interface React.js",
            "JWT, rôles et orchestration via API Gateway Traefik",
          ],
          featured: true,
        },
        {
          title: "Plateforme de Recherche d'Emploi",
          meta: "NEW DEV Fès · 2025",
          description:
            "Agrégation d'offres avec moteur de recherche, filtres avancés, notifications et recommandations intelligentes.",
          points: [
            "Collecte et affichage des données en temps réel",
            "Logique de recommandation alimentée par l'IA",
          ],
        },
        {
          title: "Moteur de Recherche de Cours",
          meta: "Projet collaboratif · En ligne",
          description:
            "Projet mené avec des étudiants en Master IA pour explorer la recommandation de contenu par apprentissage automatique.",
          points: [
            "Orientation machine learning et personnalisation",
            "Travail collaboratif sur un besoin concret",
          ],
        },
        {
          title: "Khrija",
          meta: "Ark X · Sept. 2025 - Présent",
          description:
            "Plateforme sociale MERN pour organiser des sorties et voyages en groupe avec logique de matchmaking selon les intérêts.",
          points: [
            "APIs RESTful Express.js",
            "Gestion d'événements, préférences et itinéraires",
          ],
        },
      ],
    },
    journey: {
      kicker: "Parcours",
      title: "Formation, expérience terrain et orientation croissante vers l'IA.",
      items: [
        {
          icon: GraduationCap,
          date: "2025 - 2026",
          title: "Licence Professionnelle - Data Science & IA",
          place: "SUPP Management, Fès",
          detail: "Formation en cours, au cœur de mon orientation actuelle.",
        },
        {
          icon: BriefcaseBusiness,
          date: "Sept. 2025 - Présent",
          title: "Développeur MERN Stack - Stage",
          place: "Ark X",
          detail:
            "Développement full stack, APIs robustes et mise en production d'une plateforme sociale.",
        },
        {
          icon: Globe,
          date: "2023 - 2025",
          title: "Développement Digital - Web Full Stack",
          place: "OFPPT Al Adarissa, Fès",
          detail:
            "Base technique solide en développement web, architecture applicative et travail produit.",
        },
      ],
    },
    skills: {
      kicker: "Compétences",
      title: "Les briques que j'utilise pour construire des produits intelligents.",
      groups: [
        {
          title: "IA & Data",
          icon: Brain,
          items: [
            "Chatbots personnalisés",
            "Assistants IA",
            "Systèmes de recommandation",
            "Intégration de modèles",
          ],
        },
        {
          title: "Programmation",
          icon: Database,
          items: ["Python", "SQL", "JavaScript", "PHP"],
        },
        {
          title: "Développement applicatif",
          icon: Globe,
          items: ["React.js", "Express.js", "Laravel", "Symfony"],
        },
        {
          title: "Bases de données",
          icon: Database,
          items: ["MongoDB", "MySQL", "PostgreSQL"],
        },
      ],
    },
    languages: {
      kicker: "Langues",
      title: "Je peux évoluer dans des contextes multilingues.",
      items: ["Arabe — Langue maternelle", "Français — Intermediate", "Anglais — Intermediate"],
    },
    contact: {
      kicker: "Contact",
      title: "Disponible pour des opportunités en IA, data science, backend ou produits web intelligents.",
      email: "elmehdi.sadki@outlook.fr",
      phone: "0612667045",
      linkedin: "linkedin.com/in/elmehdi-sadki",
      linkedinHref: "https://linkedin.com/in/elmehdi-sadki",
    },
  },
  en: {
    lang: "EN",
    altLang: "FR",
    nav: [
      { label: "Projects", href: "#projects" },
      { label: "Journey", href: "#journey" },
      { label: "Skills", href: "#skills" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      badgePrimary: "Casablanca",
      badgeSecondary: "AI • Data Science • Full Stack",
      title: "AI and Data Science oriented developer building useful products",
      description:
        "I build applications that connect data, APIs, and artificial intelligence to create products that are useful, reliable, and clear for end users.",
      primaryCta: "Contact me",
      secondaryCta: "View projects",
      focus: ["Applied AI", "Data science", "Recommendation systems", "APIs and backend"],
      recruiterCardTitle: "What recruiters see quickly",
      recruiterCardText:
        "Strong full-stack base, clear AI direction, and hands-on work on real projects.",
      stats: [
        { value: "4+", label: "Web and AI projects" },
        { value: "2025-26", label: "Data Science & AI degree" },
        { value: "3", label: "Working languages" },
      ],
    },
    recruiter: {
      kicker: "For recruiters",
      title: "Why this profile can be valuable for a product, AI, or data-driven team.",
      points: [
        "I combine application development with a real focus on AI and data science.",
        "I can contribute to backend logic as well as AI assistants and recommendation features.",
        "I learn fast and already work on practical projects, not only classroom exercises.",
      ],
      availabilityTitle: "Looking for",
      availabilityText:
        "Opportunities in applied AI, junior data science, intelligent backend, or web products enhanced by AI.",
    },
    intro: {
      kicker: "Profile",
      title: "A solid technical base with a clear direction toward artificial intelligence.",
      description:
        "My background includes APIs, React interfaces, SQL and NoSQL databases, and complete web architectures. I now want to move deeper into data analysis, AI assistants, intelligent models, and recommendation systems.",
      location: "Casablanca, Morocco",
      email: "elmehdi.sadki@outlook.fr",
      phone: "0612667045",
    },
    projects: {
      kicker: "Projects",
      title: "Projects that show how I connect product thinking, backend engineering, and AI.",
      items: [
        {
          title: "Cloud Native Medical Web Application",
          meta: "Academic project · 2025",
          description:
            "Microservices-based medical platform with online appointments, consultation, secure messaging, and an AI assistant.",
          points: [
            "LLaMA-based AI assistant for personalized recommendations",
            "Express.js backend, MongoDB, and React.js interface",
            "JWT, role management, and Traefik API Gateway orchestration",
          ],
          featured: true,
        },
        {
          title: "Job Search Platform",
          meta: "NEW DEV Fez · 2025",
          description:
            "Job aggregation platform with search engine, advanced filters, notifications, and intelligent recommendations.",
          points: [
            "Real-time data collection and display",
            "Recommendation logic powered by AI",
          ],
        },
        {
          title: "Course Search Engine",
          meta: "Collaborative project · Online",
          description:
            "Project with AI master's students exploring content recommendation through machine learning.",
          points: [
            "Machine learning and personalization focus",
            "Collaborative work around a practical use case",
          ],
        },
        {
          title: "Khrija",
          meta: "Ark X · Sep 2025 - Present",
          description:
            "MERN social platform for group outings and travel with interest-based matchmaking logic.",
          points: ["RESTful APIs with Express.js", "Events, preferences, and itinerary management"],
        },
      ],
    },
    journey: {
      kicker: "Journey",
      title: "Education, real-world experience, and a stronger move toward AI.",
      items: [
        {
          icon: GraduationCap,
          date: "2025 - 2026",
          title: "Professional Degree - Data Science & AI",
          place: "SUPP Management, Fez",
          detail: "Currently ongoing and central to my present direction.",
        },
        {
          icon: BriefcaseBusiness,
          date: "Sep 2025 - Present",
          title: "MERN Stack Developer - Internship",
          place: "Ark X",
          detail:
            "Full-stack development, robust APIs, and product delivery on a social platform.",
        },
        {
          icon: Globe,
          date: "2023 - 2025",
          title: "Digital Development - Full Stack Web",
          place: "OFPPT Al Adarissa, Fez",
          detail:
            "Strong technical base in web development, application architecture, and product work.",
        },
      ],
    },
    skills: {
      kicker: "Skills",
      title: "The building blocks I use to create intelligent digital products.",
      groups: [
        {
          title: "AI & Data",
          icon: Brain,
          items: ["Custom chatbots", "AI assistants", "Recommendation systems", "Model integration"],
        },
        {
          title: "Programming",
          icon: Database,
          items: ["Python", "SQL", "JavaScript", "PHP"],
        },
        {
          title: "Application development",
          icon: Globe,
          items: ["React.js", "Express.js", "Laravel", "Symfony"],
        },
        {
          title: "Databases",
          icon: Database,
          items: ["MongoDB", "MySQL", "PostgreSQL"],
        },
      ],
    },
    languages: {
      kicker: "Languages",
      title: "Comfortable working in multilingual environments.",
      items: ["Arabic — Native", "French — Intermediate", "English — Intermediate"],
    },
    contact: {
      kicker: "Contact",
      title: "Open to opportunities in AI, data science, backend, and intelligent web products.",
      email: "elmehdi.sadki@outlook.fr",
      phone: "0612667045",
      linkedin: "linkedin.com/in/elmehdi-sadki",
      linkedinHref: "https://linkedin.com/in/elmehdi-sadki",
    },
  },
};
