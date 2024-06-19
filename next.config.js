require('dotenv').config()
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API: process.env.API,
  },
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ...nextConfig,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
