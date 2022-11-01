/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["replicate.com", "replicate.delivery"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.replicate.com",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
      },
    ],
  },
};
