import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
