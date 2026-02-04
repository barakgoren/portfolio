// ============================================
// PORTFOLIO DATA - Edit this file to update your portfolio content
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
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
  resumeUrl: "/files/barak-goren-dev-2026.pdf",
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
// PROJECTS
// (Resume-aligned: based on shipped production work described there)
// ============================================
export const projects: Project[] = [
  {
    id: "smart-ats-system",
    title: "Smart ATS Platform (Next.js + CV API)",
    description:
      "Next.js App Router front-end with applicant comparisons, templates, and CV previews, powered by an Express/Mongo CV analysis API using GPT-4 and R2-backed uploads.",
    longDescription: `Built the Smart ATS platform end-to-end: a Next.js 15 UI with applicant workspaces, template library, multi-step dialogs, and responsive theming (light/dark).
Backed by the Express/Mongo API that handles users, companies, applications, JWT auth, Swagger docs, GPT-4 CV parsing with PDF extraction, and Cloudflare R2 uploads (single/multi, signed URLs, health checks).`,
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
    title: "List-Share (Expo App + Realtime API)",
    description:
      "Expo Router mobile app with Google/Apple/email auth, realtime list collaboration, push notifications, and Cloudinary-backed media on a Prisma/Postgres API.",
    longDescription: `Built the List-Share product: Expo 54 (React Native 0.81, React 19) app with typed routes, NativeWind/NativeBase UI, Poppins-driven design, and socket.io-client realtime presence.
API side: Express + Prisma/PostgreSQL with socket.io events, list sharing/roles, cron cleanup, JWT-protected routes, Google/Apple sign-in, Cloudinary uploads (single/multiple, visibility/profile), and API docs via Scalar/Swagger with privacy/support public pages.`,
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
