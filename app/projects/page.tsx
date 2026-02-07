import { Metadata } from "next";
import { projects, personalInfo } from "@/data/portfolio";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/MovingBorder";

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore ${personalInfo.name}'s portfolio of web, mobile, and backend projects showcasing expertise in modern technologies.`,
  openGraph: {
    title: `Projects | ${personalInfo.name}`,
    description: `A collection of projects built by ${personalInfo.name}`,
  },
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  // Return a UI that says that the projects page is under construction and will be available soon. Include a link to the home page and a button to contact me.
  return (
    <main className="min-h-screen bg-neutral-950 pt-20 pb-32 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-4">
        Projects Coming Soon
      </h1>
      <p className="text-neutral-400 text-lg mb-8">
        I&apos;m currently working on adding my projects to the portfolio. Stay
        tuned for updates!
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          Go Back Home
        </Link>
        <Link href="/#contact">
          <Button className="px-6 py-3">
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}

// return (
//   <main className="min-h-screen bg-neutral-950 pt-20 pb-32">
//     <div className="max-w-6xl mx-auto px-4">
//       {/* Header */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
//           Projects
//         </h1>
//         <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
//           A collection of projects that showcase my skills and experience in building modern applications.
//         </p>
//       </div>

//       {/* Featured Projects */}
//       {featuredProjects.length > 0 && (
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
//             <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
//             Featured
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             {featuredProjects.map((project) => (
//               <ProjectCard key={project.id} project={project} featured />
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Other Projects */}
//       {otherProjects.length > 0 && (
//         <section>
//           <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
//             <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
//             Other Projects
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {otherProjects.map((project) => (
//               <ProjectCard key={project.id} project={project} />
//             ))}
//           </div>
//         </section>
//       )}

//       {/* CTA */}
//       <section className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700">
//         <h3 className="text-xl font-bold text-white mb-2">
//           Have a project in mind?
//         </h3>
//         <p className="text-neutral-400 mb-6">
//           Let&apos;s discuss how I can help bring your ideas to life.
//         </p>
//         <Link href="/#contact">
//           <Button className="px-8 py-3">
//             Get In Touch
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </Link>
//       </section>
//     </div>
//   </main>
// );

function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projects)[0];
  featured?: boolean;
}) {
  const categoryColors = {
    web: "bg-blue-500/20 text-blue-400",
    mobile: "bg-green-500/20 text-green-400",
    backend: "bg-purple-500/20 text-purple-400",
    fullstack: "bg-orange-500/20 text-orange-400",
  };

  return (
    <div
      className={`group p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all ${
        featured ? "md:p-8" : ""
      }`}
    >
      {/* Image placeholder */}
      <div className="aspect-video rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="absolute top-3 left-3">
          <span
            className={`px-2 py-1 text-xs rounded-full ${categoryColors[project.category]}`}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-neutral-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-neutral-800 rounded text-neutral-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 text-xs bg-neutral-800 rounded text-neutral-500">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        )}
        {project.githubUrl && (
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            Source
          </Link>
        )}
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors ml-auto"
        >
          View Details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
