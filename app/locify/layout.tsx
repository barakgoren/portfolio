import type { Metadata } from "next";
import type React from "react";
import "../globals.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function LocifyLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
