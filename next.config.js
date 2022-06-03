/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

const path = require("path");

module.exports = {
  nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  presets: ["@next/babel"],
};
