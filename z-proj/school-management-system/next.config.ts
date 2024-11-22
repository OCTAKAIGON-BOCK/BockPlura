import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      typescript: path.resolve(__dirname, 'node_modules/typescript'),
    };
    return config;
  },
};

export default nextConfig;
