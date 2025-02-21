import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};
module.exports = {
  images: {
    domains: ["example.com"],
  },
};

export default nextConfig;
