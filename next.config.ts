import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          
  basePath: "/portfolio1",   
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
