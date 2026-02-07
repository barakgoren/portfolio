"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Button } from "@/components/ui/MovingBorder";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const HeroSection = () => {
  const t = useTranslations("hero");
  const tp = useTranslations("personalInfo");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black/[0.96] antialiased bg-grid-black/[0.02] dark:bg-grid-white/[0.02]">
      <Spotlight
        className="top-0 left-0 md:left-60 md:-top-36 hidden dark:block"
        fill="white"
      />

      <BackgroundRippleEffect rows={40} cols={57} />
      {/* Light mode subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:hidden" />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-500 dark:text-neutral-400 text-lg mb-4"
          >
            {t("greeting")}
          </motion.p>

          {/* Name */}
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
            {tp("name")}
          </h1>

          {/* Title */}
          <TextGenerateEffect
            words={tp("title")}
            className="text-xl md:text-3xl text-neutral-600 dark:text-neutral-300 mt-4"
          />

          {/* Short Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base md:text-lg"
          >
            {tp("shortBio")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Link href="/projects">
              <Button className="px-8 py-3">{t("viewMyWork")}</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="px-8 py-3">
                {t("getInTouch")}
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-4 mt-8"
          >
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              </a>
            )}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-full bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
            >
              <Mail className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-500"
        >
          <span className="text-sm">{t("scrollToExplore")}</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
