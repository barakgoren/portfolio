import { MetadataRoute } from "next";
import { projectsStructural } from "@/data/portfolio";
import { routing } from "@/i18n/routing";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.barak-dev.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;

  const staticPages = ["", "/about", "/projects"];

  const entries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : 0.8,
      });
    }
  }

  // Project pages for each locale
  for (const project of projectsStructural) {
    for (const locale of locales) {
      entries.push({
        url: `${baseUrl}/${locale}/projects/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
