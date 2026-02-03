import type { Metadata } from "next";
import type React from "react";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  // Use the live domain so Open Graph resolves absolute asset URLs correctly.
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://www.barak-dev.com"),
  title: {
    default: "Barak Goren | Software Engineer",
    template: "%s | Barak Goren",
  },
  description:
    "Software engineer specializing in full-stack web development, mobile applications, and backend systems. Experienced with React, Node.js, TypeScript, and React Native.",
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
    locale: "en_US",
    url: "https://www.barak-dev.com",
    siteName: "Barak Goren Portfolio",
    title: "Barak Goren | Software Engineer",
    description:
      "Software engineer specializing in full-stack web development, mobile applications, and backend systems. ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barak Goren - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barak Goren | Software Engineer",
    description:
      "Software engineer specializing in full-stack web development, mobile applications, and backend systems.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
