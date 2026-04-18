"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Star,
  Users,
  Search,
  Shield,
  Cloud,
  Mail,
  FileText,
  GitBranch,
  BarChart3,
  Download,
  Building2,
  Sliders,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { type ProjectStructural } from "@/data/portfolio";

// ----- Section nav hook -----
function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.15, rootMargin: "-80px 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

// ----- Feature icon map -----
const featureIcons: Record<string, React.ReactNode> = {
  multiTenancy: <Building2 className="h-5 w-5" />,
  dynamicForms: <Sliders className="h-5 w-5" />,
  hiringPipeline: <GitBranch className="h-5 w-5" />,
  fileStorage: <Cloud className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
  emailTemplates: <FileText className="h-5 w-5" />,
  jwtAuth: <Shield className="h-5 w-5" />,
  aiAnalytics: <Brain className="h-5 w-5" />,
  globalSearch: <Search className="h-5 w-5" />,
  csvExport: <Download className="h-5 w-5" />,
};

// ----- Tech category colors -----
const techCategoryColors: Record<
  string,
  { border: string; bg: string; dot: string; label: string }
> = {
  frontend: {
    border: "border-blue-500/25",
    bg: "bg-blue-500/5",
    dot: "bg-blue-500",
    label: "text-blue-400",
  },
  backend: {
    border: "border-purple-500/25",
    bg: "bg-purple-500/5",
    dot: "bg-purple-500",
    label: "text-purple-400",
  },
  shared: {
    border: "border-emerald-500/25",
    bg: "bg-emerald-500/5",
    dot: "bg-emerald-500",
    label: "text-emerald-400",
  },
  testing: {
    border: "border-orange-500/25",
    bg: "bg-orange-500/5",
    dot: "bg-orange-500",
    label: "text-orange-400",
  },
};

// ----- Main component -----
interface Props {
  project: ProjectStructural;
}

const SECTION_KEYS = ["overview", "techStack", "contributors", "description", "gallery"] as const;

