import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsStructural, getProjectStructuralBySlug } from "@/data/portfolio";
import { getTranslations } from "next-intl/server";
import { Navigation } from "@/components/sections/Navigation";
import { ProjectDetailClient } from "@/components/projects/ProjectDetailClient";
import { routing } from "@/i18n/routing";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    projectsStructural.map((project) => ({
      locale,
      slug: project.id,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectStructuralBySlug(slug);
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const td = await getTranslations({ locale, namespace: "data.projects" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });

  if (!project) {
    return { title: t("projectNotFound") };
  }

  return {
    title: td(`${project.id}.title`),
    description: td(`${project.id}.description`),
    openGraph: {
      title: `${td(`${project.id}.title`)} | ${tp("name")}`,
      description: td(`${project.id}.description`),
      type: "article",
      images: [
        {
          url: project.image || "/og-image.png",
          width: 1200,
          height: 630,
          alt: td(`${project.id}.title`),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: td(`${project.id}.title`),
      description: td(`${project.id}.description`),
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectStructuralBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <ProjectDetailClient project={project} />
    </>
  );
}
