// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: "web" | "mobile" | "backend" | "fullstack";
}

export interface Skill {
  name: string;
  icon?: string;
  category: "frontend" | "backend" | "mobile" | "devops" | "database" | "other";
}

export interface Experience {
  id: string;
  company: string;
  icon?: string;
  role: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  bio: string;
  shortBio: string;
  avatarUrl: string;
  resumeUrl?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo: PersonalInfo = {
  name: "Barak Goren",
  title: "Full Stack Developer (Front-end Focus)",
  email: "barak.goren6@gmail.com",
  location: "Mazkeret Batya, Israel",
  shortBio:
    "Full Stack Developer with strong front-end expertise, building scalable, production-grade web and mobile systems.",
  bio: `I'm a Full Stack Developer with a strong front-end focus, working in production environments across web and mobile.

I specialize in React and Next.js with TypeScript, building maintainable component architectures, optimizing performance, and handling complex state at scale (Redux / Zustand). On the backend side, I build and maintain REST APIs and data flows, enforce runtime validation with Zod, and work hands-on with Prisma and relational databases (PostgreSQL / MariaDB) including schema design, migrations, and query optimization.

I’ve shipped multiple live mobile app versions with major functional and architectural changes, implemented payments/subscriptions in production, and delivered features for large-scale systems serving hundreds of thousands of users.`,
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    // Update these to your real URLs if needed
    github: "https://github.com/barakgoren",
    linkedin: "https://linkedin.com/in/barakgoren",
  },
};

// ============================================
// SKILLS
// ============================================
export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Zustand", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Figma → Pixel-Perfect UI", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Zod (Runtime Validation)", category: "backend" },
  { name: "C# / ASP.NET Core", category: "backend" },

  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Expo", category: "mobile" },
  { name: "Mobile Payments & Subscriptions", category: "mobile" },

  // Database
  { name: "Prisma", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MariaDB", category: "database" },
  { name: "Schema Design & Migrations", category: "database" },

  // DevOps / Workflow
  { name: "Git", category: "devops" },

  // Other
  { name: "Data Scraping & Ingestion", category: "other" },
  { name: "Production Debugging w/ Customers", category: "other" },
  { name: "System & Business Logic Analysis", category: "other" },
];

// ============================================
// PROJECTS
// (Resume-aligned: based on shipped production work described there)
// ============================================
export const projects: Project[] = [
  {
    id: "oversight-prod-systems",
    title: "Large-Scale Production Systems",
    description:
      "Delivered end-to-end features for high-traffic production systems serving 300,000+ users and generating 1,000+ leads/month.",
    longDescription: `Built and shipped complex product features across frontend and backend layers in production environments.
Worked through challenging business logic and system edge cases, including customer-facing debugging and solution design.`,
    image: "/projects/production-systems.jpg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Zustand",
      "Prisma",
      "PostgreSQL/MariaDB",
      "Zod",
    ],
    featured: true,
    category: "fullstack",
  },
  {
    id: "mobile-app-shipping",
    title: "Mobile App Shipping & Architecture Changes",
    description:
      "Shipped multiple versions of live mobile apps with major functional and architectural changes for 2,000+ active users.",
    longDescription: `Owned and delivered production mobile updates end-to-end, including UI implementation, state management, validation,
and release execution of large changes while keeping stability for active users.`,
    image: "/projects/mobile-shipping.jpg",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Zustand",
      "Zod",
      "Payments/Subscriptions",
    ],
    featured: true,
    category: "mobile",
  },
  {
    id: "data-migration-ingestion",
    title: "Data Migration: Scraping & Ingestion Pipeline",
    description:
      "Performed large-scale data scraping and ingestion to migrate substantial datasets into new database systems with complex transformations.",
    longDescription: `Implemented ingestion flows that handled data transformation, integrity constraints, and migration into new database schemas.
Focused on correctness, consistency, and reliability under real-world messy data.`,
    image: "/projects/data-migration.jpg",
    technologies: ["Node.js", "TypeScript", "Prisma", "PostgreSQL/MariaDB"],
    featured: false,
    category: "backend",
  },
  {
    id: "pixel-perfect-ui",
    title: "Pixel-Accurate UI Implementation",
    description:
      "Implemented pixel-perfect interfaces from detailed Figma designs, ensuring strict adherence to client requirements.",
    longDescription: `Delivered high-precision UI work across production applications, translating design specs into clean, maintainable components
while keeping performance and scalability in mind.`,
    image: "/projects/pixel-perfect-ui.jpg",
    technologies: ["React", "Next.js", "TypeScript", "HTML/CSS"],
    featured: false,
    category: "web",
  },
];

// ============================================
// EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    id: "exp-oversight",
    company: "Oversight Group",
    icon: "/logos/oversight-logo.png",
    role: "Full Stack Developer",
    startDate: "October 2024",
    endDate: "Present",
    description:
      "End-to-end feature development across web and mobile applications in production environments.",
    achievements: [
      "Shipped multiple major app versions with functional and architectural changes to live mobile apps serving 2,000+ active users",
      "Delivered complex features to production systems serving 300,000+ users and handling 1,000+ leads/month",
      "Performed large-scale data scraping and ingestion to migrate substantial datasets into new database systems, including complex transformations and integrity constraints",
      "Analyzed complex system and business logic issues directly with customers and designed technical solutions to meet requirements",
      "Implemented pixel-accurate UI from detailed Figma designs with strict adherence to design requirements",
    ],
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
    role: "QA Engineer",
    startDate: "July",
    endDate: "October 2024",
    description:
      "Conducted manual testing and quality assurance for web systems and applications to ensure reliability and performance prior to production releases.",
    achievements: [
      "Performed comprehensive manual testing on web systems and applications, including identification of complex issues.",
      "Accurately documented bugs, reproduction steps, and impact analysis.",
      "Collaborated closely with developers to validate fixes and ensure system stability prior to production releases.",
      "Contributed to improving quality processes and reducing recurring issues.",
    ],
    technologies: [],
  },
];

// ============================================
// NAVIGATION
// ============================================
export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];

// ============================================
// HELPER FUNCTIONS
// ============================================
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.id === slug);
export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((s) => s.category === category);
