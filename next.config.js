/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    API_KEY: process.env.API_KEY,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
  }
}

module.exports = nextConfig
