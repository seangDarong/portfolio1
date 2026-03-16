import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.glb': {
          loaders: ['@svgr/webpack'],
          as: '*.svg',
        },
      },
    },
  },
  webpack: (config, { isServer }) => {
    // Only apply webpack config when not using Turbopack
    if (!config.experiments?.layers) {
      config.module.rules.push({
        test: /\.(glb|gltf)$/,
        type: 'asset/resource',
      });
    }
    return config;
  },
  transpilePackages: ['three', 'meshline', '@react-three/fiber', '@react-three/drei', '@react-three/rapier']
};

export default nextConfig;
