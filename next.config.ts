import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/start",
        permanent: true,
      },
    ];
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
    prependData: `@import './src/shared/assets/styles/config.scss';`
  },
};

export default nextConfig;
