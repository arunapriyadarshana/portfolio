import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Allow images from res.cloudinary.com
  },
};

export default withSentryConfig(nextConfig, {
  // Sentry organization and project
  org: "aruna-tf",
  project: "portfolio",

  // Configuration options for Sentry Webpack plugin
  silent: !process.env.CI, // Only log in CI environments
  widenClientFileUpload: true, // Upload more source maps for better stack traces
  hideSourceMaps: true, // Hide source maps from client bundles
  disableLogger: true, // Remove Sentry logging statements to reduce bundle size

  // Optional: Uncomment to route Sentry requests through a custom route
  // tunnelRoute: "/monitoring",

  // Enable automatic Vercel Cron Monitor instrumentation
  automaticVercelMonitors: true,
});
