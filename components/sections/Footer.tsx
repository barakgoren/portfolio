import { personalInfo, navigation } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
            <p className="text-neutral-400 text-sm max-w-xs">
              {personalInfo.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3">
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
              {personalInfo.socialLinks.twitter && (
                <Link
                  href={personalInfo.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-neutral-400" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
