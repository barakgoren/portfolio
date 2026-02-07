"use client";

import { FloatingDock } from "@/components/ui/FloatingDock";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigationItems } from "@/data/portfolio";
import { Home, User, FolderOpen, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

const iconMap: Record<string, React.ReactNode> = {
  home: (
    <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  about: (
    <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  projects: (
    <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
  contact: (
    <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  ),
};

export const Navigation = () => {
  const t = useTranslations("nav");

  const navItems = navigationItems.map((item) => ({
    title: t(item.key as "home" | "about" | "projects" | "contact"),
    icon:
      iconMap[item.key] ||
      <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: item.href,
  }));

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <FloatingDock items={navItems} />
      <LanguageSwitcher />
      <ThemeToggle className="md:flex" />
    </nav>
  );
};
