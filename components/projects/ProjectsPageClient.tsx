"use client";

import { projectsStructural, type ProjectStructural } from "@/data/portfolio";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Star } from "lucide-react";
import { Spotlight } from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "Web": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Mobile": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Backend": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Full Stack": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "AI Full Stack": "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsPageClient() {
  const t = useTranslations("projectsPage");
  const td = useTranslations("data.projects");

  const featuredProjects = projectsStructural.filter((p) => p.featured);
  const otherProjects = projectsStructural.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <div className="relative overflow-hidden pt-28 pb-20 text-center px-4">
        <Spotlight
          className="-top-40 left-0 md:left-60 hidden dark:block"
          fill="white"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_40%,black)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            {t("projectsCount", { count: projectsStructural.length })}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-5"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("description")}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-40">
        {/* Featured */}
        {featuredProjects.length > 0 && (
          <section className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                {t("featuredSection")}
              </h2>
              <div className="flex-1 h-px bg-neutral-800" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  t={t}
                  td={td}
                  featured
                />
              ))}
            </motion.div>
          </section>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neutral-400">
                {t("otherProjects")}
              </h2>
              <div className="flex-1 h-px bg-neutral-800" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {otherProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  t={t}
                  td={td}
                />
              ))}
            </motion.div>
          </section>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center p-10 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/60 to-neutral-950"
        >
          <p className="text-2xl font-semibold text-white mb-3">
            {t("haveProjectInMind")}
          </p>
          <p className="text-neutral-400 mb-8 max-w-md mx-auto">
            {t("haveProjectDescription")}
          </p>
          <Link href="/#contact">
            <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/20">
              {t("getInTouch")}
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  t,
  td,
  featured = false,
}: {
  project: ProjectStructural;
  t: ReturnType<typeof useTranslations>;
  td: ReturnType<typeof useTranslations>;
  featured?: boolean;
}) {
  const visibleTechs = project.technologies.slice(0, 5);
  const hiddenCount = project.technologies.length - visibleTechs.length;
  const imgH = featured ? "h-52" : "h-40";

  return (
    <motion.div variants={cardVariants}>
      <Link href={`/projects/${project.id}`} className="block group h-full">
        {/*
         * Single unified card — no inner seams.
         * The image is absolutely pinned to the top; the content is padded
         * below it. A gradient overlay fades image → card-bg color over that
         * same top zone, so there is no hard edge between image and content.
         */}
        <div
          className={cn(
            "relative h-full rounded-2xl border bg-neutral-900 overflow-hidden",
            "transition-all duration-300",
            "group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.55)] group-hover:border-neutral-600",
            featured ? "border-neutral-700/80" : "border-neutral-800",
          )}
        >
          {/* ── Image layer (absolutely positioned, top-flush) ── */}
          <div className={cn("absolute inset-x-0 top-0", imgH)}>
            {project.image ? (
              <Image
                src={project.image}
                alt={td(`${project.id}.title`)}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30" />
            )}
          </div>

          {/*
           * ── Gradient layer ──
           * Covers the exact same zone as the image.
           * Fades from transparent (top) → bg-neutral-900 (bottom).
           * Bottom colour === card bg → zero visible edge.
           */}
          <div
            className={cn("absolute inset-x-0 top-0 pointer-events-none h-56 group-hover:scale-110 transition-transform duration-500 ")}
            style={{
              background:
                "linear-gradient(to bottom, transparent 20%, rgb(23 23 23 / 0.5) 60%, rgb(23 23 23) 90%)",
            }}
          />

          {/* ── Badges (pinned over the image) ── */}
          <div className="absolute top-3 inset-x-3 flex items-start justify-between z-10 pointer-events-none">
            {project.featured ? (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-400/20 border border-purple-400/30 backdrop-blur-sm">
                <span className="text-xs font-medium text-purple-400">
                  {t("featuredSection")}
                </span>
              </div>
            ) : (
              <div />
            )}
            <span
              className={cn(
                "px-2.5 py-1 text-xs rounded-full border backdrop-blur-sm font-medium",
                categoryColors[project.category] ?? categoryColors.web,
              )}
            >
              {project.category}
            </span>
          </div>

          {/* ── Content (padded below the image area) ── */}
          <div className={cn("relative z-10", imgH)}>
            {/* intentional spacer — pushes content below the image */}
          </div>
          <div className="relative z-10 p-5">
            <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-blue-300 transition-colors">
              {td(`${project.id}.title`)}
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {td(`${project.id}.description`)}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {visibleTechs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-neutral-800 rounded-md text-neutral-400 border border-neutral-700/50"
                >
                  {tech}
                </span>
              ))}
              {hiddenCount > 0 && (
                <span className="px-2 py-0.5 text-xs bg-neutral-800 rounded-md text-neutral-500 border border-neutral-700/50">
                  +{hiddenCount}
                </span>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-neutral-400" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                  >
                    <Github className="h-3.5 w-3.5 text-neutral-400" />
                  </a>
                )}
              </div>

              <span className="flex items-center gap-1.5 text-sm text-blue-400 group-hover:text-blue-300 transition-colors font-medium">
                {t("viewDetails")}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
