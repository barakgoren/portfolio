// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// Translatable strings are in messages/en.json and messages/he.json
// ============================================

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "mobile" | "devops" | "database" | "other";
}

// ============================================
// PERSONAL INFORMATION (non-translatable parts only)
// Translatable fields (name, title, bio, location, etc.) are in messages JSON
// ============================================
export const personalInfo = {
  email: "barak.goren6@gmail.com",
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/files/barak-goren-dev-2026.pdf",
  socialLinks: {
    github: "https://github.com/barakgoren",
    linkedin: "https://www.linkedin.com/in/barakgoren/",
  },
};

// ============================================
// SKILLS
// ============================================
export const skills: Skill[] = [
  // Frontend
  { name: "React (Advanced)", category: "frontend" },
  { name: "Next.js (Advanced)", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Complex State: Redux", category: "frontend" },
  { name: "Complex State: Zustand", category: "frontend" },
  { name: "Performance Optimization", category: "frontend" },
  { name: "Maintainable Component Architecture", category: "frontend" },

  // Backend
  { name: "RESTful APIs (Layered)", category: "backend" },
  { name: "Zod Runtime Validation", category: "backend" },
  { name: "C# / ASP.NET Core", category: "backend" },

  // Mobile
  { name: "React Native (TypeScript)", category: "mobile" },
  { name: "Expo", category: "mobile" },
  { name: "Mobile Payments & Subscriptions", category: "mobile" },

  // Database
  { name: "Prisma ORM", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MariaDB", category: "database" },
  { name: "Schema Design & Migrations", category: "database" },
  { name: "Query Optimization", category: "database" },
];

// ============================================
// PROJECTS (structural data only)
// Translatable fields (title, description, longDescription) come from messages JSON
// ============================================
export interface ProjectStructural {
  id: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "fullstack";
}

export const projectsStructural: ProjectStructural[] = [
  {
    id: "smart-ats-system",
    image: "/images/smart-ats-hero.png",
    technologies: [
      "Next.js",
      "Express",
      "Cloudflare R2",
      "Scalar (OpenAPI/Swagger)",
      "TypeScript",
      "OpenAI GPT-4",
      "SWR",
      "React",
      "Tailwind CSS",
      "Zustand",
      "MongoDB/Mongoose",
      "Zod",
      "JWT",
    ],
    featured: true,
    category: "fullstack",
  },
  {
    id: "list-share",
    image: "/images/list-share-hero.png",
    technologies: [
      "Expo 54",
      "React Native",
      "Prisma",
      "TypeScript",
      "Expo Router v6",
      "NativeWind",
      "NativeBase",
      "Zustand",
      "SWR",
      "Socket.io / socket.io-client",
      "Express",
      "PostgreSQL",
      "Cloudinary",
      "Zod",
      "JWT",
      "Swagger",
    ],
    featured: true,
    category: "mobile",
  },
  {
    id: "data-migration-ingestion",
    image: "/projects/data-migration.jpg",
    technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL/MariaDB"],
    featured: false,
    category: "backend",
  },
  {
    id: "pixel-perfect-ui",
    image: "/projects/pixel-perfect-ui.jpg",
    technologies: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    featured: false,
    category: "web",
  },
];

// ============================================
// EXPERIENCE (structural data only)
// Translatable fields (role, description, achievements) come from messages JSON
// ============================================
export interface ExperienceStructural {
  id: string;
  company: string;
  icon?: string;
  startDate: string;
  endDate: string;
  technologies: string[];
}

export const experiencesStructural: ExperienceStructural[] = [
  {
    id: "exp-oversight",
    company: "Oversight Group",
    icon: "/logos/oversight-logo.png",
    startDate: "October 2024",
    endDate: "Present",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "React Native",
      "Expo",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "MariaDB",
      "Zod",
      "C#",
      "ASP.NET Core",
    ],
  },
  {
    id: "exp-oversight-1",
    company: "Oversight Group",
    icon: "/logos/oversight-logo.png",
    startDate: "July",
    endDate: "October 2024",
    technologies: [],
  },
];

// ============================================
// NAVIGATION
// Navigation labels come from messages JSON (nav.home, nav.about, etc.)
// ============================================
export const navigationItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "projects", href: "/projects" },
  { key: "contact", href: "#contact" },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export const getFeaturedProjectsStructural = () =>
  projectsStructural.filter((p) => p.featured);
export const getProjectStructuralBySlug = (slug: string) =>
  projectsStructural.find((p) => p.id === slug);
