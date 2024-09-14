/** @type {import('next').NextConfig} */
export default {
  // Change default build directory
  distDir: "build",

  eslint: {
    // Ignore ESLint during build process
    ignoreDuringBuilds: false,
  },

  experimental: {
    // Optimize import from Mantine packages
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};
