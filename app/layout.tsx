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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://barakgoren.dev"),
  title: {
    default: "Barak Goren | Senior Software Engineer",
    template: "%s | Barak Goren",
  },
  description:
    "Senior Software Engineer specializing in full-stack web development, mobile applications, and backend systems. Expert in React, Node.js, TypeScript, and React Native.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://barakgoren.dev",
    siteName: "Barak Goren Portfolio",
    title: "Barak Goren | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack web development, mobile applications, and backend systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Barak Goren - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barak Goren | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in full-stack web development, mobile applications, and backend systems.",
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
