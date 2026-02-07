"use client";

import { Timeline } from "@/components/ui/Timeline";
import { experiencesStructural } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ExperienceSection = () => {
  const t = useTranslations("experience");
  const td = useTranslations("data.experiences");

  const timelineData = experiencesStructural.map((exp) => ({
    title:
      exp.startDate +
      (exp.endDate !== "Present"
        ? ` - ${exp.endDate}`
        : ` - ${t("present")}`),
    content: (
      <div className="space-y-4">
        <div className="space-y-1">
          <h4 className="text-xl md:text-2xl font-bold text-neutral-900 dark:text-white">
            {td(`${exp.id}.role`)}
          </h4>
          <div className="flex items-center gap-3 text-neutral-600 dark:text-neutral-400 text-lg">
            {exp.icon && (
              <div className="relative h-8 w-8 overflow-hidden rounded-full border border-neutral-200/60 dark:border-neutral-700/60 bg-neutral-100 dark:bg-neutral-900">
                <Image
                  src={exp.icon}
                  alt={`${exp.company} logo`}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
            )}
            <p>{exp.company}</p>
          </div>
        </div>
        <p className="text-neutral-600 dark:text-neutral-300 text-sm md:text-base">
          {td(`${exp.id}.description`)}
        </p>

        {/* Achievements */}
        <ul className="space-y-2">
          {td
            .raw(`${exp.id}.achievements`)
            .map((achievement: string, idx: number) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400 text-sm"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {achievement}
              </li>
            ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section className="py-10 bg-white dark:bg-neutral-950" id="experience">
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

        <Timeline data={timelineData} />
      </div>
    </section>
  );
};
