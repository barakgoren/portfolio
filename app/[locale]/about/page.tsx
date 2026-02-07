import { Metadata } from "next";
import {
  personalInfo,
  experiencesStructural,
  skills,
} from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Calendar,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/MovingBorder";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });

  return {
    title: t("title"),
    description: `${tp("name")}, ${tp("title")}`,
    openGraph: {
      title: `${t("title")} | ${tp("name")}`,
      description: tp("bio"),
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });
  const tp = await getTranslations({ locale, namespace: "personalInfo" });
  const td = await getTranslations({ locale, namespace: "data.experiences" });

  const getSkillsByCategory = (category: string) =>
    skills.filter((s) => s.category === category);

  const frontendSkills = getSkillsByCategory("frontend");
  const backendSkills = getSkillsByCategory("backend");
  const mobileSkills = getSkillsByCategory("mobile");
  const databaseSkills = getSkillsByCategory("database");
  const devopsSkills = getSkillsByCategory("devops");

  return (
    <main className="min-h-screen bg-neutral-950 pt-20 pb-32">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
            {t("title")}
          </h1>
          <p className="mt-4 text-neutral-400 text-lg">{tp("title")}</p>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
              {tp("bio")}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="h-4 w-4" />
              <span>{tp("location")}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            {personalInfo.socialLinks.github && (
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-5 w-5 text-neutral-400" />
              </a>
            )}
            {personalInfo.socialLinks.linkedin && (
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-neutral-400" />
              </a>
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            {t("technicalSkills")}
          </h2>

          <div className="grid gap-6">
            <SkillCategory
              title={t("skillCategories.frontend")}
              skills={frontendSkills}
            />
            <SkillCategory
              title={t("skillCategories.backend")}
              skills={backendSkills}
            />
            <SkillCategory
              title={t("skillCategories.mobile")}
              skills={mobileSkills}
            />
            <SkillCategory
              title={t("skillCategories.database")}
              skills={databaseSkills}
            />
            <SkillCategory
              title={t("skillCategories.devopsTools")}
              skills={devopsSkills}
            />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            {t("workExperience")}
          </h2>

          <div className="space-y-8">
            {experiencesStructural.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-neutral-900 border border-neutral-800"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {td(`${exp.id}.role`)}
                    </h3>
                    <p className="text-neutral-400 flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {exp.company}
                    </p>
                  </div>
                  <p className="text-neutral-500 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>

                <p className="text-neutral-300 mb-4">
                  {td(`${exp.id}.description`)}
                </p>

                <ul className="space-y-2 mb-4">
                  {(td.raw(`${exp.id}.achievements`) as string[]).map(
                    (achievement: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-neutral-400 text-sm"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {achievement}
                      </li>
                    )
                  )}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-neutral-800 rounded-full text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <p className="text-neutral-400 mb-6">{t("ctaText")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="px-8 py-3">{t("getInTouch")}</Button>
            </Link>
            {personalInfo.resumeUrl && (
              <a href={personalInfo.resumeUrl} target="_blank">
                <Button variant="outline" className="px-8 py-3">
                  {t("downloadResume")}
                </Button>
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function SkillCategory({
  title,
  skills,
}: {
  title: string;
  skills: { name: string; category: string }[];
}) {
  if (skills.length === 0) return null;

  return (
    <div className="p-4 rounded-lg bg-neutral-900 border border-neutral-800">
      <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-sm bg-neutral-800 rounded-lg text-neutral-200"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
