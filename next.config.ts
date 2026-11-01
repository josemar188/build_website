import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // A página inicial abre em português; o botão de língua troca para /uk
  async redirects() {
    return [{ source: "/", destination: "/pt", permanent: false }];
  },
};

export default nextConfig;
