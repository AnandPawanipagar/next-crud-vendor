/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_URI: "mongodb://localhost:27017/crud-vendor",
  },
};

module.exports = nextConfig;
