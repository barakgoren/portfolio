"use client";

import { personalInfo, navigationItems } from "@/data/portfolio";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export const Footer = () => {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");
  const tp = useTranslations("personalInfo");

  return (
    <footer className="bg-neutral-100 dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              {tp("name")}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-xs">
              {tp("shortBio")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors text-sm"
                >
                  {tn(item.key as "home" | "about" | "projects" | "contact")}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
              {t("connect")}
            </h4>
            <div className="flex gap-3">
              {personalInfo.socialLinks.github && (
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Github className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </a>
              )}
              {personalInfo.socialLinks.linkedin && (
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} {tp("name")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};
