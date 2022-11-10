/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "links.papareact.com",
      "cdn-icons-png.flaticon.com",
      "scontent-lga3-1.cdninstagram.com",
    ],
  },
};

module.exports = nextConfig;
