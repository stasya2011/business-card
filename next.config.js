/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./i18n.ts");
const nextConfig = withNextIntl({
  // Other Next.js configuration ...
});
module.exports = nextConfig;
