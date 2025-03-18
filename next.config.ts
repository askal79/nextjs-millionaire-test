import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    prependData: `@import './src/shared/assets/styles/config.scss';`
  },
};

export default nextConfig;
