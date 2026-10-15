import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    // Photos are served from Bolder's and Jared's own sites. Swap to files in
    // /public (and drop these patterns) once final assets are delivered.
    remotePatterns: [
      new URL("https://bolderadventurepark.com/wp-content/uploads/**"),
      new URL("https://epicjared.com/assets/**"),
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
