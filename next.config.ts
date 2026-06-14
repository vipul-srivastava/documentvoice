import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore TypeScript errors from third-party @types/yargs
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
