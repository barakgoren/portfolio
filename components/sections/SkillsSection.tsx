"use client";

import ExpandableCardDemo, {
  ExpandableCard,
} from "@/components/expandable-card-demo-grid";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";

const categoryImages: Record<string, string> = {
  frontend: "./images/web.png",
  backend: "./images/backend.png",
  mobile: "./images/list-share.PNG",
  database: "./images/dbs.png",
  devops:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  other:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
};

const buildCards = (): ExpandableCard[] => {
  const byCategory = skills.reduce<Record<string, string[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const order: Array<keyof typeof byCategory> = [
    "frontend",
    "backend",
    "mobile",
    "database",
    "devops",
    "other",
  ];

  return order
    .filter((category) => byCategory[category]?.length)
    .map((category) => {
      const techList = byCategory[category];
      const title = `${category.charAt(0).toUpperCase()}${category.slice(1)}`;
      return {
        title,
        description: `${techList.length} tools in ${title}`,
        src: categoryImages[category] ?? categoryImages.other,
        ctaText: "Let\'s talk",
        ctaLink: "#contact",
        content: () => (
          <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 text-sm">
            {techList.map((tech) => (
              <li
                key={tech}
                className="px-3 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
              >
                {tech}
              </li>
            ))}
          </ul>
        ),
      } satisfies ExpandableCard;
    });
};

export const SkillsSection = () => {
  const cards = buildCards();

  return (
    <section className="py-10 bg-neutral-50 dark:bg-neutral-950" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-neutral-200 dark:to-neutral-500">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience with
            modern web, mobile, and backend technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <ExpandableCardDemo cards={cards} />
        </motion.div>
      </div>
    </section>
  );
};
