const {
  i18n
} = require('./next-i18next.config')
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          dimensions: false,
        },
      }],
    });
    return config;
  },
}
module.exports = nextConfig