import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "cs",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(cs|en)/:path*"],
};
