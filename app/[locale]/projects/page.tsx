import { Metadata } from "next";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/MovingBorder";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });

  return {
    title: t("title"),
    description: `${tp("name")} - ${t("description")}`,
    openGraph: {
      title: `${t("title")} | ${tp("name")}`,
      description: t("description"),
    },
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projectsPage" });

  return (
    <main className="min-h-screen bg-neutral-950 pt-20 pb-32 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500 mb-4">
        {t("title")}
      </h1>
      <p className="text-neutral-400 text-lg mb-8">{t("description")}</p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          {t("goBackHome")}
        </Link>
        <Link href="/#contact">
          <Button className="px-6 py-3">
            {t("contactMe")}
            <ArrowRight className="ms-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
