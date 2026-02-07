"use client";

import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import { Button } from "@/components/ui/MovingBorder";
import { getFeaturedProjectsStructural } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const ProjectsSection = () => {
  const featuredProjects = getFeaturedProjectsStructural();
  const t = useTranslations("projects");
  const td = useTranslations("data.projects");

  return (
    <section className="py-10 bg-white dark:bg-black" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-neutral-200 dark:to-neutral-500">
            {t("title")}
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <BentoGrid className="max-w-6xl mx-auto">
          {featuredProjects.map((project, i) => (
            <BentoGridItem
              key={project.id}
              title={td(`${project.id}.title`)}
              description={td(`${project.id}.description`)}
              header={
                <ProjectHeader
                  image={project.image}
                  title={td(`${project.id}.title`)}
                  technologies={project.technologies}
                  viewProjectLabel={t("viewProject")}
                />
              }
              className={i === 0 ? "md:col-span-2" : ""}
              icon={
                <div className="flex gap-2 mt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-md bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <Github className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
                    </a>
                  )}
                </div>
              }
            />
          ))}
        </BentoGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link href="/projects">
            <Button variant="outline" className="group">
              {t("viewAllProjects")}
              <ArrowRight className="ms-2 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectHeader = ({
  image,
  title,
  technologies,
  viewProjectLabel,
}: {
  image?: string;
  title: string;
  technologies: string[];
  viewProjectLabel: string;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);
  const [maxVisible, setMaxVisible] = useState(technologies.length);

  const imageSrc = image ?? "/og-image.png";

  useLayoutEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const GAP_PX = 4; // tailwind gap-1

    const calculate = () => {
      const available = containerRef.current?.clientWidth ?? 0;
      const tagNodes = Array.from(
        measureRef.current?.children ?? []
      ) as HTMLElement[];
      let used = 0;
      let count = 0;

      for (const node of tagNodes) {
        const width = node.offsetWidth;
        const nextUsed = used + (count > 0 ? GAP_PX : 0) + width;
        if (nextUsed > available) break;
        used = nextUsed;
        count += 1;
      }

      setMaxVisible(count > 0 ? count - 1 : 1);
    };

    const observer = new ResizeObserver(calculate);
    observer.observe(containerRef.current);
    calculate();

    return () => observer.disconnect();
  }, [technologies]);

  const hiddenCount = technologies.length - maxVisible;

  return (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-900 dark:to-neutral-800 relative overflow-hidden group">
      {/* Project image */}
      {image ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
      )}
      {/* Subtle overlay to keep text legible */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

      {/* Technology tags */}
      <div
        ref={containerRef}
        className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1"
      >
        {technologies.slice(0, maxVisible).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded text-neutral-700 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
        {hiddenCount > 0 && (
          <span className="px-2 py-0.5 text-xs bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded text-neutral-500 dark:text-neutral-400">
            +{hiddenCount}
          </span>
        )}
      </div>

      {/* Hidden measurer for dynamic slicing */}
      <div
        ref={measureRef}
        className="invisible absolute h-0 overflow-hidden"
      >
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded text-neutral-700 dark:text-neutral-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span className="text-white font-medium">{viewProjectLabel}</span>
      </div>
    </div>
  );
};
