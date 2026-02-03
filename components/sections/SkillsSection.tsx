"use client";

import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export const SkillsSection = () => {
  // Map skills to include visual representation
  const skillItems = skills.map((skill) => ({
    name: skill.name,
  }));

  // Split skills into two rows for visual variety
  const firstRow = skillItems.slice(0, Math.ceil(skillItems.length / 2));
  const secondRow = skillItems.slice(Math.ceil(skillItems.length / 2));

  return (
    <section className="py-20 bg-neutral-950" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience with modern web, mobile, and backend technologies.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <InfiniteMovingCards
            items={firstRow}
            direction="right"
            speed="slow"
          />
          <InfiniteMovingCards
            items={secondRow}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {[
            { name: "Frontend", count: skills.filter((s) => s.category === "frontend").length },
            { name: "Backend", count: skills.filter((s) => s.category === "backend").length },
            { name: "Mobile", count: skills.filter((s) => s.category === "mobile").length },
            { name: "Database", count: skills.filter((s) => s.category === "database").length },
            { name: "DevOps", count: skills.filter((s) => s.category === "devops").length },
            { name: "Other", count: skills.filter((s) => s.category === "other").length },
          ].map((category) => (
            <div
              key={category.name}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center"
            >
              <p className="text-2xl font-bold text-white">{category.count}</p>
              <p className="text-sm text-neutral-400">{category.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
