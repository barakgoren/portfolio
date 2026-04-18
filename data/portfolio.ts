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
export interface GalleryImageStructural {
  id: string;
  src: string;
  section: string;
}

export interface ProjectContributor {
  name: string;
  role: string;
  github?: string;
  linkedin?: string;
}

export interface ProjectStructural {
  id: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "Web" | "Mobile" | "Backend" | "Full Stack" | "AI Full Stack";
  gallery?: GalleryImageStructural[];
  gallerySections?: string[];
  techCategories?: {
    frontend?: string[];
    backend?: string[];
    shared?: string[];
    testing?: string[];
  };
  featureKeys?: string[];
  contributors?: ProjectContributor[];
}

export const projectsStructural: ProjectStructural[] = [
  {
    id: "claver-hr",
    image: "/images/smart-ats-hero.png",
    technologies: [
      "Next.js 16", "React 19", "Tailwind CSS 4", "Radix UI",
      "TanStack Query v5", "Recharts", "TypeScript 5",
      "Express.js", "Prisma 7", "PostgreSQL", "JWT", "bcryptjs",
      "Cloudflare R2", "Resend", "Handlebars", "Vitest", "Playwright", "Zod",
    ],
    featured: true,
    category: "AI Full Stack",
    techCategories: {
      frontend: ["Next.js 16", "React 19", "Tailwind CSS 4", "Radix UI", "TanStack Query v5", "Recharts"],
      backend: ["Express.js", "Prisma 7", "PostgreSQL", "JWT + bcryptjs", "Cloudflare R2", "Resend", "Handlebars"],
      shared: ["TypeScript 5", "Zod"],
      testing: ["Vitest", "Playwright"],
    },
    featureKeys: [
      "multiTenancy", "dynamicForms", "hiringPipeline",
      "fileStorage", "email", "emailTemplates",
      "jwtAuth", "aiAnalytics", "globalSearch", "csvExport",
    ],
    gallerySections: ["globals", "public", "roles", "applications", "analytics"],
    gallery: [
      { id: "global-search", src: "/projects-images/claver-hr/global-search.png", section: "globals" },
      { id: "global-usage", src: "/projects-images/claver-hr/global-usage.png", section: "globals" },
      { id: "plan-restrictions", src: "/projects-images/claver-hr/plan-restrictions.png", section: "globals" },
      { id: "public-company-page", src: "/projects-images/claver-hr/public-company-page.png", section: "public" },
      { id: "public-role-page", src: "/projects-images/claver-hr/public-role-page.png", section: "public" },
      { id: "role-edit", src: "/projects-images/claver-hr/role-edit.png", section: "roles" },
      { id: "role-piplines", src: "/projects-images/claver-hr/role-piplines.png", section: "roles" },
      { id: "role-scoring", src: "/projects-images/claver-hr/role-scoring.png", section: "roles" },
      { id: "applicant-page", src: "/projects-images/claver-hr/applicant-page.png", section: "applications" },
      { id: "applicant-page-2", src: "/projects-images/claver-hr/applicant-page-2.png", section: "applications" },
      { id: "ai-analyze-page", src: "/projects-images/claver-hr/ai-analyze-page.png", section: "analytics" },
    ],
    contributors: [
      {
        name: "Barak Goren",
        role: "Full Stack Developer",
        github: "https://github.com/barakgoren",
        linkedin: "https://www.linkedin.com/in/barakgoren/",
      },
    ],
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
    category: "Mobile",
  },
  // {
  //   id: "data-migration-ingestion",
  //   image: "/projects/data-migration.jpg",
  //   technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL/MariaDB"],
  //   featured: false,
  //   category: "Backend",
  // },
  // {
  //   id: "pixel-perfect-ui",
  //   image: "/projects/pixel-perfect-ui.jpg",
  //   technologies: ["React", "Next.js", "TypeScript", "HTML/CSS"],
  //   featured: false,
  //   category: "Web",
  // },
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
    id: "exp-moveo",
    company: "Moveo Group",
    icon: "/logos/moveo-logo.svg",
    startDate: "March 2026",
    endDate: "Present",
    technologies: [],
  },
  {
    id: "exp-oversight",
    company: "Oversight Group",
    icon: "/logos/oversight-logo.png",
    startDate: "October 2024",
    endDate: "March 2026",
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
