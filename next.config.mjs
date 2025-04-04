import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    domains: ["maps.wikimedia.org"], // ✅ Correctly placed domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "dev-elites",
  project: "sixtusdev",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,

  // Fix the Webpack devtool warning
  devtool: "hidden-source-map",

  // Optional: Automatically delete source maps after upload
  deleteSourceMapsAfterUpload: true,
});
