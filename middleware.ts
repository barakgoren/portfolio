import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next)
  // - Public files (assets, images, etc.)
  // - /locify/* pages (standalone app legal pages)
  matcher: [
    "/",
    "/(he|en)/:path*",
    "/((?!api|_next|_vercel|locify|.*\\..*).*)",
  ],
};
