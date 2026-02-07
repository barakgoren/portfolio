"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import ReactCountryFlag from "react-country-flag";

export const LanguageSwitcher = ({ className }: { className?: string }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === "en" ? "he" : "en";
  const nextFlagCode = nextLocale === "he" ? "IL" : "US";

  const handleSwitch = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <motion.button
      onClick={handleSwitch}
      disabled={isPending}
      className={cn(
        "relative h-10 w-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-700 text-sm font-bold text-neutral-700 dark:text-neutral-200",
        isPending && "opacity-50",
        className
      )}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextLocale === "he" ? "Hebrew" : "English"}`}
    >
      <ReactCountryFlag
        aria-hidden
        svg
        countryCode={nextFlagCode}
        style={{ width: "1rem", height: "1rem" }}
      />
    </motion.button>
  );
};
