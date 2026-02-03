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
  title: "Senior Software Engineer",
  email: "contact@barakgoren.dev",
  location: "Israel",
  shortBio:
    "Senior Software Engineer specializing in full-stack development, mobile applications, and scalable backend systems.",
  bio: `I'm a passionate Senior Software Engineer with extensive experience in building modern web applications, 
mobile apps, and robust backend systems. I specialize in React, TypeScript, Node.js, and React Native, 
with a strong focus on creating performant, scalable, and maintainable solutions.

Throughout my career, I've worked on diverse projects ranging from startup MVPs to enterprise-scale applications, 
always striving to deliver exceptional user experiences while maintaining clean, efficient code.`,
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/barakgoren",
    linkedin: "https://linkedin.com/in/barakgoren",
    twitter: "https://twitter.com/barakgoren",
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
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Redux", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "GraphQL", category: "backend" },

  // Mobile
  { name: "React Native", category: "mobile" },
  { name: "Expo", category: "mobile" },
  { name: "iOS", category: "mobile" },
  { name: "Android", category: "mobile" },

  // Database
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Prisma", category: "database" },

  // DevOps
  { name: "Docker", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Vercel", category: "devops" },

  // Other
  { name: "Agile/Scrum", category: "other" },
  { name: "System Design", category: "other" },
  { name: "Testing", category: "other" },
];

// ============================================
// PROJECTS
// ============================================
export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    longDescription: `Built a comprehensive e-commerce platform featuring real-time inventory management, 
secure payment processing with Stripe, and a powerful admin dashboard. The platform handles thousands 
of daily transactions with 99.9% uptime.`,
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/barakgoren/ecommerce",
    featured: true,
    category: "fullstack",
  },
  {
    id: "project-2",
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication and real-time transactions.",
    longDescription: `Developed a cross-platform mobile banking application with biometric authentication, 
real-time transaction tracking, and push notifications. Implemented robust security measures 
including encryption and secure API communication.`,
    image: "/projects/banking.jpg",
    technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Firebase"],
    featured: true,
    category: "mobile",
  },
  {
    id: "project-3",
    title: "Real-time Collaboration Tool",
    description:
      "A collaborative workspace with real-time document editing, video calls, and team management.",
    longDescription: `Created a real-time collaboration platform similar to Notion meets Zoom. 
Features include live document co-editing, video conferencing, task management, 
and team workspace organization.`,
    image: "/projects/collaboration.jpg",
    technologies: ["React", "TypeScript", "WebSocket", "WebRTC", "PostgreSQL"],
    liveUrl: "https://example.com",
    featured: true,
    category: "web",
  },
  {
    id: "project-4",
    title: "Microservices API Gateway",
    description:
      "A scalable API gateway handling authentication, rate limiting, and service orchestration.",
    longDescription: `Architected and built a high-performance API gateway for microservices architecture. 
Handles JWT authentication, rate limiting, request routing, and service discovery 
with support for millions of daily requests.`,
    image: "/projects/api-gateway.jpg",
    technologies: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL"],
    githubUrl: "https://github.com/barakgoren/api-gateway",
    featured: false,
    category: "backend",
  },
  {
    id: "project-5",
    title: "Health & Fitness Tracker",
    description:
      "A mobile app for tracking workouts, nutrition, and health metrics with AI-powered insights.",
    longDescription: `Built a comprehensive health tracking mobile app with workout logging, 
nutrition tracking, sleep analysis, and AI-powered health insights. 
Integrates with wearable devices and health APIs.`,
    image: "/projects/fitness.jpg",
    technologies: ["React Native", "TypeScript", "Python", "TensorFlow", "Firebase"],
    liveUrl: "https://example.com",
    featured: false,
    category: "mobile",
  },
  {
    id: "project-6",
    title: "Developer Portfolio Template",
    description:
      "An open-source, customizable portfolio template for developers with modern animations.",
    longDescription: `Created this very portfolio template as an open-source project. 
Features modern animations, dark/light mode, SEO optimization, 
and easy customization through a single data file.`,
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://barakgoren.dev",
    githubUrl: "https://github.com/barakgoren/portfolio",
    featured: false,
    category: "web",
  },
];

// ============================================
// EXPERIENCE
// ============================================
export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Company",
    role: "Senior Software Engineer",
    startDate: "2023",
    endDate: "Present",
    description:
      "Leading development of core platform features and mentoring junior developers.",
    achievements: [
      "Led migration of legacy system to modern microservices architecture",
      "Reduced API response times by 60% through optimization",
      "Mentored team of 5 junior developers",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "exp-2",
    company: "Startup Inc",
    role: "Full Stack Developer",
    startDate: "2021",
    endDate: "2023",
    description:
      "Built and maintained multiple web and mobile applications from scratch.",
    achievements: [
      "Developed MVP that secured $2M in seed funding",
      "Built cross-platform mobile app with 50K+ downloads",
      "Implemented real-time features using WebSocket",
      "Optimized database queries improving performance by 40%",
    ],
    technologies: ["React Native", "Next.js", "Node.js", "MongoDB", "Firebase"],
  },
  {
    id: "exp-3",
    company: "Digital Agency",
    role: "Frontend Developer",
    startDate: "2019",
    endDate: "2021",
    description:
      "Developed responsive web applications for various clients across industries.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Introduced component library reducing development time by 30%",
      "Improved website performance scores from 60 to 95+",
      "Led adoption of TypeScript across the team",
    ],
    technologies: ["React", "TypeScript", "Vue.js", "SCSS", "GraphQL"],
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
export const getProjectBySlug = (slug: string) => projects.find((p) => p.id === slug);
export const getSkillsByCategory = (category: Skill["category"]) =>
  skills.filter((s) => s.category === category);
