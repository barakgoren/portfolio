import { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  projectsStructural,
  getProjectStructuralBySlug,
  personalInfo,
} from "@/data/portfolio";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/MovingBorder";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateStaticParams() {
  return projectsStructural.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const project = getProjectStructuralBySlug(slug);
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const td = await getTranslations({ locale, namespace: "data.projects" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });

  if (!project) {
    return {
      title: t("projectNotFound"),
    };
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
  const { slug, locale } = await params;
  const project = getProjectStructuralBySlug(slug);
  const t = await getTranslations({ locale, namespace: "projectDetail" });
  const td = await getTranslations({ locale, namespace: "data.projects" });

  if (!project) {
    notFound();
  }

  const categoryColors = {
    web: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    mobile: "bg-green-500/20 text-green-400 border-green-500/30",
    backend: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    fullstack: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  };

  return (
    <main className="min-h-screen bg-neutral-950 pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("backToProjects")}
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`px-3 py-1 text-sm rounded-full border ${categoryColors[project.category]}`}
            >
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 text-sm rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                {t("featured")}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {td(`${project.id}.title`)}
          </h1>
          <p className="text-xl text-neutral-400">
            {td(`${project.id}.description`)}
          </p>
        </div>

        {/* Hero Image */}
        <div className="aspect-video rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-6 py-3">
                <ExternalLink className="h-4 w-4 me-2" />
                {t("viewLiveDemo")}
              </Button>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="px-6 py-3">
                <Github className="h-4 w-4 me-2" />
                {t("viewSourceCode")}
              </Button>
            </a>
          )}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t("aboutThisProject")}
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
                {td(`${project.id}.longDescription`)}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                {t("technologiesUsed")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm bg-neutral-800 rounded-lg text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Category Info */}
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800">
              <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                {t("projectType")}
              </h3>
              <p className="text-neutral-200 capitalize">
                {project.category} {t("development")}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            {t("interestedInSimilar")}
          </h3>
          <p className="text-neutral-400 mb-6">
            {t("interestedDescription")}
          </p>
          <Link href="/#contact">
            <Button className="px-8 py-3">{t("getInTouch")}</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
