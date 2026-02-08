import type { Metadata } from "next";
import type React from "react";
import { Inter, JetBrains_Mono, Heebo } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heebo",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_BASE_URL || "https://www.barak-dev.com",
    ),
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "Software Engineer",
      "Full Stack Developer",
      "React",
      "TypeScript",
      "Node.js",
      "React Native",
      "Mobile Development",
      "Web Development",
    ],
    authors: [{ name: "Barak Goren" }],
    creator: "Barak Goren",
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
    },
    openGraph: {
      type: "website",
      locale: locale === "he" ? "he_IL" : "en_US",
      url: "https://www.barak-dev.com",
      siteName: t("ogSiteName"),
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      languages: {
        en: "/en",
        he: "/he",
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === "he" ? "rtl" : "ltr";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Barak Goren",
    url: "https://www.barak-dev.com",
    jobTitle: "Software Engineer",
    sameAs: [
      "https://www.linkedin.com/in/barakgoren/",
      "https://github.com/barakgoren",
    ],
  };

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`${inter.variable} ${heebo.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
