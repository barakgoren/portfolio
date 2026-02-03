"use client";

import { FloatingDock } from "@/components/ui/FloatingDock";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navigation } from "@/data/portfolio";
import { Home, User, FolderOpen, Mail, Sun, Moon } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Home: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  About: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  Projects: <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
  Contact: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
};

export const Navigation = () => {
  const navItems = navigation.map((item) => ({
    title: item.name,
    icon: iconMap[item.name] || <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: item.href,
  }));

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
      <FloatingDock items={navItems} />
      <ThemeToggle className="hidden md:flex" />
    </nav>
  );
};
