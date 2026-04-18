import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Navigation } from "@/components/sections/Navigation";
import { ProjectsPageClient } from "@/components/projects/ProjectsPageClient";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });

  return {
    title: t("title"),
    description: `${tp("name")} — ${t("description")}`,
    openGraph: {
      title: `${t("title")} | ${tp("name")}`,
      description: t("description"),
    },
  };
}

export default async function ProjectsPage() {
  return (
    <>
      <Navigation />
      <ProjectsPageClient />
    </>
  );
}
