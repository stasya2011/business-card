import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  defaultLocale: "cs",
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  matcher: ["/", "/(cs|en)/:path*"],
};
