"use client";

import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/MovingBorder";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const router = useRouter();
  const t = useTranslations("notFound");

  return (
    <main className="min-h-screen bg-neutral-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-500">
          {t("heading")}
        </h1>
        <h2 className="text-2xl font-semibold text-white mt-4 mb-2">
          {t("title")}
        </h2>
        <p className="text-neutral-400 mb-8 max-w-md">{t("description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="px-6 py-3">
              <Home className="h-4 w-4 me-2" />
              {t("goHome")}
            </Button>
          </Link>
          <Button
            variant="outline"
            className="px-6 py-3"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4 me-2" />
            {t("goBack")}
          </Button>
        </div>
      </div>
    </main>
  );
}
