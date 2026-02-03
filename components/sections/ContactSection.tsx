"use client";

import { MovingBorder } from "@/components/ui/MovingBorder";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-10 bg-neutral-50 dark:bg-neutral-950" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-700 to-neutral-400 dark:from-neutral-200 dark:to-neutral-500">
            Get In Touch
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Let&apos;s Connect</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Whether you have a question, want to start a project, or just want to say hi, 
              feel free to reach out. I&apos;m always open to new opportunities and interesting conversations.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800 border border-neutral-300 dark:border-neutral-700"
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Ready to start a project?</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>

            <MovingBorder
              as="a"
              href={`mailto:${personalInfo.email}`}
              containerClassName="w-full"
              className="px-8 py-4 flex items-center justify-center gap-2 w-full"
            >
              <Send className="h-4 w-4" />
              Send me an email
            </MovingBorder>

            {personalInfo.resumeUrl && (
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                Download Resume
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
