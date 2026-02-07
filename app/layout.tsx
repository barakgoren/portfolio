import type React from "react";

// Root layout is a pass-through. The [locale] layout renders <html> and <body>.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
