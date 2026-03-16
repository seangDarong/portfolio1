import type { NextConfig } from "next";

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {},
  transpilePackages: [
    "three",
    "meshline",
    "@react-three/fiber",
    "@react-three/drei",
    "@react-three/rapier",
  ],
};

export default nextConfig;
