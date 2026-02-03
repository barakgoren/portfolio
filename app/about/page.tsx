import { Metadata } from "next";
import { personalInfo, experiences, getSkillsByCategory } from "@/data/portfolio";
import { Github, Linkedin, Mail, MapPin, Calendar, Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/MovingBorder";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${personalInfo.name}, a ${personalInfo.title} with expertise in web, mobile, and backend development.`,
  openGraph: {
    title: `About | ${personalInfo.name}`,
    description: personalInfo.bio,
  },
};

export default function AboutPage() {
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
            About Me
          </h1>
          <p className="mt-4 text-neutral-400 text-lg">{personalInfo.title}</p>
        </div>

        {/* Bio */}
        <section className="mb-16">
          <div className="prose prose-invert max-w-none">
            <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-line">
              {personalInfo.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex items-center gap-2 text-neutral-400">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            {personalInfo.socialLinks.github && (
              <Link
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Github className="h-5 w-5 text-neutral-400" />
              </Link>
            )}
            {personalInfo.socialLinks.linkedin && (
              <Link
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-neutral-400" />
              </Link>
            )}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            Technical Skills
          </h2>

          <div className="grid gap-6">
            <SkillCategory title="Frontend" skills={frontendSkills} />
            <SkillCategory title="Backend" skills={backendSkills} />
            <SkillCategory title="Mobile" skills={mobileSkills} />
            <SkillCategory title="Database" skills={databaseSkills} />
            <SkillCategory title="DevOps & Tools" skills={devopsSkills} />
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
            Work Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-xl bg-neutral-900 border border-neutral-800"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
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

                <p className="text-neutral-300 mb-4">{exp.description}</p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-400 text-sm">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
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
          <p className="text-neutral-400 mb-6">
            Interested in working together? Let&apos;s connect!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button className="px-8 py-3">Get In Touch</Button>
            </Link>
            {personalInfo.resumeUrl && (
              <Link href={personalInfo.resumeUrl} target="_blank">
                <Button variant="outline" className="px-8 py-3">
                  Download Resume
                </Button>
              </Link>
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
