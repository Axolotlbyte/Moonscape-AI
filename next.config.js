/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["replicate.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.replicate.com",
      },
    ],
  },
};