export function ProjectDetailClient({ project }: Props) {
  const t = useTranslations("projectDetail");
  const td = useTranslations("data.projects");

  // Build visible sections dynamically
  const sections = SECTION_KEYS.filter((key) => {
    if (key === "contributors") return (project.contributors?.length ?? 0) > 0;
    if (key === "gallery") return (project.gallery?.length ?? 0) > 0;
    if (key === "techStack") return !!project.techCategories;
    return true;
  });

  const sectionIds = sections.map((k) => (k === "techStack" ? "tech-stack" : k));
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // Gallery state
  const [galleryFilter, setGalleryFilter] = useState<string>("all");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredImages = galleryFilter === "all"
    ? (project.gallery ?? [])
    : (project.gallery ?? []).filter((img) => img.section === galleryFilter);

  const selectedImage = filteredImages[selectedIdx] ?? filteredImages[0];

  const handleFilterChange = (filter: string) => {
    setGalleryFilter(filter);
    setSelectedIdx(0);
  };

  const prevImage = () =>
    setSelectedIdx((i) => (i === 0 ? filteredImages.length - 1 : i - 1));
  const nextImage = () =>
    setSelectedIdx((i) => (i === filteredImages.length - 1 ? 0 : i + 1));

  // Scroll active thumbnail into view
  // useEffect(() => {
  //   thumbnailRefs.current[selectedIdx]?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "nearest",
  //     inline: "center",
  //   });
  // }, [selectedIdx]);

  // Keyboard nav for gallery
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (filteredImages.length === 0) return;
      if (e.key === "ArrowLeft")
        setSelectedIdx((i) => (i === 0 ? filteredImages.length - 1 : i - 1));
      if (e.key === "ArrowRight")
        setSelectedIdx((i) => (i === filteredImages.length - 1 ? 0 : i + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [filteredImages.length]);

  const categoryColors: Record<string, string> = {
    web: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    mobile: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    backend: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    fullstack: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  };

  return (
    <div className="min-h-screen bg-black">
      {/* ── Hero ── */}
      <div className="relative h-[55vh] min-h-[360px] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={td(`${project.id}.title`)}
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        {/* Back button */}
        <div className="absolute top-6 start-6 z-10">
          <Link href="/projects">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white transition-colors bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t("backToProjects")}
            </motion.div>
          </Link>
        </div>

        {/* Title area at bottom of hero */}
        <div className="absolute bottom-0 inset-x-0 p-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={cn(
                  "px-3 py-1 text-xs rounded-full border font-medium",
                  categoryColors[project.category] ?? categoryColors.web
                )}
              >
                {project.category}
              </span>
              {project.featured && (
                <span className="flex items-center gap-1.5 px-3 py-1 text-xs rounded-full border bg-yellow-500/10 text-yellow-400 border-yellow-500/20 font-medium">
                  <Star className="h-3 w-3 fill-yellow-400" />
                  {t("featured")}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              {td(`${project.id}.title`)}
            </h1>
            <p className="text-neutral-300 text-lg max-w-2xl">
              {td(`${project.id}.description`)}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex gap-10 lg:gap-16">
          {/* Side nav — desktop only */}
          <aside className="hidden lg:block w-44 shrink-0">
            <div className="sticky top-24">
              <nav className="relative flex flex-col gap-1">
                {/* Vertical line */}
                <div className="absolute start-[7px] top-0 bottom-0 w-px bg-neutral-800" />

                {sections.map((key) => {
                  const sectionId = key === "techStack" ? "tech-stack" : key;
                  const isActive = activeSection === sectionId;
                  return (
                    <button
                      key={key}
                      onClick={() => scrollToSection(sectionId)}
                      className="flex items-center gap-3 py-2 text-start group relative"
                    >
                      <div
                        className={cn(
                          "relative z-10 h-3.5 w-3.5 rounded-full border-2 transition-all duration-300 shrink-0",
                          isActive
                            ? "border-blue-500 bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)]"
                            : "border-neutral-700 bg-neutral-900 group-hover:border-neutral-500"
                        )}
                      />
                      <span
                        className={cn(
                          "text-sm transition-colors duration-200 leading-tight",
                          isActive
                            ? "text-blue-400 font-medium"
                            : "text-neutral-500 group-hover:text-neutral-300"
                        )}
                      >
                        {t(`sections.${key}`)}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* CTA links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-8 flex flex-col gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("viewLiveDemo")}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t("viewSourceCode")}
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-20">
            {/* ── Overview ── */}
            <Section id="overview" title={t("sections.overview")}>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {/* Use overview if available (rich projects), else fall back to longDescription */}
                {project.featureKeys
                  ? td(`${project.id}.overview`)
                  : td(`${project.id}.longDescription`)}
              </p>

              {/* Quick stats row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                <StatCard
                  value={project.technologies.length}
                  label="Technologies"
                />
                <StatCard
                  value={project.gallery?.length ?? 0}
                  label="Screenshots"
                />
                <StatCard
                  value={project.featureKeys?.length ?? 0}
                  label="Features"
                />
                <StatCard
                  value={project.contributors?.length ?? 1}
                  label="Contributors"
                />
              </div>

              {/* Mobile action links */}
              <div className="flex flex-wrap gap-3 mt-6 lg:hidden">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t("viewLiveDemo")}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-700 text-neutral-300 text-sm font-medium hover:border-neutral-500 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    {t("viewSourceCode")}
                  </a>
                )}
              </div>
            </Section>

            {/* ── Tech Stack ── */}
            {project.techCategories && (
              <Section id="tech-stack" title={t("sections.techStack")}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(
                    Object.entries(project.techCategories) as [
                      keyof typeof techCategoryColors,
                      string[],
                    ][]
                  ).map(([category, techs]) => {
                    const colors = techCategoryColors[category];
                    if (!colors || !techs?.length) return null;
                    return (
                      <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                          "p-5 rounded-xl border",
                          colors.border,
                          colors.bg
                        )}
                      >
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className={cn("h-2 w-2 rounded-full", colors.dot)}
                          />
                          <span
                            className={cn(
                              "text-xs font-semibold uppercase tracking-widest",
                              colors.label
                            )}
                          >
                            {t(`techCategories.${category}`)}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-sm bg-black/30 rounded-lg text-neutral-200 border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Section>
            )}

            {/* ── Contributors ── */}
            {(project.contributors?.length ?? 0) > 0 && (
              <Section id="contributors" title={t("sections.contributors")}>
                <div className="flex flex-wrap gap-4">
                  {project.contributors!.map((contributor) => (
                    <motion.div
                      key={contributor.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-4 p-5 rounded-xl border border-neutral-800 bg-neutral-900/60 min-w-[260px]"
                    >
                      {/* Avatar placeholder */}
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          {contributor.name}
                        </p>
                        <p className="text-neutral-400 text-sm">
                          {contributor.role}
                        </p>
                        <div className="flex gap-3 mt-2">
                          {contributor.github && (
                            <a
                              href={contributor.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-500 hover:text-white transition-colors"
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          )}
                          {contributor.linkedin && (
                            <a
                              href={contributor.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-neutral-500 hover:text-blue-400 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Section>
            )}

            {/* ── Description (Features) ── */}
            <Section id="description" title={t("sections.description")}>
              <p className="text-neutral-300 leading-relaxed mb-10 whitespace-pre-line">
                {td(`${project.id}.longDescription`)}
              </p>

              {project.featureKeys && project.featureKeys.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.featureKeys.map((key, i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      className="flex gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 transition-colors"
                    >
                      <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/5 flex items-center justify-center shrink-0 text-blue-400">
                        {featureIcons[key] ?? <BarChart3 className="h-5 w-5" />}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm mb-1">
                          {td(`${project.id}.features.${key}.title`)}
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                          {td(`${project.id}.features.${key}.description`)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </Section>

            {/* ── Gallery ── */}
            {(project.gallery?.length ?? 0) > 0 && (
              <Section id="gallery" title={t("sections.gallery")}>
                {/* Filter tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <FilterTab
                    label={t("gallery.allSections")}
                    active={galleryFilter === "all"}
                    onClick={() => handleFilterChange("all")}
                  />
                  {project.gallerySections?.map((section) => (
                    <FilterTab
                      key={section}
                      label={td(`${project.id}.gallery.sections.${section}`)}
                      active={galleryFilter === section}
                      onClick={() => handleFilterChange(section)}
                    />
                  ))}
                </div>

                {/* Main preview */}
                {selectedImage && (
                  <div className="relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-4">
                    <div className="relative aspect-[16/9]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedImage.src}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={selectedImage.src}
                            alt={td(
                              `${project.id}.gallery.images.${selectedImage.id}.title`
                            )}
                            fill
                            className="object-contain p-3"
                            sizes="(min-width: 1024px) 60vw, 100vw"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Prev / Next arrows */}
                      {filteredImages.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            aria-label={t("gallery.prevImage")}
                            className="absolute start-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
                          </button>
                          <button
                            onClick={nextImage}
                            aria-label={t("gallery.nextImage")}
                            className="absolute end-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transition-colors"
                          >
                            <ChevronRight className="h-5 w-5 rtl:rotate-180" />
                          </button>
                        </>
                      )}

                      {/* Image counter */}
                      <div className="absolute bottom-3 end-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-neutral-400 border border-white/10">
                        {t("gallery.imageCount", {
                          current: selectedIdx + 1,
                          total: filteredImages.length,
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* Image description */}
                {selectedImage && (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImage.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="p-5 rounded-xl bg-neutral-900 border border-neutral-800 mb-5"
                    >
                      <h3 className="text-white font-semibold mb-1.5">
                        {td(
                          `${project.id}.gallery.images.${selectedImage.id}.title`
                        )}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">
                        {td(
                          `${project.id}.gallery.images.${selectedImage.id}.description`
                        )}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* Thumbnail strip */}
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 overflow-x-auto">
                  {filteredImages.map((img, i) => (
                    <button
                      key={img.src}
                      ref={(el) => { thumbnailRefs.current[i] = el; }}
                      onClick={() => setSelectedIdx(i)}
                      className={cn(
                        "relative aspect-video rounded-lg overflow-hidden border transition-all duration-200 shrink-0",
                        i === selectedIdx
                          ? "border-blue-500 ring-1 ring-blue-500/50 opacity-100"
                          : "border-neutral-800 opacity-50 hover:opacity-80 hover:border-neutral-600"
                      )}
                    >
                      <Image
                        src={img.src}
                        alt={td(
                          `${project.id}.gallery.images.${img.id}.title`
                        )}
                        fill
                        className="object-cover"
                        sizes="120px"
                      />
                    </button>
                  ))}
                </div>
              </Section>
            )}

            {/* ── CTA ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 text-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {t("interestedInSimilar")}
              </h3>
              <p className="text-neutral-400 mb-6">{t("interestedDescription")}</p>
              <Link href="/#contact">
                <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/20">
                  {t("getInTouch")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </Link>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ----- Sub-components -----

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <div className="flex-1 h-px bg-neutral-800" />
        </div>
        {children}
      </motion.div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 text-center">
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-xs text-neutral-500 uppercase tracking-wide">{label}</div>
    </div>
  );
}

function FilterTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
        active
          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
          : "bg-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-700"
      )}
    >
      {label}
    </button>
  );
}
